//////////////////////////////

// !function(){
//   function foo(){
//     console.log('self execute');
//   }
//   foo();
// }();

//////////////////////////////

// var crazyCoolLibrary = {
//   word: 'cool',
//   speak: function(){
//     console.log(this.word);
//   }
// };

// !function(object){
//   object.shout = function(string){
//     console.log(string.toUpperCase());
//   };
//   object.shout(object.word);
//   object.speak();

//   var exports = {};
//   exports.shout = object.shout;
//   return exports;
// }(crazyCoolLibrary);

//////////////////////////////

var library = function(){
  var exports = {};
  
  exports.word = 'word';

  exports.shout = function(string){
    console.log(string.toUpperCase());
  };

  return exports;
}();


var app = function(library){
  var exports = {};

  exports.word = 'different word';

  exports.shout = function(string){
    library.shout(string + ' and a little extra');
  };

  return exports; 
}(library);