import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProjectsImagesQueryVariables = Types.Exact<{
  title: Types.Scalars['String'];
}>;


export type ProjectsImagesQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } } | null }> } | null };


export const ProjectsImagesDocument = gql`
    query ProjectsImages($title: String!) {
  projects(filters: {title: {eq: $title}}) {
    data {
      id
      attributes {
        title
        images {
          data {
            id
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
 * __useProjectsImagesQuery__
 *
 * To run a query within a React component, call `useProjectsImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsImagesQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useProjectsImagesQuery(baseOptions: Apollo.QueryHookOptions<ProjectsImagesQuery, ProjectsImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsImagesQuery, ProjectsImagesQueryVariables>(ProjectsImagesDocument, options);
      }
export function useProjectsImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsImagesQuery, ProjectsImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsImagesQuery, ProjectsImagesQueryVariables>(ProjectsImagesDocument, options);
        }
export type ProjectsImagesQueryHookResult = ReturnType<typeof useProjectsImagesQuery>;
export type ProjectsImagesLazyQueryHookResult = ReturnType<typeof useProjectsImagesLazyQuery>;
export type ProjectsImagesQueryResult = Apollo.QueryResult<ProjectsImagesQuery, ProjectsImagesQueryVariables>;