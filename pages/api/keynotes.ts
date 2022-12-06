import type { NextApiRequest, NextApiResponse } from 'next';
import { request } from '../../lib/datocms';

const KEYNOTES_QUERY = `query MyQuery {
  allKeynotes {
    date
    speaker
    theme
    photo {
      url
    }
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const keynotes = await request({
    query: KEYNOTES_QUERY,
  });

  console.log(keynotes);

  res.status(200).json(keynotes);
}
