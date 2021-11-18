const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  const { slug } = JSON.parse(event.body);
  const credentials = process.env.MONGO_CREDENTIALS
  const url = `mongodb+srv://${credentials}@cluster0.5lguf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const dbName = 't-gatsby-v';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const products = db.collection('products');
  const res = await products.findOne({ slug });
  client.close();
  return {
    statusCode: 200,
    body: JSON.stringify({
      quantity: res.quantity
    })
  }


}