import * as Types from '../types.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentSingleProjectQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentSingleProjectQuery = { __typename?: 'Query', currentProject?: { __typename?: 'CurrentProjectEntityResponse', data?: { __typename?: 'CurrentProjectEntity', id?: string | null, attributes?: { __typename?: 'CurrentProject', title?: string | null, project_type?: string | null, link?: string | null, link_git?: string | null, description?: string | null, status?: Types.Enum_Currentproject_Status | null, progress?: number | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null } | null }> } | null, tech_used?: Array<{ __typename?: 'ComponentTechTech', id: string, tech_title?: string | null, tech_logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null, full_description?: Array<{ __typename?: 'ComponentTextTextWithHeader', id: string, header?: string | null, text?: string | null } | { __typename?: 'Error' } | null> | null, features?: Array<{ __typename?: 'ComponentTextTextWithHeader', id: string, header?: string | null, text?: string | null } | { __typename?: 'Error' } | null> | null, todo_list?: Array<{ __typename?: 'ComponentTextText', id: string, section?: string | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const CurrentSingleProjectDocument = gql`
    query CurrentSingleProject {
  currentProject {
    data {
      id
      attributes {
        title
        project_type
        link
        link_git
        description
        status
        progress
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
        features {
          ... on ComponentTextTextWithHeader {
            id
            header
            text
          }
        }
        todo_list {
          ... on ComponentTextText {
            id
            section
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentSingleProjectQuery__
 *
 * To run a query within a React component, call `useCurrentSingleProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentSingleProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentSingleProjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentSingleProjectQuery(baseOptions?: Apollo.QueryHookOptions<CurrentSingleProjectQuery, CurrentSingleProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentSingleProjectQuery, CurrentSingleProjectQueryVariables>(CurrentSingleProjectDocument, options);
      }
export function useCurrentSingleProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentSingleProjectQuery, CurrentSingleProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentSingleProjectQuery, CurrentSingleProjectQueryVariables>(CurrentSingleProjectDocument, options);
        }
export type CurrentSingleProjectQueryHookResult = ReturnType<typeof useCurrentSingleProjectQuery>;
export type CurrentSingleProjectLazyQueryHookResult = ReturnType<typeof useCurrentSingleProjectLazyQuery>;
export type CurrentSingleProjectQueryResult = Apollo.QueryResult<CurrentSingleProjectQuery, CurrentSingleProjectQueryVariables>;