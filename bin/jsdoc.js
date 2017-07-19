/**
 * @author Robert King
 * @module jsdoc
 * @description Loops through source directories and generates README.md files in the directory
 */

var fs = require('fs'),
  path = require('path'),
  child = require('child_process'),
  src = process.argv[2];

/**
 * @private
 * @function updateReadme
 * @description Amends the documentation
 * @param {string} dir
 * @returns {undefined}
 */
function updateReadme(dir) {
  var fn = path.join(dir, 'README.md'),
    sep = '<!-- jsdoc-to-markdown auto generated content DO NOT EDIT BELOW THIS LINE -->',
    pname = path.join(dir, '*'),
    cmd = 'jsdoc2md ' + pname,
    contents = '',
    raw,
    readme,
    out = fs.createWriteStream(fn),
    doc,
    written;

  /* get the static content of the README file if it exists */
  if (fs.existsSync(fn)) {
    raw = fs.readFileSync(fn, 'utf8');
    readme = raw.split(sep);
    contents = readme[0].trim().replace(/$/, '\n');
  }

  /* create a write stream for the README */

  /* as soon as the process opens, write the contents and header to the stream */
  out.on('pipe', () => {
    out.write([contents, sep, '\n'].join('\n'));
  });

  /* pipe the output of jsdoc-to-markdown to the README */
  doc = child.exec(cmd);
  doc.stdout.pipe(out);

  /* track if content is written to the README */
  written = contents.length > 0;
  doc.stdout.on('data', (data) => {
    if (data) {
      written = true;
    }
  });

  /* when the process ends, clean up any files that don't have content */
  doc.stdout.on('end', () => {
    if (!written) {
      fs.unlink(fn, (err) => {
        if (err) {
          /* Unable to delete <fn> */
        }
      });
    }
  });
}

/**
 * @private
 * @function documentDirectory
 * @description Runs jsdoc2md in a directory and loops through subdirectories
 * @param {string} dir
 * @returns {undefined}
 */
function documentDirectory(dir) {
  fs.readdir(dir, (err, list) => {
    if (!err && list) {
      /* run jsdoc-to-markdown for current directory */
      updateReadme(dir);

      /* loop through the entries in the directory and check if it's a directory */
      list.forEach((file) => {
        /* set a variable for the directory entry */
        var entry = path.join(dir, file);

        /* if the entry is a directory, recursively call the docDir function */
        if (fs.statSync(entry).isDirectory()) {
          documentDirectory(entry);
        }
      });
    }
  });
}

documentDirectory(src);

