let express=require('express')
let app=express()
let products=require('./data/products')

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product =products.find(ele=>ele._id===req.params.id)
        res.send(product)
})

app.listen(3001,console.log('server is running on port 3001'))
