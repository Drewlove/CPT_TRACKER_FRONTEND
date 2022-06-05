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
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: column;
`;

const ConfirmDeleteText = styled.p`
  text-align: center;
  font-size: 21px;
`;

const DeleteExplanation = styled.p`
  text-align: center;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background-color: white;
  border: none;
  font-size: 21px;
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
  padding: 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px grey;
  }
`;

const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function DeleteConfirmModal(props) {
  const { toggleModal, handleDelete } = props;
  return (
    <Modal>
      <ModalContent>
        <CloseButton type="button" onClick={() => toggleModal()}>
          X
        </CloseButton>
        <div>
          <ConfirmDeleteText>Delete Record?</ConfirmDeleteText>
          <DeleteExplanation>
            This will permanently delete this record.
          </DeleteExplanation>
          <DeleteButtonWrapper>
            <DeleteButton type="button" onClick={() => handleDelete()}>
              Delete
            </DeleteButton>
          </DeleteButtonWrapper>
        </div>
      </ModalContent>
    </Modal>
  );
}
