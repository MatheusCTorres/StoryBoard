import clientPromisse from "../../lib/mongodb";

export default async function handler(req, res) {
  const query = parseInt(req.query.id);
  const client = await clientPromisse;
  const db = client.db("faculdadedb");

  const data = await db.collection("STUDENTDB").findOne({id:query})

  res.json(data);
}