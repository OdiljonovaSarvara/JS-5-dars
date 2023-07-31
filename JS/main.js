  /* replace in JS */

// let matn = "Salom hammaga! Salom berdim hammaga."

// console.log(matn.replace(/salom|berdim|hammaga/gi,"alik"));
// let yangiMatin = matn.replace(/salom|hammaga/gi,function (soz){
//     if (soz == "Salom" || soz == "salom"){
//     return "alik";
//     }
//     else if (soz == "hammaga"){
//         return "barchaga"
//     }
// });
// console.lig(yangiMatin)

// let list = [];
// list.push("Sarvara");
// console.log(list.length);
// console.log(list);
// list.push("Odiljonova");
// console.log(list.length);
// console.log(list);
// list.push("18 yosh");
// console.log(list.length);
// console.log(list);
//
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);


/* Shift & Unshift */

// let list = [];
// list.unshift("Madina");
// console.log(list.length);
// console.log(list);
// list.unshift("Rahimova");
// console.log(list.length);
// console.log(list);
// list.unshift("17 yosh");
// console.log(list.length);
// console.log(list);
// console.log(list.shift());
// console.log(list);



/* Sort in JS */

//

// let sonlar = [355,568.34,56,17,285,365,456,999,697,589];
// let tartiblangansonlar = sonlar.sort(function (a,b){
//     return a-b;
// })
// console.log(tartiblangansonlar.reverse());


// let belgilar = "0123456789";
// function parolber(){
//     let i = 0;
//     let parol = '';
//     while (i < 6){
//         let son = parseInt(Math.random() * belgilar.length);
//         parol += belgilar[son];
//         i++;
//     }
//     document.querySelector("input").value = parol;
// }

document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
  document.querySelector('.nolga').addEventListener('click',function (){
      document.querySelector('.ekran').value = 0;
  });





















