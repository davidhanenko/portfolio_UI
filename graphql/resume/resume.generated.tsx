import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ResumeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ResumeQuery = { __typename?: 'Query', resume?: { __typename?: 'ResumeEntityResponse', data?: { __typename?: 'ResumeEntity', attributes?: { __typename?: 'Resume', file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };


export const ResumeDocument = gql`
    query Resume {
  resume {
    data {
      attributes {
        file {
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
    `;

/**
 * __useResumeQuery__
 *
 * To run a query within a React component, call `useResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResumeQuery({
 *   variables: {
 *   },
 * });
 */
export function useResumeQuery(baseOptions?: Apollo.QueryHookOptions<ResumeQuery, ResumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResumeQuery, ResumeQueryVariables>(ResumeDocument, options);
      }
export function useResumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResumeQuery, ResumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResumeQuery, ResumeQueryVariables>(ResumeDocument, options);
        }
export type ResumeQueryHookResult = ReturnType<typeof useResumeQuery>;
export type ResumeLazyQueryHookResult = ReturnType<typeof useResumeLazyQuery>;
export type ResumeQueryResult = Apollo.QueryResult<ResumeQuery, ResumeQueryVariables>;