'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const fromSeparators = fromFormat[3];
  const toSeparators = toFormat[3];

  const dateParts = date.split(fromSeparators);

  const  dateMap = { };

  for (let i = 0; i < 3; i++) {
    dateMap[fromFormat[i]] = dateParts[i];
  }

  if (dateMap['YYY'] && !dateMap['YY']) {
    dateMap['YY'] = dateMap['YYY'].slice(-2);
  }

  if (dateMap['YY'] && !dateMap['YYY']) {
     const year = Number(dateMap['YY']);
     dateMap['YYY'] = year < 30
     ? '20' + dateMap['YY']
     : '19' + dateMap['YY'];
  }

  const result = [];

  for (let i = 0; i < 3; i++) {
    result.push(dateMap[toFormat[i]]);
  }

  return result.join(toSeparators);
}
   module.exports = formatDate;
