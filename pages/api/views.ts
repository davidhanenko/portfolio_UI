import { NextApiRequest, NextApiResponse } from 'next';
import gql from 'graphql-tag';

import { initializeApollo } from '../../graphql/apollo';
import {
  CounterDocument,
  CounterQuery,
  IncCounterDocument,
  IncCounterMutation,
} from '../../graphql/counter/counter.generated';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = initializeApollo({});
    const ip =
      req.headers['x-real-ip'] || req.socket.remoteAddress;

    const {
      data: { viewsCounter },
    } = await client.query<CounterQuery>({
      query: CounterDocument,
    });

    let currentCount = viewsCounter?.data?.attributes
      ?.count as number;

    const { data } =
      await client.mutate<IncCounterMutation>({
        mutation: IncCounterDocument,
        variables: {
          data: {
            count: (currentCount += 1),
            ip: [
              {
                __typename: 'ComponentIpIp',
                __component: 'ip.ip',
                ip_address: ip,
                visited: new Date(),
              },
            ],
          },
        },
      });

    res.status(200);
  } catch (err) {}
}
