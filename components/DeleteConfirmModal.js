import styled from 'styled-components';

/* The Modal (background) */

const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

/* Modal Content/Box */
const ModalContent = styled.div`
  background-color: #fefefe;
  max-width: 425px;
  width: 75%;
  margin: 5% auto;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ConfirmDeleteText = styled.p`
  text-align: center;
  font-size: 21px;
`;

const DeleteExplanation = styled.p`
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  font-size: 28px;
  align-self: end;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  font-size: 18px;
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  width: 125px;
  padding: 10px;
  margin: 5px;
  align-self: end;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px grey;
  }
`;

export default function DeleteConfirmModal(props) {
  const { toggleModal, handleDelete } = props;
  return (
    <Modal onClick={() => toggleModal()}>
      {/* e.stopPropagation() = user can click inside modal w\o closing it */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={() => toggleModal()}>
          X
        </CloseButton>
        <ConfirmDeleteText>Delete Record?</ConfirmDeleteText>
        <DeleteExplanation>
          This will permanently delete this record.
        </DeleteExplanation>
        <DeleteButton type="button" onClick={() => handleDelete()}>
          Delete
        </DeleteButton>
      </ModalContent>
    </Modal>
  );
}
