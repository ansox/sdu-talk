import { GraphQLClient } from "graphql-request";

export function request(props: any) {
  const { query } = props;
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    "gcms-stage":"PUBLISHED"
  };
 
  const client = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clbjhf0p32aej01tf6j5379ca/master', { headers });
  
  return client.request(query);
}