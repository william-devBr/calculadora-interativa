/** calculadora com js */

const app = document.querySelector("#app")
const btNums = document.querySelectorAll(".btn-num")
const btnSimbol = document.querySelectorAll(".btn-simbol")
const inputText = document.getElementById("input-text")
const textView = document.querySelector(".text-view")

const btnActions = {
    "C" : ()=> inputClear(),
    "=" : ()=> result(),
    "+" : ()=> plus(),
    "-" : ()=> minus(),
    "/" : ()=> division(),
    "x" : ()=> multiply()
}

const inputClear = () => {
    inputText.value = ''
    textView.textContent = '0'
}
const result = ()=>{
    
  let values = eval(inputText.value.trim());
  textView.textContent = values.toString();
  
}

const plus = ()=> {
    inputText.value += '+'
}
const minus = ()=> {
    inputText.value += '-'
}
const division = ()=> {
    inputText.value += '/'
}
const multiply = ()=> {
    inputText.value += '*'
}

btNums.forEach(el => el.addEventListener("click", (text) => { 
     inputText.value += text.target.textContent
    }
))
btnSimbol.forEach(el => el.addEventListener('click', text => { btnActions[text.target.textContent]() }))
