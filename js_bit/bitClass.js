class BitClass{
  constructor(_parent ,_price, _name){
    // parent - מייצג את ההורה , ככה שהמחלקה יהיה ניתן למחזר
    // אותה בקלות בקוד באפליקציה/עמוד אחר
    this.parent = _parent;
    // Number -> מכיריחי אותו להיות מספר
    // toLocaleString -> מוסיף פסיקים ונקודה עד 3 ספרות אחרי העשרוני
    this.price = Number(_price).toLocaleString();
    this.price_ils = Number(_price * 3.23).toLocaleString();
    this.name = _name;
  }

  render(){
    let myDiv = document.createElement("div");
    myDiv.className = "col-md-4 border my-2 p-2 shadow";
    document.querySelector(this.parent).append(myDiv);

    myDiv.innerHTML += `
    <h4>${this.name} - ${this.price} USD</h4>
    <button class="my-btn">Show Ils price</button>
    `
    // מייצר משתנה שמדבר עם הכפתור שיצרנו בדיב דרך הקלאס המיוחד
    // שנתנו לו 
    let btn = myDiv.querySelector(".my-btn");
    // btn.name = this.name;
    // let obj = {name:"koko"}
    // bind(this) -> גורם לטיז בתוך הפונקציה של האירוע
    // להתייחס לטיז של המחלקה ולא של הכפתור
    btn.addEventListener("click", function(){
      alert(this.price_ils + " ILS");
    }.bind(this))
  }
}