import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MainQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MainQuery = { __typename?: 'Query', main?: { __typename?: 'MainEntityResponse', data?: { __typename?: 'MainEntity', attributes?: { __typename?: 'Main', greeting: string, tech?: Array<{ __typename?: 'ComponentTechTech', tech_logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const MainDocument = gql`
    query Main {
  main {
    data {
      attributes {
        greeting
        tech {
          ... on ComponentTechTech {
            tech_logo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMainQuery__
 *
 * To run a query within a React component, call `useMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainQuery(baseOptions?: Apollo.QueryHookOptions<MainQuery, MainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainQuery, MainQueryVariables>(MainDocument, options);
      }
export function useMainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainQuery, MainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainQuery, MainQueryVariables>(MainDocument, options);
        }
export type MainQueryHookResult = ReturnType<typeof useMainQuery>;
export type MainLazyQueryHookResult = ReturnType<typeof useMainLazyQuery>;
export type MainQueryResult = Apollo.QueryResult<MainQuery, MainQueryVariables>;