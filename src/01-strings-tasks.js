  @param {string} str
  @return {array}
 
  @example
    'angus.young@gmail.com,brian.johnson@hotmail.com,bon.scott@yahoo.com' => 'angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com'
    'info@gmail.com' => ['info@gmail.com']
 /
function extractEmails(/ str /) {
  throw new Error('Not implemented');
}


/
  Returns the string representation of rectangle with specified width and height
  using pseudographics symbols:
   _ - horizontal line, | - vertical line, corners - +.
 
  @param {number} width
  @param {number} height
  @return {string}
 
  @example
 
            '┌────┐\n'+
            '│    │\n'+
            '└────┘\n'
 /
function getRectangleString(/ width, height /) {
  throw new Error('Not implemented');
}

/
  Encode specified string with ROT13 cipher
  See details:    https://en.wikipedia.org/wiki/ROT13
 
  @param {string} str
  @return {string}
 
  @example
 
    'My name is John' => 'Zl anzr vf Wbua'
    'Hello World' => 'Uryyb Jbeyq'
    'Abracadabra' => 'Noenpnqoen'
    'test' => 'grfg'
 /
function encodeToRot13(/ str /) {
  throw new Error('Not implemented');
}

/
  Returns true if the value is string; otherwise false.
  @param {string} value
  @return {boolean}
 
  @example
    isString() => false
    isString(null) => false
    isString() => false
    isString({}) => false
    isString('test') => true
    isString(new String('test')) => true
 /
function isString(/ value /) {
  throw new Error('Not implemented');
}

/
  Returns date string in human-readable format
  @param {Date} value
  @return {string}
 
  @example
    2016-08-17T09:26:15.947Z => '17 August 2016 09:26'
    2016-08-17T01:00:00.000Z => '17 August 2016 01:00'
 /
function toHumanReadableDate(/ value /) {
  throw new Error('Not implemented');
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  toHumanReadableDate
};
