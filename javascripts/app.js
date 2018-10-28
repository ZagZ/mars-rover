// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
console.log('Ingresa tus instrucciones de las siguiente manera: Comando="/tus indicaciones/"');
console.log("Despues ejecuta la funcion 'movRover();'");
// ======================
function turnLeft(rover) {
  console.log("Giraste a la Izquierda!!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
  }
  console.log("Nueva orientación del rover  " + rover.direction);
}

function turnRight(rover) {
  console.log("Giraste a la derecha!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  }
  console.log("Nueva orientación del rover  " + rover.direction);
}

function moveForward(rover) {
  console.log("Avanzaste hacia adelante!!");
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "S":
      rover.y++;
      break;
    case "W":
      rover.x--;
      break;
  }
  console.log("Nueva posición del rover =  " + rover.x + ' , ' + rover.y + '  ' + rover.direction);
  rover.travelLog.push([rover.x, rover.y]);
}

function moveBack(rover) {
  console.log("Avanzaste hacia atras!!");
  switch (rover.direction) {
    case "N":
      rover.y++;
      break;
    case "E":
      rover.x--;
      break;
    case "S":
      rover.y--;
      break;
    case "W":
      rover.x++;
      break;
  }
  console.log("Nueva posición del rover =  " + rover.x + ' , ' + rover.y + '  ' + rover.direction);
  rover.travelLog.push([rover.x, rover.y]);
}

var Comando = "";

function movRover() {
  var lower = Comando.toLowerCase();

  for (var i = 0; i < Comando.length; i++) {
    switch (lower[i]) {
      case "l":
        turnLeft(rover)
        break;
      case "r":
        turnRight(rover)
        break;
      case "f":
        moveForward(rover)
        break;
      case "b":
        moveBack(rover)
        break;
      default:
        console.log("Comando invalido")
        break;
    }
  }
  console.log("La posición final del rover es: " + rover.x + "," + rover.y + "  " + rover.direction);
  console.log("Puedes agregar más instrucciones o recargar la pagina para empezar desde cero");
  console.log("Este fue tu recorrido: ");
  console.log("0,0");
  for (i = 0; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i] + " ");
  }
}



