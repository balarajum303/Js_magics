////////////////var in closure //////////////////////
// for (var i = 0; i < 5; i++) {
//     console.log(i)  ////0,1,2,3,4
//     setTimeout(() => console.log(i), 1000);  /// 5,5,5,5,5
// }
//-----------------------------------------
// for(var i=0;i<5;i++){
//     (function(i){
//         setTimeout(()=>console.log(i),1000)     //0,1,2,3,4
//     })(i)
// }
//----------------------------------------------

// for(var i=0;i<5;i++){
//     function clos(i){
//         setTimeout(()=>console.log(i),1000)  //0,1,2,3,4
//     }
//     clos(i)
// }



// // Impure Function
// var x = 10;
// function addToX(y) {
//   x = x + y; // Modifies external state
//   return x;
// }

// console.log(addToX(5)); // 15
// console.log(addToX(5)); //20

///////////////////////////////////// handling multiple asynchronous  //////////////////////////////////
//-------------by using call back------------------------
// function Balu(str, cb) {
//   setTimeout(() => {
//     console.log(str);
//     cb();
//   },1000);
// }
// function print() {
//   Balu("A", () => {
//     Balu("B", () => {
//       Balu("C", () => {});
//     });
//   });
// }
// print();
//---------------by using promises----------------------------
// function Balu(str) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(str);
//       resolve();
//     },1000);
//   });
// }
// function print() {
//   Balu("A")
//   .then(()=>Balu("B"))
// .then(()=>Balu("C"))
// }
// print()
//------------by using Async/Await-----------
// function Balu(str) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(str);
//       resolve();
//     },1000);
//   });
// }
// async function print() {
//   try {
//     await Balu("A");
//     await Balu("B");
//     await Balu("c");
//   } catch (err) {
//     console.log(err);
//   }
// }
// print();