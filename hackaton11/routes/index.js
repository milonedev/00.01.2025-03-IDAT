// debe exportar las otras rutas de manera dinamica.

// Ejemplo:
app.route('/api/getCliente', ClientesRputes)


// Dynamico

// Cuando se agregue un nuevo archvio a mi routes este se interpretara como una ruta
// No debe exponer el index como una ruta 

// localhostL:3000/api/index <- no debe existir
// el nombre del archivo js debe ser el nombre de la ruta

// localhostL:3000/api/productos <- no debe existir
