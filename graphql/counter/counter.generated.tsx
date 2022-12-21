import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddIpMutationVariables = Types.Exact<{
  data: Types.IpInput;
}>;


export type AddIpMutation = { __typename?: 'Mutation', createIp?: { __typename?: 'IpEntityResponse', data?: { __typename?: 'IpEntity', id?: string | null } | null } | null };


export const AddIpDocument = gql`
    mutation AddIp($data: IpInput!) {
  createIp(data: $data) {
    data {
      id
    }
  }
}
    `;
export type AddIpMutationFn = Apollo.MutationFunction<AddIpMutation, AddIpMutationVariables>;

/**
 * __useAddIpMutation__
 *
 * To run a mutation, you first call `useAddIpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddIpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addIpMutation, { data, loading, error }] = useAddIpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddIpMutation(baseOptions?: Apollo.MutationHookOptions<AddIpMutation, AddIpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddIpMutation, AddIpMutationVariables>(AddIpDocument, options);
      }
export type AddIpMutationHookResult = ReturnType<typeof useAddIpMutation>;
export type AddIpMutationResult = Apollo.MutationResult<AddIpMutation>;
export type AddIpMutationOptions = Apollo.BaseMutationOptions<AddIpMutation, AddIpMutationVariables>;