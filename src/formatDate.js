'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const fromSeparators = fromFormat = fromFormat[3];
  const toSeparators = toFormat[3];

  const dateParts = date.split(fromSeparators);

  const  dateMap = { };

  for (let i = 0; i < 3; i++) {
    dateMap[fromFormat[i]] = dateParts[i];
  }

  if (dateMap['yyy'] && !dateMap['yy']) {
    dateMap['yy'] = dateMap['yyy'].slice(-2);
  }

  if (dateMap['yy'] && !dateMap['yyy']) {
     const year = Number(dateMap['yy']);
     dateMap['yyy'] = year < 30 ? '20' + dateMap['yy'] : '19' + dateMap['yy'];
  }

  const result = toFormat.slice(0, 3).map(part => dateMap[part]);

  return result.join(toSeparators);
}
    module.exports = formatDate;
