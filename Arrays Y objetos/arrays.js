//Declaracion del rray
// let frutas = ["Mano", "banano","Fresas"];
// //mostrar informacion guardada
// document.write("frutas:"+frutas[2] + "<br>");
// let cosas = [
//     "esto es un texto",
//     4848484,
//     false,
//     function saludo(){
//         return "hola desde funcion"
//     },
//     ["mango", "banano", "fresas"],
//     {
//         "f1": "sandia",
//         "f2": "guayaba"
//     }
// ];
// //mostrar los datos
// document.write("dato:" + cosas[0] + "<br>");
// document.write("dato:" + cosas[1] + "<br>");
// document.write("dato:" + cosas[2] + "<br>");
// document.write("dato:" + cosas[3]() + "<br>");
// document.write("dato:" + cosas[4][2] + "<br>");
// document.write("dato:" + cosas[5] .f2+ "<br>");
// //declarar objetos
// let verduras = {
//     v1 : "Tomate",
//     v2 : "Cebolla",
//     v3 : "Zanahoria"
// }
// //Mostrar informacion guardada
// document.write("Verduras"+verduras.v3)


// let cosas2 = {
//     f1: "esto es un texto",
//     "f2": 8787878787,
//     3 : true,
//     "f4": function saludar(){
//         return "hola desde la funcion";
//     },
//     "f5": ["Tomate","cebolla","Zanahoria"],
//     "f6":{
//         "v1": "Cilantro",
//         "v2": "Ajo"
//     }
// }
// document.write("dato:" + cosas2.f1 + "<br>");
// document.write("dato:" + cosas2.f2 + "<br>");
// document.write("dato:" + cosas2["3"] + "<br>");
// document.write("dato:" + cosas2.f4() + "<br>");
// document.write("dato:" + cosas2.f5[2] + "<br>");
// document.write("dato:" + cosas2.f6.v2 + "<br>");


//llenar dinamicamente un array
// var frutas = [];
// //frutas[0] = "sandia";
// //frutas[1] = "mango";
// var numFrutas = Number(prompt("Cuantas frutas desea comprar"));
// for (var x =0; x < numFrutas; x++){
//     //forma1
//     frutas[x] = prompt("digite la fruta#"+ (x));
// }
// //mostrar los datos
// for(var i =0; i < frutas.length; i++){
//     document.write("frutas#" +(i) + ":" + frutas[i] + "<br>");
// }

//llenar dinamicamente un objeto
// let verduras = {}
// verduras.v1 = "tomate";
// verduras.v2 = "Cebolla";
// document.write("verdura:" + verduras.v2);
// var numVerduras = Number(prompt("Cuantas Verduras desea comprar"));
// for ( var x =1; x <= numVerduras; x++){
//     verduras ["v" + x] = prompt("Nombre de la verdura#" +x);

// }
// //mostrar los datos del objeto
// for (var key in verduras) {
//     document.write("verdura:" + verduras[key] + "<br>");
// }

let profeciones = {
    nombre: [],
    titulo: [],
    salario: []
}
var numPro = Number(prompt("Digite numero de empleados"));
for (var x =0; x < numPro; x++){
    for (var key in profeciones){
        profeciones [key] [x] = prompt("digite" + key + "#" + x);
    }

}
for (var y =0; y < numPro; y++){
    document.write("Emplado#" + y + "<br>");
    for (var k in profeciones){
        document.write(k+"-->" + profeciones[k][y] + "<br>")
}
document.write("--------------------------<br>");

}



