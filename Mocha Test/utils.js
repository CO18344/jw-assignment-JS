function checkEqualObjects(object1, object2) {
    keys1 = Object.keys(object1);
    keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length)
      return false;
  
    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i])
        return false;
    }
  
    for (let i = 0; i < keys1.length; i++) {
      if (typeof object1[keys1[i]] !== typeof object2[keys2[i]])
        return false;
  
      if (typeof object1[keys1[i]] == 'object') {
        if (Array.isArray(object1) !== Array.isArray(object2))
          return false;
      }
    }
  
    for (let i = 0; i < keys1.length; i++) {
      let status = true;
      if (typeof object1[keys1[i]] == 'object') {
        status = checkEqualObjects(object1[keys1[i]], object2[keys1[i]])
      }
      else {
        if (object1[keys1[i]] !== object2[keys1[i]])
          status = false;
      }
  
      if (!status) return false;
    }
  
    return true;
  }

  exports.checkEqualObjects = checkEqualObjects;