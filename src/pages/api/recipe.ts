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
  switch (method) {
    case 'POST':
     let ricetta = body;
     res.send(JSON.stringify(ricetta));
     console.log(ricetta);
      break;
    case 'GET':
        res.send(JSON.stringify(ricetta));
      break;
    // handle other HTTP methods
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"],)
      res.setHeader('Content-Type', 'text/json')
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
