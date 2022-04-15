import { useQuery, useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';

const MRN_QUERY = gql`
  query MRN_QUERY($mrn: Int!) {
    filterVisitsMrn(where: { mrn: $mrn }) {
      id
      mrn
      visitType
      visitDate
      cpt
      rvu
    }
  }
`;

export default function Test() {
  const test = useQuery(MRN_QUERY, {
    variables: {
      mrn: 223456789,
      // skip: page * perPage - perPage,
      // first: perPage,
    },
  });
  console.log(test.data);

  return <h1>Test Stuff</h1>;
}
