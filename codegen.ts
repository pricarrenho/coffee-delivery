import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-sa-east-1.hygraph.com/v2/cln4lr8235y3l01ukgwrs0fwz/master",
  documents: "src/service/**/queries.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
