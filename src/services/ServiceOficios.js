import Global from './../components/Global';
import axios from 'axios';

export default class ServiceOficios {
    getOficios() {
        return new Promise(function (resolve) {
            var request = '/api/Empleados/oficios';
            var url = Global.urlempleados + request;
            var oficio = [];
            axios.get(url).then(res => {
                oficio = res.data;
                resolve(oficio);
            });
        })
    }

    getEmpleadosbyOficio(oficio) {
        return new Promise(function (resolve) {
            var request = '/api/Empleados/EmpleadosOficio/' + oficio;
            var url = Global.urlempleados + request;
            var empleados = [];
            axios.get(url).then(res => {
                empleados = res.data;
                resolve(empleados);
            });
        })
    }
}