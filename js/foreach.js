let cakes_ar = ["banana","kiwi","melon","chocolate"];


function init(){
    createAllCakes();
}

function createAllCakes(){

  // for(let i = 0; i< cakes_ar.length;i++){
  //   let itemVal = cakes_ar[i]
  //   // 
  // }
// itemval - יכיל את המידע באותו תא
// i - יכיל את האינדקס באותו תא
  cakes_ar.forEach(function(itemVal,i){
    document.querySelector("#id_ul").innerHTML += `
      <li>${itemVal} cake -- ${i}</li>
    `
  })
}




init();