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
      style={{ top: 20 }}
      visible={true}
      onOk={() => displayModal(false)}
      onCancel={() => displayModal(false)}
      width={750}
    >
      <div className="modal">
        <div className="modal-header">
          <h1>{`${ModalData.name.first} ${ModalData.name.last}`}</h1>
          <Avatar className="avatar" size={200} src={ModalData.picture.large} />
        </div>
        <p className="userName">{`Username: ${ModalData.login.username}`}</p>
      </div>
      <div className="modal-content">
        <div className="contact-info">
          <p>{`Email: ${ModalData.email}`}</p>
          <p>{`Phone: ${ModalData.phone}`}</p>
          <p>{`Cell: ${ModalData.cell}`}</p>
        </div>

        <div className="address-info">
          <p>{`Street: ${ModalData.location.street.name}`}</p>
          <p>{`City: ${ModalData.location.city}`}</p>
          <p>{`State: ${ModalData.location.state}`}</p>
          <p>{`Postcode: ${ModalData.location.postcode}`}</p>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
