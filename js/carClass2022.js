// מחלקה 2022 - מהניילונים נשתמש בה
class CarClass2022 {
  constructor(_name, _color) {
    this.name = _name;
    this.color = _color;
  }
// addToHtml - render
  addToHtml() {
    document.querySelector("#id_ul").innerHTML += `
      <li>${this.name} - ${this.color} --</li>
    `
  }
}