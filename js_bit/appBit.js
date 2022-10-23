function init(){
  createBtns();
}

function createBtns(){
  bit_ar.forEach(function(item){
    let bit = new BitClass("#id_row", item.price_usd,item.name);
    bit.render();
    
  })
}

init();