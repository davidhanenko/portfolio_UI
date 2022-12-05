import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MediaLinksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MediaLinksQuery = { __typename?: 'Query', mediaLink?: { __typename?: 'MediaLinkEntityResponse', data?: { __typename?: 'MediaLinkEntity', attributes?: { __typename?: 'MediaLink', facebook?: string | null, linkedin: string, github: string, resume: string } | null } | null } | null };


export const MediaLinksDocument = gql`
    query MediaLinks {
  mediaLink {
    data {
      attributes {
        facebook
        linkedin
        github
        resume
      }
    }
  }
}
    `;

/**
 * __useMediaLinksQuery__
 *
 * To run a query within a React component, call `useMediaLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useMediaLinksQuery(baseOptions?: Apollo.QueryHookOptions<MediaLinksQuery, MediaLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MediaLinksQuery, MediaLinksQueryVariables>(MediaLinksDocument, options);
      }
export function useMediaLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediaLinksQuery, MediaLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MediaLinksQuery, MediaLinksQueryVariables>(MediaLinksDocument, options);
        }
export type MediaLinksQueryHookResult = ReturnType<typeof useMediaLinksQuery>;
export type MediaLinksLazyQueryHookResult = ReturnType<typeof useMediaLinksLazyQuery>;
export type MediaLinksQueryResult = Apollo.QueryResult<MediaLinksQuery, MediaLinksQueryVariables>;