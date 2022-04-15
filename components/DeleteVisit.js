import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';

const DELETE_PATIENT_VISIT_MUTATION = gql`
  mutation DELETE_PATIENT_VISIT_MUTATION($id: ID!) {
    deletePatientVisit(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deletePatientVisit));
}

export default function DeleteVisit({ id }) {
  console.log(id);
  const [deletePatientVisit, { loading, error }] = useMutation(
    DELETE_PATIENT_VISIT_MUTATION,
    {
      variables: { id },
      update,
    }
  );

  const handleDelete = async () => {
    await deletePatientVisit().catch((err) => alert(err.message));
    Router.push({
      pathname: '/records/',
    });
  };
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          handleDelete();
        }
      }}
    >
      Delete
    </button>
  );
}
