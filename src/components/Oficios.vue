<template>
  <div class="container">
    <h1 class="m-4">Oficios</h1>
    <form method="post" v-on:change.prevent="mostrarEmpleados">
      <label>Selecciona un oficio</label>
      <select class="form-select mt-3 w-auto" v-model="oficio">
        <option v-for="(o, index) in oficios" :key="index" :value="o">
          {{ o }}
        </option>
      </select>
    </form>
    <table
      v-if="empleados.length != 0"
      class="table table-primary table-striped mt-4"
    >
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(e, index) in empleados" :key="index">
          <td>{{ e.apellido }}</td>
          <td>{{ e.oficio }}</td>
          <td>{{ e.salario }}</td>
          <td>{{ e.departamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Global from "./Global.js";
export default {
  name: "Oficios",
  data() {
    return {
      oficios: [],
      oficio: "",
      empleados: [],
    };
  },
  mounted() {
    this.cargarOficios();
  },

  methods: {
    cargarOficios() {
      var request = "/api/Empleados/oficios";
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.oficios = res.data;
      });
    },
    mostrarEmpleados() {
      var request = "/api/Empleados/EmpleadosOficio/" + this.oficio;
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
        console.log(this.empleados);
      });
    },
  },
};
</script>