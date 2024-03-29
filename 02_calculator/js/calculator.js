'use strict';

const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqual = document.getElementById("btnEqual");


elementSelect.addEventListener("change",clear);
elementNum1.addEventListener("change",clear);
elementNum2.addEventListener("change",clear);

elementbtnEqual.addEventListener("click",update);
  
//関数「update」を作り
function update(){
  const result = calculate(
    Number(elementNum1.value),
    Number(elementNum2.value),
    elementSelect.value
  );
  elementResult.innerHTML=result;
}

//関数「calculate」を作り
function calculate(num1,num2,calcType){
  let result;
    //計算の種類で処理を分岐
    switch(calcType){
        case "type-add":
            result = num1+num2;
            break;
        case "type-substract":
            result = num1-num2;
            break;
        case "type-multiply":
            result = num1*num2;
            break;
        case "type-divide":
            result = num1/num2;
            break;
  }
  return result;
}
/** 計算結果をクリアします。**/

function clear(){
  elementResult.innerHTML = "";
}