import * as Types from '../types.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProjectsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, project_type?: string | null, link?: string | null, link_git?: string | null, description: string, main_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, tech_used?: Array<{ __typename?: 'ComponentTechTech', id: string, tech_title?: string | null, tech_logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null }> } | null };


export const ProjectsDocument = gql`
    query Projects {
  projects {
    data {
      id
      attributes {
        title
        project_type
        link
        link_git
        description
        main_image {
          data {
            attributes {
              url
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
      }
    }
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;