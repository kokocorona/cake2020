// 2009 - 2017
function CarClass(_name,_color){
  this.name = _name;
  this.color = _color;

  this.addToHtml = function(){
    document.querySelector("#id_ul").innerHTML += `
      <li>${this.name} - ${this.color}</li>
    `
  }
}