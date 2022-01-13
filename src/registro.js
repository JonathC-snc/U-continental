const conexion = require("./conexion")
module.exports = {
    async insertar(usuario, correo, password, nombre, apellido, edad, sexo, ciudad) {
        let resultados = await conexion.query(`insert into usuario
        (usuario, correo, password, nombre, apellido, edad, sexo, ciudad)
        values
        ($1, $2, $3, $4, $5, $6, $7, $8)`, [usuario, correo, password, nombre, apellido, edad, sexo, ciudad]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, usuario, correo, password, nombre, apellido, edad, sexo, ciudad from usuario");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, usuario, correo, password, nombre, apellido, edad, sexo, ciudad from productos where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, usuario, correo, password, nombre, apellido, edad, sexo, ciudad) {
        const resultados = conexion.query(`update productos
        set usuario = $1,
        correo = $2,
        password = $3,
        nombre = $4,
        apellido = $5,
        edad = $6,
        sexo = $7,
        ciudad = $8
        where id = $9`, [usuario, correo, password, nombre, apellido, edad, sexo, ciudad, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from usuario
        where id = $1`, [id]);
        return resultados;
    },
}