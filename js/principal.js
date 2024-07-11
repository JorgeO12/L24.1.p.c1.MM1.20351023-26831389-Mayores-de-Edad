/**Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
 * reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: 
Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), 
Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
Cantidad de personas: 10
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 70%
 * 
 */

import Cl_Personas from "./Cl_Personas.js";
import Cl_Mayor from "./Cl_Mayor.js";

let p1 = new Cl_Personas("Luis",15);
let p2 = new Cl_Personas("Ana",19);
let p3 = new Cl_Personas("Jose",21);
let p4 = new Cl_Personas("Carmen",17);
let p5 = new Cl_Personas("Rosa",18);
let p6 = new Cl_Personas("Jose",22);
let p7 = new Cl_Personas("Maria",17);
let p8 = new Cl_Personas("Luz",19);
let p9 = new Cl_Personas("Rafael",23);
let p10 = new Cl_Personas("Liz",15);
let p11 = new Cl_Personas("Carlos",20);
let p12 = new Cl_Personas("Leo",16);
let mayor = new Cl_Mayor(0);
mayor.procesarPersona(p1);
mayor.procesarPersona(p2);
mayor.procesarPersona(p3);
mayor.procesarPersona(p4);
mayor.procesarPersona(p5);
mayor.procesarPersona(p6);
mayor.procesarPersona(p7);
mayor.procesarPersona(p8);
mayor.procesarPersona(p9);
mayor.procesarPersona(p10);
mayor.procesarPersona(p11);
mayor.procesarPersona(p12);

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de personas: ${mayor.cntPersonas} <br>
Cantidad de personas mayor de edad: ${mayor.mayor18} <br>
Porcentaje de personas mayor de edad: ${mayor.porcentaje().toFixed(2)}%
`