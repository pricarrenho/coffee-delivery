import { gql } from "graphql-request";

export const GET_HOME_PAGE = gql`
  query getPages($slug: String) {
    page(where: { slug: $slug }) {
      title
      subtitle
      image {
        url
      }
      productInfos {
        id
        icon {
          url
        }
        description
      }
      products {
        id
        coffeeImage {
          url
        }
        tags {
          title
        }
        title
        description
        value
      }
    }
  }
`;

//Aqui é tudo o que eu quero que a api me retorne, como uma lista de instruções
