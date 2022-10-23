let car1 = {
  name:"Mazda",
  color:"blue",
  addToHtml:function(){
    document.querySelector("#id_ul").innerHTML += `
      <li>${this.name} - ${this.color}</li>
    `
  }
}

let car2 = {
  name:"Toyota",
  color:"white",
  addToHtml:function(){
    document.querySelector("#id_ul").innerHTML += `
      <li>${this.name} - ${this.color}</li>
    `
  }
}

//let car3 = car2;
let car3 = new CarClass("Prius","blue");
let car4 = new CarClass2022("Tesla","black");


// ישפיע גם על המאפיין שם של קאר 2
//car3.name = "Ferrari";


function init(){
  car1.addToHtml();
  car2.addToHtml();
  car3.addToHtml(); 
  car4.addToHtml();
}




init();