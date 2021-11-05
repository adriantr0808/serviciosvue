<template>
  <div class="container">
    <h1 class="m-4">Empleados</h1>
    <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
      <label class="mb-2">Seleccione un empleado:</label>
      <select class="form-select" v-model="idempleado">
        <option
          v-for="(e, index) in empleados"
          :key="index"
          :value="e.idEmpleado"
        >
          {{ e.apellido }}
        </option>
      </select>
      <button class="btn btn-primary mt-4">Mostrar Datalles</button>
    </form>
    <div v-if="empleado != null" class="mt-4 mb-4">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{ empleado.apellido }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Oficio: {{ empleado.oficio }}
          </h6>
          <p class="card-text">Salario: {{ empleado.salario }}</p>
          <p class="card-text">Departamento: {{ empleado.departamento }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Global from "./Global.js";
export default {
  name: "EmpleadosDetalle",
  data() {
    return {
      empleados: [],
      idempleado: 0,
      empleado: null,
    };
  },
  mounted() {
    this.cargarEmpleados();
  },
  methods: {
    cargarEmpleados() {
      var request = "/api/Empleados";
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleados = res.data;
      });
    },
    mostrarDetalleEmpleado() {
      //NECESITO EL ID DEL EMPLEADO
      var request = "/api/Empleados/" + this.idempleado;
      var url = Global.urlempleados + request;
      axios.get(url).then((res) => {
        this.empleado = res.data;
      });
    },
  },
};
</script>