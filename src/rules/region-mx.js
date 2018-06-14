/**
 * @name region-mx
 * @description Returns true if the value corresponds to a state code in MX.
 *
 * @returns {boolean}
 * @param {string} value
 * @param {string} message
 */
exports.default = function regionmx(value, message) {
  var states = {
      AG: 'Aguascalientes',
      BC: 'Baja California',
      BS: 'Baja California Sur',
      CM: 'Campeche',
      CS: 'Chiapas',
      CH: 'Chihuahua',
      CO: 'Coahuila',
      CL: 'Colima',
      DF: 'Distrito Federal',
      DG: 'Durango',
      GT: 'Guanajuanto',
      GR: 'Guerrero',
      HG: 'Hidalgo',
      JA: 'Jalisco',
      MX: 'Mexico',
      MI: 'Michoacan',
      MO: 'Morelos',
      NA: 'Nayarit',
      NL: 'Nuevo Leon',
      OA: 'Oaxaca',
      PU: 'Puebla',
      QT: 'Queretaro',
      QR: 'Quintana Roo',
      SL: 'San Luis Potosi',
      SI: 'Sinaloa',
      SO: 'Sonora',
      TB: 'Tabasco',
      TM: 'Tamaulipas',
      TL: 'Tlaxcala',
      VE: 'Veracruz',
      YU: 'Yucatan',
      ZA: 'Zacatecas',
    },
    test = (value || '').toUpperCase(),
    ok = Object.keys(states).indexOf(test.toUpperCase()) > -1;

  return (ok ? true : (message || false));
};
