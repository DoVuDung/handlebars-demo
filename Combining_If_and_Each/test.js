console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      let context = {
        languages: [

          {
            name: $cobol,
            modern: false
          }
        ]
      };
    };

    varCallbacks = [
      function($cobol){
        if($cobol.value !== 'COBOL'){
          return {failure: 'Did you add an object with a key of `name` and value `\'COBOL\'`? to the `langauges` array?'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    let jsCheck = code.match(/name:\s*[\'\"]javascript[\'\"],\s*modern:\s*true/gi)
    let htmlCheck = code.match(/name:\s*[\'\"]html[\'\"],\s*modern:\s*true/gi)
    let cssCheck = code.match(/name:\s*[\'\"]css[\'\"],\s*modern:\s*true/gi)
    assert.isOk(isMatchOne, 'Did you add a object to the `languages` array with a `name` and `modern` property?');
    assert.isOk(jsCheck && htmlCheck && cssCheck, 'Did you leave alone the original elements in the `languages` array?')
  });
});
