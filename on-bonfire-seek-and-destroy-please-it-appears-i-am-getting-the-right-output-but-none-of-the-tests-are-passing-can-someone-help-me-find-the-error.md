  var arg = arguments.length;
  var newArr = [];
  var found = false;
  
  for (i = 0; i < arr.length; i++) {
    found = false;
    for (j = 1; j < arg - 1; j++) {
      if (arr[i] == arguments[j]) {
        found = true;
      }
    } 
    if (!found) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}