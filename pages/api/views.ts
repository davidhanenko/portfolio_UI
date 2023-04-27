import { NextApiRequest, NextApiResponse } from 'next';


import { initializeApollo } from '../../graphql/apollo';
import {

  AddIpDocument,
  AddIpMutation,
} from '../../graphql/counter/counter.generated';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = initializeApollo({});
    const ip =
      req.headers['x-real-ip'] || req.socket.remoteAddress;

    await client.mutate<AddIpMutation>({
      mutation: AddIpDocument,
      variables: {
        data: {
          ip_address: ip,
          visited: new Date(),
        },
      },
    });

    res.status(200);
  } catch (err) {}
}
