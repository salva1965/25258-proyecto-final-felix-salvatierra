## Proyecto Final Back-End 

* Desarrollo de una API Rest que permite manejar distintos productos de una tienda.
* Para la gestion de datos se utilizo firebase,firestore .
* El hosting es brindado por Vercel .
* A continuacion encontraran una secuencia de request que se usan para probar la API .

# Dar de alta un producto
#### (se necesita token ).
### POST /api/products/login

`{`

`    "email": "direcccion@email.com",`

`    "password": "12345"`

`}`

200 "ok" {token}

401 "error":"Usuario Inexistente"

### POST /api/products/create


`{`

`    "name": "zapatos",`

 `   "precio": 400000,`

`    "categoria";["caballero","cuero"]`

`}`

# Mostrar todos los productos
### GET /api/products

# Mostrar un producto por ID
### GET /api/products/id
404 "error":"Producto no encontrado"

# Borrar un producto
### DELETE /api/products/id
404 "error":"Producto no encontrado"

    "Producto":"Eliminado"

# Dependencias 
`$ npm i express`

`$ npm install firebase`

`$ npm install dotenv`

`$ npm install cors`

`$ npm install jsonwebtoken`

