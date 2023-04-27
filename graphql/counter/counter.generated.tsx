import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CounterQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CounterQuery = { __typename?: 'Query', viewsCounter?: { __typename?: 'ViewsCounterEntityResponse', data?: { __typename?: 'ViewsCounterEntity', id?: string | null, attributes?: { __typename?: 'ViewsCounter', count?: number | null } | null } | null } | null };

export type IncCounterMutationVariables = Types.Exact<{
  data: Types.ViewsCounterInput;
}>;


export type IncCounterMutation = { __typename?: 'Mutation', updateViewsCounter?: { __typename?: 'ViewsCounterEntityResponse', data?: { __typename?: 'ViewsCounterEntity', id?: string | null } | null } | null };


export const CounterDocument = gql`
    query Counter {
  viewsCounter {
    data {
      id
      attributes {
        count
      }
    }
  }
}
    `;

/**
 * __useCounterQuery__
 *
 * To run a query within a React component, call `useCounterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCounterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCounterQuery({
 *   variables: {
 *   },
 * });
 */
export function useCounterQuery(baseOptions?: Apollo.QueryHookOptions<CounterQuery, CounterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CounterQuery, CounterQueryVariables>(CounterDocument, options);
      }
export function useCounterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CounterQuery, CounterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CounterQuery, CounterQueryVariables>(CounterDocument, options);
        }
export type CounterQueryHookResult = ReturnType<typeof useCounterQuery>;
export type CounterLazyQueryHookResult = ReturnType<typeof useCounterLazyQuery>;
export type CounterQueryResult = Apollo.QueryResult<CounterQuery, CounterQueryVariables>;

export const IncCounterDocument = gql`
    mutation IncCounter($data: ViewsCounterInput!) {
  updateViewsCounter(data: $data) {
    data {
      id
    }
  }
}
    `;
export type IncCounterMutationFn = Apollo.MutationFunction<IncCounterMutation, IncCounterMutationVariables>;

/**
 * __useIncCounterMutation__
 *
 * To run a mutation, you first call `useIncCounterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncCounterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incCounterMutation, { data, loading, error }] = useIncCounterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useIncCounterMutation(baseOptions?: Apollo.MutationHookOptions<IncCounterMutation, IncCounterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncCounterMutation, IncCounterMutationVariables>(IncCounterDocument, options);
      }
export type IncCounterMutationHookResult = ReturnType<typeof useIncCounterMutation>;
export type IncCounterMutationResult = Apollo.MutationResult<IncCounterMutation>;
export type IncCounterMutationOptions = Apollo.BaseMutationOptions<IncCounterMutation, IncCounterMutationVariables>;