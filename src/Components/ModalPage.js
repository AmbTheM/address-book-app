import React from "react";
import { useSelector } from "react-redux";
import UserModal from "./userModal";

function ModalPage() {
  const ModalData = useSelector((state) => state.modalReducer);
  return <UserModal visible={true} ModalName={ModalData.name.first} />;
}

export default ModalPage;
