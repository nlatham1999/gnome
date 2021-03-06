import clientPromise from "../../lib/mongodb";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("cluster0");
  let bodyObject = JSON.parse(req.body);

  switch (req.method) {
    case "POST":
      let newPost = await db.collection("users").insertOne(bodyObject);
      res.json(newPost);
      break;
    case "PUT":
      let updatedUser = await db.collection("users").updateOne({email: bodyObject.email}, {$set: {
        website: bodyObject.website,
        bio: bodyObject.bio
      }})
      res.json(updatedUser);
    case "GET":
      const posts = await db.collection("users").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
})