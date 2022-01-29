const testCases = {
    testCase1: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome',
        age: 32,
      },
      expected: true
    },
  
    testCase2: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        last_name: 'Awesome',
        age: 32,
      },
      expected: false
    },
  
    testCase3: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome_name',
        age: 32,
      },
      expected: false
    },
  
    testCase4: {
      obj1: {
        name: 'Awesome',
        age: 32,
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        salary: 1100
      },
      expected: false
    },
  
    testCase5: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      expected: true
    },
  
    testCase6: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        },
        job: 'Software Engineer'
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      expected: false
    },
  
    testCase7: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
  
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        },
        job: 'Data Scientist'
      },
      expected: false
    },
  
    testCase8: {
      obj1: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 160003
        }
      },
      obj2: {
        name: 'Awesome',
        age: 32,
        "favorite color": 'Red',
        address: {
          city: 'Chandigarh',
          state: 'Punjab',
          pincode: 9000
        },
      },
      expected: false
    }
}

var assert = require('assert');
var utils = require('..\\utils.js')

describe('isEqual', function () {
    describe('Two objects', function(){
        keys = Object.keys(testCases);
        for(let i=0;i<keys.length;i++){
            it('should return value equal to expected', function () {
                assert.equal(utils.checkEqualObjects(testCases[keys[i]].obj1,
                testCases[keys[i]].obj2), testCases[keys[i]].expected);
            });
        }    
    });
    
});