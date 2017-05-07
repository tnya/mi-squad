/*
Creo Constructor con nombre, edad y hobbies de las compañeras de mi squad "Las Sopaipas"
*/
function genteSquad(nombre, edad, hobbie){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;
  }
	
/*
Creo funcion para imprimir valores en HTML
Uso <b> para "bold"(negrita)
Ojo con el orden de las listas! <ul><li>
*/
	
/*
Hago variables para crear nuevas personas con sus respectivos datos
*/
function miSquad(){
  var  todas = [];

var Marce = new genteSquad("Marcela Cabello", 31, ["Cantar", "Yoga", "Cocinar"]); 
var Meli = new genteSquad("Melissa Pacheco", 25, ["Dormir", "Comer", "Matilda"]); 
var Pauli = new genteSquad("Paulina Aros", 28, ["Hacer Libretas", "Acariciar gatos", "Manicure"]);
var Karla = new genteSquad("Karla Jeria", 35, ["Comer chocolates", "Viajar", "Ir al cine"]);
var Amala = new genteSquad("Valentina Amala Kamala", 29, ["Bordar", "Tejer", "Dormir"]);
var Paula = new genteSquad("Paula Ponce", 28, ["Música", "Aves", "Heroes of the Storm"]);
var Mariela = new genteSquad("Mariela Cubillos", 36, ["Tejer", "Comer chocolate", "Cocinar"]);
var Tanya = new genteSquad("Tanya Ramirez", "Veintisiempre", ["Gatos", "Viajar", "Tomar tecito a las 4"]);
/*
Con push, introduzco datos dentro del []
*/
  todas.push(Marce);
  todas.push(Meli);
  todas.push(Pauli);
  todas.push(Karla);
  todas.push(Amala);
  todas.push(Paula);
  todas.push(Mariela);
  todas.push(Tanya);
/*
Con forEach imprimo cada uno de los datos en HTML
*/
todas.forEach(function (element){
    var cont = document.getElementById('cont');
    cont.innerHTML += "<div><b>Nombre: </b>" + element.nombre + "<br><b>Edad: </b>" + element.edad + " años <br>" + "<b>Hobbies: </b><ul><li>" + element.hobbie[0] + "</li><li>" +
    element.hobbie[1] + "</li><li>" + element.hobbie[2] + "</li></ul></div><br>";
  });
return todas;

}
/*
Llamo a mi funcion principal

*/
miSquad();

