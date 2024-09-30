## Filtros de find
Buscar a todos los elementos que complan con la condicion de que su nombre cumpla con la expresion regular '^usuario'(significa que empieze o contenga usuario)'

db.test.find(
    {
        nombre: {$regex: '^usuario'}
    }
).limit(2) {limita la cantidad de resultados}

gt = (greater than)

db.test.find({
    edad: {$gt: 18}     
})


lt = (less than)

db.test.find({
    edad: {$gt: 18, $lt: 60}     
})


metodo $eq(equivalente) para supabase, predeterminado en mongoDB

db.test.find({nombre: $eq: 'Matias Gimenez'}) 

## Eliminar elementos

db.test.deleteOne({edad: {$eq: 70}}) <!-- $eq irrelevante -->

db.test.deleteOne({_id: ObjectId('66e8b475d886500d8a625c9f')})

Elimina a todos los usuarios con nombre pepe
db.test.deleteMany({nombre: 'pepe'})


## Update

db.test.updateOne(
		{
    _id: ObjectId('66e8bb4dd886500d8a625ca2')
		},
    {
        $set: {nombre: 'pepe',apellido: 'suarez', edad: 50}
    }
)

