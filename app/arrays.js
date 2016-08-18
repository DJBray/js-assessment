exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum=0;
    for(var i=0; i<arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter(t => t != item);
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while(index != -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(t => t == item).length;
  },

  duplicates: function(arr) {
    //Got performance down to O(n)

    var ans = [];
    for(var i=0; i<arr.length; i++) {
      if(ans[''+arr[i]] === undefined) {
        ans[''+arr[i]] = 1;
      } else {
        ans[''+arr[i]]++;
      }
    }
  
    var realAns = [];
    for(var key in ans) {
      if(ans[key] > 1) {
        realAns.push(parseInt(key));
      }
    }

    return realAns;
  },

  square: function(arr) {
    return arr.map(t => t*t);
  },

  findAllOccurrences: function(arr, target) {
    var ans = [];
    for(var i=0; i<arr.length; i++) {
      if(arr[i] === target) {
        ans.push(i);
      }
    }
    return ans;
  }
};
