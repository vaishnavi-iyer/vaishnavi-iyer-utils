// module.exports = {
//   filter: function(func, arr) {
//     return(arr.filter(func))
//   },
//   map: function(func, arr) {
//     for(var i=0; i<arr.length;i++){
//       arr[i] = func(arr[i])
//     }
//     return arr
//   },
//   countIf: function  (testFunc, arr) {
//       var items = arr.filter(testFunc)
//       return items.length
//      }
// }

  var filter =  function (func, arr) {
    return(arr.filter(func))
    }
  var map=  function (func, arr) {
    for(var i=0; i<arr.length;i++){
      arr[i] = func(arr[i])
    }
    return arr
    }
  var countIf = function (testFunc, arr) {
    var items = arr.filter(testFunc)
    return items.length
   }

   module.exports = {

      map: map,
      filter:filter,
      countIf: countIf

   }
