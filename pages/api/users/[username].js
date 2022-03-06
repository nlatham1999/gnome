import clientPromise from '../../../lib/mongodb';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  const { username } = req.query

  const client = await clientPromise;
  const db = client.db("cluster0");

  switch (req.method) {
    case "GET":
      const posts = await db.collection("users").find({user: username}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
})