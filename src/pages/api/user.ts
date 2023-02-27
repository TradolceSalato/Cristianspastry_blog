// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  userName: string,
  password: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const body = req.body;
  const user = {
    username : /*body.userName*/"Cristian",
    password : /*body.password*/"Cristian07",
  }
  switch (method) {
    case 'POST':
      /*if(user.username === req.body.userName && user.password === req.body.password){
        return res.status(200).json({userName: user.username, password: user.password,})
      } else {
         res.status(200).json({userName : "none",password : "none"})
      }*/
      res.status(200).json({ message: "Post created successfully" ,body});
      console.log(body);
      break;
    case 'GET':
      res.status(200).json({userName: user.username, password: user.password,})
      break;
    // handle other HTTP methods
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"],)
      res.setHeader('Content-Type', 'text/json')
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
