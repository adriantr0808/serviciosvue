<template>
  <div>
    <h1 class="m-4">Servicios</h1>
    <h2 class="m-4">{{ saludo }}</h2>
    <h3 v-if="empleado">{{ empleado.apellido }}</h3>
  </div>
</template>
<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
//ESTO ES UNA CLASE JS, DEBEMOS TENER UN OBJETO
//PARA LLAMAR A SUS METODOS

const service = new ServiceEjemplo();
export default {
  name: "EjemploServicios",
  data() {
    return {
      saludo: "",
      empleado: null,
    };
  },
  mounted() {
    this.saludo = service.getSaludo("Adrián");
    service.getEmpleado(7566).then((result) => {
      this.empleado = result;
    });
    //PROMESAS SE LLAMAN CON THEN
    service.getPromesa.then((result) => {
      //AQUI LOS DATOS OK
      this.saludo = result;
    });
  },
};
</script>