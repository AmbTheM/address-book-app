import { Modal, Avatar } from "antd";
import React from "react";

function UserModal(props) {
  return (
    <Modal
      title={`${props.ModalData.name.first} ${props.ModalData.name.last}`}
      style={{ top: 20 }}
      visible={true}
      onOk={() => props.displayModal(false)}
      onCancel={() => props.displayModal(false)}
      width={1000}
    >
      <Avatar size={128} src={props.ModalData.picture.medium} />
      <p>{`Username: ${props.ModalData.login.username}`}</p>
      <p>{`Email: ${props.ModalData.login.username}`}</p>
      <p>{`Phone: ${props.ModalData.phone}`}</p>
      <p>{`Cell: ${props.ModalData.cell}`}</p>
      <p>{`Street: ${props.ModalData.location.street.name}`}</p>
      <p>{`City: ${props.ModalData.location.city}`}</p>
      <p>{`State: ${props.ModalData.location.state}`}</p>
      <p>{`Postcode: ${props.ModalData.location.postcode}`}</p>
    </Modal>
  );
}

export default UserModal;
