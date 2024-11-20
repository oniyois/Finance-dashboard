import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://codewielder7:1nF053c-C0D3R-7@shop-at-crisp-website-c.utv1a.mongodb.net/?retryWrites=true&w=majority&appName=shop-at-crisp-website-cluster";

const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


try {

    await client.connect();

    await client.db("admin").command({ping: 1});

    console.log ( "Pinged your deployment. You successfully connected to MongoDB!");

}catch (err) {
console.log(err);
}

let db =  client.db("finance_dashboard");

export default db;