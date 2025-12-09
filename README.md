## Proyecto Final Back-End 

* Desarrollo de una API Rest que permite manejar distintos productos de una tienda.
* Para la gestion de datos utilizamos firebase,firestore .
* El hosting es brindado por Vercel .
* A continuacion encontraran una secuencia de request que se usan para probar la API .

# Dar de alta un producto

### POST /api/products/create
####
{
    "name": "zapatos",
    "precio": 400000,
    "categoria";["caballero","cuero"]
}
####
