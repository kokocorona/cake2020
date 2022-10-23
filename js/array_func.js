let abc_ar = ["b","c","d","e","f"];

function init(){
  // abc_ar[4] = "z";
  // abc_ar.push("g"); // מוסיף תא חדש בסוף המערך ומכניס לו את ג'י
  abc_ar.unshift("a"); // מוסיף תא חדש בהתחלה , דוחף את כל התאים קדימה באינדקס 
  // let pop = abc_ar.pop();// ימחוק את התא האחרון ויחזיר את הערך שלו
  // console.log("pop",pop);
  // let shift = abc_ar.shift(); // מוחק את התא הראשון ויחזיר את הערך שלו
  // console.log("shift",shift);
  
  // let splice_ar = abc_ar.splice(3,1); // ימחוק את תא שלוש וימחוק רק אותו כי רשום אחד
  let searchE = abc_ar.indexOf("e"); // יחזיר את התא עם האות אי הראשונה שהוא מוצא
  // let splice_ar = abc_ar.splice(searchE,1); // ימחוק את תא שאי מופיע בו וימחוק רק אותו כי רשום אחד
  // abc_ar[searchE] = "x";
  // let splice_ar = abc_ar.splice(searchE,1,"x"); // ימחוק את תא שאי מופיע בו וימחוק רק אותו כי רשום אחד ויוסף את איקס במקומו
  let splice_ar = abc_ar.splice(searchE+1,0,"x"); // יוסיף את האיקס האחריי אי
  
  console.log("splice",splice_ar); // בנוסף ספלייס מחזיר כמערך את התאים
  console.log(abc_ar);

}



init();