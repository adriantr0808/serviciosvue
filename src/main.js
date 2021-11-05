import Vue from 'vue'
import App from './App.vue'
import Coches from './components/Coches.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import Oficios from './components/Oficios.vue';
import EjemploServicios from './components/EjemploServicios.vue';
import EmpleadosServiciosOficios from './components/EmpleadosServiciosOficios.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/coches', component: Coches },
  { path: '/empleados', component: EmpleadosDetalle },
  { path: '/servicios', component: EjemploServicios },
  { path: '/oficios', component: Oficios },
  { path: '/empleadosservicios', component: EmpleadosServiciosOficios },

]

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
