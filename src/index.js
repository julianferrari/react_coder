
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/* MI CODIGO */

//*********************
//Sugar Syntax
//*********************

//Spread Operator
let arr = [1, 2, 3];
let arr2 = [4, 5];

//Ejemplo 1: CONCATENAR
//Concatenar array con func
const concat = arr.concat(arr2);
console.log(concat)

//Concatenar con SpreadOperator
const spreadOpr = [...arr, ...arr2];
console.log(spreadOpr)



//Ejemplo 2: CLONAR ARRAY
//let copyArr = arr; //<-- PERO TMB SE ME MODIFICA ARR!!!
//copyArr.push(4); //<-- PERO TMB SE ME MODIFICA ARR!!!
//console.log(copyArr)

const copyArr2 = [...arr]; //ASI SI FUNCIONA!!!
console.log(copyArr2)



// Ejemplo 3: Expandir Array
const copyArr3 = [...arr, 1, 2, 3];
console.log(copyArr3)




//Ejemplo 4: Matematicas
//const min = Math.min(arr); //ASI NO FUNCIONA
const min = Math.min(...arr); //ASI SI FUNCIONA
console.log(min)



//Ejemplo 5: Spread Op with objects
const usuario = {
  nombre: "Pepe",
  edad: 22
}

const alumno = {
  clase: "React js",
  promedio: 4
}

const alumno_coder = {
  ...usuario, 
  ...alumno
}

console.log(alumno_coder)



//*********************
// Propiedades dinamicas
//*********************

const objUsuarios = {}
const nombres = ["Felipe", "Juan", "Maria"];

nombres.forEach((nombre, i) => (
  objUsuarios[`usuario_${i}`] = nombre
));

console.log(objUsuarios);




//*********************
// Deep Matching
//*********************

const usuario_deep = {
  nombre: "David",
  edad: 24
}

let {nombre, edad} = usuario_deep; //Trae el nombre y edad del "usuario_deep"
console.log(nombre,edad)




//*********************
// Asignacion en Desestructuracion
//*********************

let persona = ["Juan", "Smith"];
let [nombre2, apellido] = persona;
console.log(nombre2,apellido)



//*********************
// Pollyfils
//*********************
/*
import find from 'core-js-pure/actual/array/find';
const arr3 = [3,4,5,6];
let found;

if (Array.prototype.find){
  found = arr3.find((num)=>num > 10);
}
else{
  found = arr.findPollyFill((num)=>num > 10);
}

console.log(found);
*/