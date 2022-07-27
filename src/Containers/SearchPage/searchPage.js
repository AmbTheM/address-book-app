import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import useData from "../../Services/Database/useData";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../Redux/Actions";
import InputField from "../../Components/inputField";
import useSearch from "../searchContainers";
import Contents from "../../Components/Contents";
import useContent from "../contentsContainer";
import UserModal from "../../Components/userModal";

function SearchPage() {
  const [saveData, concatData] = useData();
  const onTyping = useSearch();
  const lastRefCalllback = useContent();
  const savedSettings = useSelector((state) => state.settingsReducer);
  const Data = useSelector((state) => state.dataReducer.storage);
  const ModalIndex = useSelector((state) => state.modalReducer);

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { ModalAction } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    saveData();
  }, [savedSettings]);

  return (
    <>
      <InputField
        className="searchBox"
        size="large"
        placeholder="Type to start searching"
        prefix={<UserOutlined />}
        onChange={onTyping}
      />
      <div className="content">
        <Contents
          data={Data}
          lastRefCalllback={lastRefCalllback}
          Modal={ModalAction}
          displayModal={setVisible}
        />
      </div>
      <>
        {visible === true ? (
          <UserModal ModalData={Data[ModalIndex]} displayModal={setVisible} />
        ) : (
          <></>
        )}
      </>
    </>
  );
}

export default SearchPage;
