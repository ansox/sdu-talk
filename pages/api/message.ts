// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { request } from '../../lib/datocms';

type Data = {
  name: string
}

async function sendMessage(message: string, name: string) {
  const MESSAGE_MUTATION = `mutation MyMutation {
    createMessageBoard(data: {message: "${message}", name: "${name}"}) {
      id
    }
    publishManyMessageBoards(to: PUBLISHED) {
      count
    }
  }`;

  const result = await request({
    query: MESSAGE_MUTATION,
  });  
  
  return result;

  // return messages.allMessages.map((item: any) => {
  //   return {
  //     ...item,
  //     updatedAt: formatDate(item.updatedAt)
  //   }
  // });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  const result = await sendMessage(body.message, body.name);

  res.status(200).json({ name: 'John Doe' })
}
