class TvClass{
  constructor(_img,_name,_views,_genere){
    this.img = _img;
    this.name = _name;
    this.views= _views;
    this.genere = _genere;
  }

  // render -> addToHtml
  render(){
    let myDiv = document.createElement("div");
    myDiv.className = "col-md-6 border p-2";
    document.querySelector("#id_row").append(myDiv);

    myDiv.innerHTML = `
    <img src="images/${this.img}" alt="${this.name}" class="w-50 float-start me-2">
    <h2>${this.name}</h2>
    <div>Views: ${this.views}</div>
    <div>Genere:${this.genere}</div>
    `
  }
}