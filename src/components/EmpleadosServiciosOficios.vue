<template>
  <div class="container m-4">
    <h1>Oficios con servicios</h1>
    <form method="post" v-on:change.prevent="mostrarEmpleados">
      <label>Elige un oficio: </label>
      <select class='form-select w-auto' v-model="oficio">
        <option v-for="(o, index) in oficios" :key="index" :value="o">
          {{ o }}
        </option>
      </select>
    </form>
    <table v-if='empleados.length!=0' class='table table-primary table-striped mt-4'>
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
          <th>Departamento</th>
         </tr>
      </thead>
      <tbody>
          <tr v-for='(e, index) in empleados' :key='index'>
            <td>{{e.apellido}}</td>
            <td>{{e.oficio}}</td>
            <td>{{e.salario}}</td>
            <td>{{e.departamento}}</td>
          </tr>
      </tbody>
    </table>
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
    mostrarEmpleados() {
      console.log(this.oficio);
      var of = this.oficio;
      service.getEmpleadosbyOficio(of).then((result) => {
        this.empleados = result;
       
      });
    },
  },
};
</script>