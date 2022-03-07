import clientPromise from '../../../lib/mongodb';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  const { email } = req.query

  const client = await clientPromise;
  const db = client.db("cluster0");

  switch (req.method) {
    //updates the personal information of a user
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let updatedUser = await db.collection("users").updateOne({email: bodyObject.email}, {$set: {
        website: bodyObject.website,
        bio: bodyObject.bio
      }})
      res.json(updatedUser);
    //gets the user information
    case "GET":
      const user = await db.collection("users").find({email: email}).toArray();
      res.json({ status: 200, data: user });
      break;
  }
})