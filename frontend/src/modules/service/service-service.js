import gql from 'graphql-tag';
import graphqlClient from '@/shared/graphql/client';

export class ServiceService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SERVICE_UPDATE(
          $id: String!
          $data: ServiceInput!
        ) {
          serviceUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.serviceUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SERVICE_DESTROY($ids: [String!]!) {
          serviceDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.serviceDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SERVICE_CREATE($data: ServiceInput!) {
          serviceCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.serviceCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SERVICE_IMPORT(
          $data: ServiceInput!
          $importHash: String!
        ) {
          serviceImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.serviceImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SERVICE_FIND($id: String!) {
          serviceFind(id: $id) {
            id
            name
            unitPrice
            description
            e1
            e2
            e3
            e4
            e5
            e6
            isActive
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
            image {
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

    return response.data.serviceFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SERVICE_LIST(
          $filter: ServiceFilterInput
          $orderBy: ServiceOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          serviceList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              name
              unitPrice
              description
              image {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
              }
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

    return response.data.serviceList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SERVICE_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          serviceAutocomplete(query: $query, limit: $limit) {
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

    return response.data.serviceAutocomplete;
  }
}
