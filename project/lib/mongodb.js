import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromisse;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromisse = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromisse = client.connect();
}

export default clientPromisse;