const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


// Mongo DB


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.opkciwj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const toysCollection = client.db('primeToys').collection('toys')

    app.get('/toys', async(req, res)=>{
      
      const currentPage = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
      const search = req.query.search
      const email = req.query.email
      const skip = (currentPage - 1) * limit
      const sortby = req.query.sort || 'asc'

      if(!currentPage && !limit && !search && !email && !skip){
        const result = await toysCollection.find().toArray()
        console.log(result);
        return res.send(result)
      }

      let query = {}
      let sort;

      if(search){
        query = { name: { $regex: search, $options: 'i' } }

        if(email){
          query = { name: { $regex: search, $options: 'i' }, sellerEmail: email }
          sort = {price: sortby === 'asc' ? 1 : -1}
        }

        const result = await toysCollection.find(query).sort(sort).collation({locale: "en_US", numericOrdering: true}).skip(skip).limit(limit).toArray()
      

        return res.send(result)
      }

      if(email){
        query = {sellerEmail: email}
        sort = {price: sortby === 'asc' ? 1 : -1}

        const result = await toysCollection.find(query).sort(sort).collation({locale: "en_US", numericOrdering: true}).skip(skip).limit(limit).toArray()

        return res.send(result)
      }

      const cursor = toysCollection.find(query)

      if(limit, currentPage){
        const result = await cursor.skip(skip).limit(limit).toArray()

        res.send(result)
      } else{
        const result = await cursor.toArray()

        res.send(result)
      }
    })

    app.get('/toy/:id', async(req, res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await toysCollection.findOne(query)

      res.send(result)
    })

    app.get('/toysCount', async(req, res)=>{
      const email = req.query.email
      const search = req.query.search

      if(search){

        let query = { name: { $regex: search, $options: 'i' } }

        if(email) {
          query = { name: { $regex: search, $options: 'i' }, sellerEmail: email }
        }

        const result = await toysCollection.countDocuments(query)      
        return res.send({totalToys: result})
      }

      if(email){
        const query = {sellerEmail: email}

        
        const result = await toysCollection.countDocuments(query)      
        return res.send({totalToys: result})
      }

      const result = await toysCollection.countDocuments()    
      res.send({totalToys: result})
    })

    app.post('/toy', async(req, res)=>{
      const toy = req.body

      const result = await toysCollection.insertOne(toy)

      res.send(result)
    })

    app.put('/toy/:id', async(req, res)=>{
      const id = req.params.id

      const toy = req.body

      const newToy = {
        $set: toy
      }

      const query = {_id: new ObjectId(id)}
      const options = {upsert: true}

      const result = await toysCollection.updateOne(query, newToy, options)
      res.send(result)
    })

    app.delete('/toy/:id', async(req, res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}

      const result = await toysCollection.deleteOne(query)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });  
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}run().catch



app.get('/', (req, res)=>{
    res.send('Toys are Running')
})

app.listen(port)