const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      for (let e in collection){
        callBack(collection[e])
      }
      return collection
    },

    map: function(collection, callBack) {
      //* not modifying the original
      //* 
      let result = [];
      if (!(collection instanceof Array)){
        result = Object.values(colletion)
      }

      for (let element in collection){
        emptyThing.push(callBack(collection[element]))
      }
      return result
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
