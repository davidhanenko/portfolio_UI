import * as Types from '../types.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentProjectQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentProjectQuery = { __typename?: 'Query', currentProject?: { __typename?: 'CurrentProjectEntityResponse', data?: { __typename?: 'CurrentProjectEntity', id?: string | null, attributes?: { __typename?: 'CurrentProject', title?: string | null, project_type?: string | null, link?: string | null, link_git?: string | null, description?: string | null, status?: Types.Enum_Currentproject_Status | null, progress?: number | null, main_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, tech_used?: Array<{ __typename?: 'ComponentTechTech', id: string, tech_title?: string | null, tech_logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };


export const CurrentProjectDocument = gql`
    query currentProject {
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
 * __useCurrentProjectQuery__
 *
 * To run a query within a React component, call `useCurrentProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentProjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentProjectQuery(baseOptions?: Apollo.QueryHookOptions<CurrentProjectQuery, CurrentProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentProjectQuery, CurrentProjectQueryVariables>(CurrentProjectDocument, options);
      }
export function useCurrentProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentProjectQuery, CurrentProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentProjectQuery, CurrentProjectQueryVariables>(CurrentProjectDocument, options);
        }
export type CurrentProjectQueryHookResult = ReturnType<typeof useCurrentProjectQuery>;
export type CurrentProjectLazyQueryHookResult = ReturnType<typeof useCurrentProjectLazyQuery>;
export type CurrentProjectQueryResult = Apollo.QueryResult<CurrentProjectQuery, CurrentProjectQueryVariables>;