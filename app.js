function salida() {
  let nombres = prompt('Ingrese sus nombres');
  let apellidos = prompt('Ingrese apellidos');
  let grado = prompt('Ingrese su jerarquia');
  let cargo = prompt('Ingrese su numero de cargo');
  let qth = prompt('Ingrese lugar de parada');
  let salida =
    'Nombre: ' +
    nombres +
    '\nApellidos: ' +
    apellidos +
    '\nGrado: ' +
    grado +
    '\nCargo: ' +
    cargo +
    '\nLugar de parada: ' +
    qth;
  // let salida = 'Bienvenido' + Nombre + 'a esta pagina';

  // let horarioDeSalida = parseInt(prompt('Ingrese su horario de salida'));
  // if (horarioDeSalida < 1459 || horarioDeSalida > 1600) {
  //   alert('El horario de salida es partir de las 15:00');
  // } else {
  //   alert('Salida ingresada con exito');
  // }

  let horarioDeSalida = parseInt(
    prompt(
      'Ingrese su horario de salida (formato 24 horas, por ejemplo 1530 para las 15:30)'
    )
  );
  let fechaActual = new Date();

  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
  let anio = fechaActual.getFullYear();

  let hora = Math.floor(horarioDeSalida / 100);
  let minutos = horarioDeSalida % 100;

  fechaActual.setHours(hora, minutos);

  if (horarioDeSalida < 1500 || horarioDeSalida >= 1600) {
    alert('El horario de salida debe ser entre las 15:00 y antes de las 16:00');
  } else if (typeof valor === 'number' && !isNaN(valor)) {
    alert('El horario de salida debe ser un número');
  } else {
    let mensaje = `Salida ingresada con éxito para el ${dia}/${mes}/${anio} a las ${hora}:${minutos
      .toString()
      .padStart(2, '0')}`;
    alert(mensaje);
  }
  // alert(horarioDeSalida);

  alert(salida);
}

class persona {
  constructor(Nombre, edad, domicilio) {
    this.nombre = Nombre;
    this.edad = edad;
    this.domicilio = domicilio;
  }
}
