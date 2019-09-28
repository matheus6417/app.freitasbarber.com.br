import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class SpendingService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPENDING_UPDATE(
          $id: String!
          $data: SpendingInput!
        ) {
          spendingUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.spendingUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPENDING_DESTROY($ids: [String!]!) {
          spendingDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.spendingDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPENDING_CREATE($data: SpendingInput!) {
          spendingCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.spendingCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPENDING_IMPORT(
          $data: SpendingInput!
          $importHash: String!
        ) {
          spendingImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.spendingImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SPENDING_FIND($id: String!) {
          spendingFind(id: $id) {
            id
            name
            date
            value
            e1
            e2
            e3
            e4
            e5
            e6
            e7
            e8 {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            e9 {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.spendingFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SPENDING_LIST(
          $filter: SpendingFilterInput
          $orderBy: SpendingOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          spendingList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              name
              date
              value
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.spendingList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SPENDING_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          spendingAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.spendingAutocomplete;
  }
}
