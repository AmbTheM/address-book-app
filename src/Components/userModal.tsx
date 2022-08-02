import { Modal, Avatar } from "antd";
import React from "react";
import { UserData } from "../Services/Database/DataType";

interface Props {
  ModalData: UserData;
  displayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: React.FC<Props> = ({ ModalData, displayModal }) => {
  return (
    <Modal
      title={`${ModalData.name.first} ${ModalData.name.last}`}
      style={{ top: 20 }}
      visible={true}
      onOk={() => displayModal(false)}
      onCancel={() => displayModal(false)}
      width={1000}
    >
      <Avatar size={128} src={ModalData.picture.medium} />
      <p>{`Username: ${ModalData.login.username}`}</p>
      <p>{`Email: ${ModalData.login.username}`}</p>
      <p>{`Phone: ${ModalData.phone}`}</p>
      <p>{`Cell: ${ModalData.cell}`}</p>
      <p>{`Street: ${ModalData.location.street.name}`}</p>
      <p>{`City: ${ModalData.location.city}`}</p>
      <p>{`State: ${ModalData.location.state}`}</p>
      <p>{`Postcode: ${ModalData.location.postcode}`}</p>
    </Modal>
  );
};

export default UserModal;
