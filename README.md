# PruebaTecnicaSalomon
Prueba tecnica para 2BCOMMERCE

Para el desarrollo de la prueba técnica usé el stack MERN (MongoDB, Express, React y NodeJs), además de distintas extensiones, las cuales son:
Babel
Mongoose
Morgan
Webpack


Para iniciar la aplicación de forma local antes se debe asegurar que MongoDB está corriendo de manera local, y luego se usa desde la consola el comando “npm run dev”, esto inicia el servidor de forma local, y hace que el backend pueda funcionar.
Las funciones incluidas en el backend son un post y un get, las cuales permiten agregar usuarios y ver los usuarios existentes.
Para iniciar el back se debe correr en otra consola el comando “npm run webpack” esto hará que el código pueda ser transcrito para que pueda ser leído por la página. El front tiene algunos elementos de diseño en react, como el titulo, y los campos para enviar la información, tanto el nombre, como el email y la contraseña. Los datos se envían correctamente y se almacenan e la base de datos MongoDB, y si se desea visualizarlos, en la url del buscador se escribe http://localhost:3000/api/usuarios y podrá verse la lista de usuarios.
