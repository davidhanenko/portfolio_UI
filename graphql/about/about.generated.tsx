import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AboutQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', attributes?: { __typename?: 'About', header?: string | null, img?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, text_section?: Array<{ __typename?: 'ComponentTextText', section?: string | null, id: string } | null> | null, tech?: Array<{ __typename?: 'ComponentTechTech', id: string, tech_title?: string | null } | null> | null } | null } | null } | null };


export const AboutDocument = gql`
    query About {
  about {
    data {
      attributes {
        header
        img {
          data {
            attributes {
              url
            }
          }
        }
        text_section {
          ... on ComponentTextText {
            section
            id
          }
        }
        tech {
          ... on ComponentTechTech {
            id
            tech_title
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAboutQuery__
 *
 * To run a query within a React component, call `useAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutQuery(baseOptions?: Apollo.QueryHookOptions<AboutQuery, AboutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
      }
export function useAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutQuery, AboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
        }
export type AboutQueryHookResult = ReturnType<typeof useAboutQuery>;
export type AboutLazyQueryHookResult = ReturnType<typeof useAboutLazyQuery>;
export type AboutQueryResult = Apollo.QueryResult<AboutQuery, AboutQueryVariables>;