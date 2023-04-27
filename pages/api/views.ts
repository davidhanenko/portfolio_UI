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
          },
        },
      });

    const ip =
      req.headers['x-real-ip'] || req.socket.remoteAddress;

    res.status(200);
  } catch (err) {
    console.log(err);
  }
}
