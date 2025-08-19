const Alumno = require("./alumno");

const alumno1 = new Alumno("Gonzalo", "Espasandín", 25, "Ingeniería en Sistemas");

console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Datos completos:", alumno1.obtenerDatos());
console.log("Edad actual:", alumno1.retornarEdad());

alumno1.modificarEdad(26);
console.log("Edad modificada:", alumno1.retornarEdad());

alumno1.agregarMateria("Programación I");
alumno1.agregarMateria("Bases de Datos");
alumno1.agregarMateria("Redes");

console.log("Materias del alumno:");
alumno1.mostrarMaterias();
