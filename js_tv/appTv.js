function init(){
  createAllTvShows();
}

function createAllTvShows(){
  tvJson_ar.forEach(function(item){
    let tv1 = new TvClass(item.image,item.name,item.views,item.genere);
   tv1.render();
  })
  // let tv1 = new TvClass("simpsons.jpg","The simpsons",10000,"Cartoon");
  // tv1.render();

}


init();