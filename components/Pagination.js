import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const PaginationLabels = styled.p`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

const PaginationArrows = styled.a`
  font-size: 3rem;
`;

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allPatientVisitsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  //   if (error) return <DisplayError error={error} />;
  if (error) return <h1>Error</h1>;
  const { count } = data._allPatientVisitsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Link href={`/records/${page - 1}`}>
        <PaginationArrows aria-disabled={page <= 1}>←</PaginationArrows>
      </Link>
      <PaginationLabels>
        Page {page} of {pageCount}
      </PaginationLabels>
      <PaginationLabels>{count} Items Total</PaginationLabels>
      <Link href={`/records/${page + 1}`}>
        <PaginationArrows aria-disabled={page >= pageCount}>→</PaginationArrows>
      </Link>
    </PaginationStyles>
  );
}
