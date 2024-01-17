function ingresarUsuario() {
  let intentos = 3;

  while (intentos >= 0) {
    let nombreUsuario = prompt('Ingrese su nombre de usuario');

    if (nombreUsuario && nombreUsuario.toLowerCase() === 'hernan') {
      alert('¡Bienvenido Hernan!');
      return; // se detiene
    } else {
      alert(
        'Usuario incorrecto. Tiene' +
          ' ' +
          intentos +
          ' ' +
          'intentos restantes.'
      );
      intentos--;
    }
  }

  alert('Se agotaron los intentos. Vuelva a intentarlo más tarde.');
}

ingresarUsuario();

function realizarCompra() {
  // Obtener la selección del tipo de producto.
  var tipoProducto = prompt(
    'Elija el tipo de producto:\n1. Proteínas\n2. Creatinas\n3. Ganadores de Peso\n4. Quemadores de Grasa'
  );

  if (tipoProducto !== '') {
    // Convertir la selección a un número entero
    tipoProducto = parseInt(tipoProducto);

    // Verificar la validez de la selección
    if (tipoProducto >= 1 && tipoProducto <= 4) {
      // Obtener la marca seleccionada
      var marca = prompt(
        'Elija la marca:\n1. Pulver\n2. Star Nutrition\n3. HTN\n4. Extrenght'
      );

      if (marca !== '') {
        // Convertir la selección de marca a un número entero
        marca = parseInt(marca);

        // Verificar la validez de la selección de marca
        if (marca >= 1 && marca <= 4) {
          // Mostrar mensaje de confirmación
          alert(
            'Compra realizada:\nTipo de Producto: ' +
              obtenerTipoProducto(tipoProducto) +
              '\nMarca: ' +
              obtenerMarca(marca)
          );
        } else {
          alert('Selección de marca no válida.');
        }
      } else {
        alert('Ha cancelado la selección de marca.');
      }
    } else {
      alert('Selección de tipo de producto no válida.');
    }
  } else {
    alert('Ha cancelado la selección de tipo de producto.');
  }
}

function obtenerTipoProducto(tipo) {
  switch (tipo) {
    case 1:
      return 'Proteínas';
    case 2:
      return 'Creatinas';
    case 3:
      return 'Ganadores de Peso';
    case 4:
      return 'Quemadores de Grasa';
    default:
      return 'Desconocido';
  }
}

function obtenerMarca(marca) {
  switch (marca) {
    case 1:
      return 'Pulver';
    case 2:
      return 'Star Nutrition';
    case 3:
      return 'HTN';
    case 4:
      return 'Extrenght';
    default:
      return 'Desconocido';
  }
}

// Llamar a la función al cargar la página (puedes cambiar esto según tus necesidades)
realizarCompra();

let seguirComprando = confirm('Desea seguir comprando?');
if (seguirComprando == true) {
  realizarCompra();
} else {
  alert('Gracias por su compra!!.');
}
