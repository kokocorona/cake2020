function init(){
  let st = "The Fox jump over the lazy sheep!";
  document.querySelector("#id_h2").innerHTML += `${st} <br>`;
  let upper = st.toUpperCase(); // הופך את הסטירנג לאותיות גדולות
  document.querySelector("#id_h2").innerHTML += `upper ${upper} <br>`;
  let length = st.length; // מחזיר את אורך התווים של הסטרינג
  document.querySelector("#id_h2").innerHTML += `length: ${length} <br>`;
  let indexOfFox = st.indexOf("Fox"); // מאיזה מיקום תו מתחיל המילה פוקס אם לא מוצא מחזיר מינוס 1
  document.querySelector("#id_h2").innerHTML += `index of fox: ${indexOfFox} <br>`;
  let replaceAll = st.replaceAll("sheep","tiger"); // יחליף את כל הכבשים בסטרינג בטייגר
  document.querySelector("#id_h2").innerHTML += `replace all: ${replaceAll} <br>`;
  
  let substring = st.substring(4,7); // יחזיר FOX
  document.querySelector("#id_h2").innerHTML += `sub string: ${substring} <br>`;
  
  let includes = st.includes("lazy") // אם מוצא מחזיר אמת אם לא מוצא מחזיר שקר
  document.querySelector("#id_h2").innerHTML += `includes lazy: ${includes} <br>`;
  // st[4] -> יחזיר את תו 4 מהמחורזת
  document.querySelector("#id_h2").innerHTML += `st[4]: ${st[4]} <br>`;
  
}

init();