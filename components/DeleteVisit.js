import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import React, { useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';

const DeleteButton = styled.button`
  margin: 5px;
  width: 75px;
  align-self: flex-end;
  :hover {
    cursor: pointer;
  }
`;

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
  const [displayModal, setDisplayModal] = useState(false);
  const [deletePatientVisit, { loading, error }] = useMutation(
    DELETE_PATIENT_VISIT_MUTATION,
    {
      variables: { id },
      update,
    }
  );

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleDelete = async () => {
    await deletePatientVisit().catch((err) => alert(err.message));
    Router.push({
      pathname: '/records/',
    });
  };
  return (
    <>
      <DeleteButton
        type="button"
        disabled={loading}
        onClick={() => toggleModal()}
      >
        Delete
      </DeleteButton>
      {displayModal && (
        <DeleteConfirmModal
          toggleModal={() => toggleModal()}
          handleDelete={() => handleDelete()}
        />
      )}
    </>
  );
}
