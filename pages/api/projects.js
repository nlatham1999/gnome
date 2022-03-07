import clientPromise from "../../lib/mongodb";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  


  const client = await clientPromise;
  const db = client.db("cluster0");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newProj = await db.collection("projects").insertOne(bodyObject);
      let addedProj = await db.collection("users").updateOne({email: bodyObject.email}, {$push: {projects: newProj.insertedId}})
      res.json({project: newProj, user: addedProj});

      break;
    case "GET":
      const posts = await db.collection("projects").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
})