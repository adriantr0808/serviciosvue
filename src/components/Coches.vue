<template>
  <div class="container">
    <h1 class="m-4">Coches</h1>
    <table class="table table-primary table-striped">
      <thead>
        <tr>
          <th>Conductor</th>
          <th>Imagen</th>
          <th>Marca</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) in coches" :key="index">
          <td>{{ c.conductor }}</td>
          <td><img width="200px" :src="c.imagen" /></td>
          <td>{{ c.marca }}</td>
          <td>{{ c.modelo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Global from "./Global.js";
//PODEMOS DECLARAR VARIABLES GLOBALES PARA TODOS LOS METODOS
//DEL COMPONENTE

export default {
  name: "Coches",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    this.cargarCoches();
  },
  methods: {
    cargarCoches() {
      var request = "/webresources/coches";
      var url = Global.urlcoches + request;
      axios.get(url).then((res) => {
        this.coches = res.data;
      });
    },
  },
};
</script>