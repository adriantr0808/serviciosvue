<template>
  <div class="container m-4">
    <h1>Oficios con servicios</h1>
    <form method="post" v-on:change.prevent="mostrarEmpleados(oficio)">
      <select v-model="oficio">
        <option v-for="(o, index) in oficios" :key="index" :value="o">
          {{ o }}
        </option>
      </select>
    </form>
    <div>
      <h1>{{ empleados.apellido }}</h1>
    </div>
  </div>
</template>
<script>
import ServiceOficios from "./../services/ServiceOficios";

const service = new ServiceOficios();
export default {
  name: "EmpleadosServiciosOficios",
  data() {
    return {
      oficios: [],
      empleados: [],
      oficio: "",
    };
  },
  mounted() {
    service.getOficios().then((result) => {
      this.oficios = result;
    });
  },
  methods: {
    mostrarEmpleados(oficio) {
      service.getEmpleadosbyOficio(oficio).then((result) => {
        this.empleados = result;
      });
    },
  },
};
</script>