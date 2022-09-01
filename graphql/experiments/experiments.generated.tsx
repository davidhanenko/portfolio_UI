import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ExperimentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ExperimentsQuery = { __typename?: 'Query', experiments?: { __typename?: 'ExperimentEntityResponseCollection', data: Array<{ __typename?: 'ExperimentEntity', id?: string | null, attributes?: { __typename?: 'Experiment', title: string, link: string, link_git: string, description: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };


export const ExperimentsDocument = gql`
    query Experiments {
  experiments {
    data {
      id
      attributes {
        title
        link
        link_git
        description
        image {
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
 * __useExperimentsQuery__
 *
 * To run a query within a React component, call `useExperimentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperimentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperimentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useExperimentsQuery(baseOptions?: Apollo.QueryHookOptions<ExperimentsQuery, ExperimentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExperimentsQuery, ExperimentsQueryVariables>(ExperimentsDocument, options);
      }
export function useExperimentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExperimentsQuery, ExperimentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExperimentsQuery, ExperimentsQueryVariables>(ExperimentsDocument, options);
        }
export type ExperimentsQueryHookResult = ReturnType<typeof useExperimentsQuery>;
export type ExperimentsLazyQueryHookResult = ReturnType<typeof useExperimentsLazyQuery>;
export type ExperimentsQueryResult = Apollo.QueryResult<ExperimentsQuery, ExperimentsQueryVariables>;