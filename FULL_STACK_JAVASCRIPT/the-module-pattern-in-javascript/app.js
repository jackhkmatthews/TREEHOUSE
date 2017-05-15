// !function(){
//   function foo(){
//     console.log('self execute');
//   }
//   foo();
// }();

var crazyCoolLibrary = {
  word: 'cool',
  speak: function(){
    console.log(this.word);
  }
};

!function(object){
  object.shout = function(string){
    console.log(string.toUpperCase());
  };
  object.shout(object.word);
  object.speak();
}(crazyCoolLibrary);