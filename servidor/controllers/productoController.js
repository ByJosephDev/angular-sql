const Producto = require("../models/Product");

exports.crearProducto = async (req, res) => {
    try {

        let producto;

        // creamos nuestro producto
        producto = new Producto(req.body);

        await Producto.create({
            nombre: producto.nombre,
            categoria: producto.categoria,
            ubicacion: producto.ubicacion,
            precio: producto.precio,
          }).then(product => {
            res.send(product);
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error de insercion');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {

        Producto.findAll().then(products => {
            res.json(products);
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error de consulta');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

        const { nombre, categoria, ubicacion, precio } = req.body;

        await Producto.update({
            nombre: nombre,
            categoria: categoria,
            ubicacion: ubicacion,
            precio: precio,
          }, {
            where: {
              id: req.params.id
            }
          }).then(producto => {
            res.json(producto);
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error de actualizacion');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {

        Producto.findOne({
            where: { id: req.params.id}
          }).then(producto => {
            res.json(producto);
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error de actualizacion');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {

        await Producto.destroy({
            where: {
              id: req.params.id
            }
          }).then(user => {
            console.log(user);
            res.json({ msg: 'Producto eliminado con exito' });
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error de actualizacion');
    }
}


