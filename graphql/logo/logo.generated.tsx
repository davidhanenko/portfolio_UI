import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LogoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LogoQuery = { __typename?: 'Query', logo?: { __typename?: 'LogoEntityResponse', data?: { __typename?: 'LogoEntity', attributes?: { __typename?: 'Logo', logo_alt?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };


export const LogoDocument = gql`
    query Logo {
  logo {
    data {
      attributes {
        logo {
          data {
            attributes {
              url
            }
          }
        }
        logo_alt
      }
    }
  }
}
    `;

/**
 * __useLogoQuery__
 *
 * To run a query within a React component, call `useLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoQuery(baseOptions?: Apollo.QueryHookOptions<LogoQuery, LogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoQuery, LogoQueryVariables>(LogoDocument, options);
      }
export function useLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoQuery, LogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoQuery, LogoQueryVariables>(LogoDocument, options);
        }
export type LogoQueryHookResult = ReturnType<typeof useLogoQuery>;
export type LogoLazyQueryHookResult = ReturnType<typeof useLogoLazyQuery>;
export type LogoQueryResult = Apollo.QueryResult<LogoQuery, LogoQueryVariables>;