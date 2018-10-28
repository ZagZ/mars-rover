// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,

}
// ======================
console.log('Ingresa tus instrucciones de las siguiente manera: getArray="/tus indicaciones/"');
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
      if (rover.y < 0) {
        console.log("ADVERTENCIA: ESTAS SALIENDO DEL ESPACIO ASIGNADO::MOVIMIENTO INVALIDO");
      }
      else {
        rover.y--;
      }
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
}

var getArray = "";

function movRover() {
  var lower = getArray.toLocaleLowerCase();

  for (var i = 0; i < getArray.length; i++) {
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
        moveBackwards(rover)
        break;
      default:
        console.log("Comando invalido")
        break;
    }
  }
  console.log(rover.x + "," + rover.y + "  " + rover.direction);
}



