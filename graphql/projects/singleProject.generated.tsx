import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SingleProjectQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type SingleProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectEntityResponse', data?: { __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, project_type?: string | null, link?: string | null, link_git?: string | null, description: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null } | null }> } | null, tech_used?: Array<{ __typename?: 'ComponentTechTech', id: string, tech_title?: string | null, tech_logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null, full_description?: Array<{ __typename?: 'ComponentTextTextWithHeader', id: string, header?: string | null, text?: string | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const SingleProjectDocument = gql`
    query SingleProject($id: ID!) {
  project(id: $id) {
    data {
      id
      attributes {
        title
        project_type
        link
        link_git
        description
        images {
          data {
            attributes {
              url
              height
            }
          }
        }
        tech_used {
          ... on ComponentTechTech {
            id
            tech_logo {
              data {
                attributes {
                  url
                }
              }
            }
            tech_title
          }
        }
        full_description {
          ... on ComponentTextTextWithHeader {
            id
            header
            text
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSingleProjectQuery__
 *
 * To run a query within a React component, call `useSingleProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleProjectQuery(baseOptions: Apollo.QueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProjectQuery, SingleProjectQueryVariables>(SingleProjectDocument, options);
      }
export function useSingleProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProjectQuery, SingleProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProjectQuery, SingleProjectQueryVariables>(SingleProjectDocument, options);
        }
export type SingleProjectQueryHookResult = ReturnType<typeof useSingleProjectQuery>;
export type SingleProjectLazyQueryHookResult = ReturnType<typeof useSingleProjectLazyQuery>;
export type SingleProjectQueryResult = Apollo.QueryResult<SingleProjectQuery, SingleProjectQueryVariables>;