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
import type { RootState } from "../../Redux/configureStore";

function SearchPage() {
  const [saveData, concatData] = useData();
  const onTyping = useSearch();
  const lastRefCalllback = useContent();
  const savedSettings = useSelector(
    (state: RootState) => state.settingsReducer
  );
  const Data = useSelector((state: RootState) => state.dataReducer);
  const ModalIndex = useSelector((state: RootState) => state.modalReducer);
  const searchedData = useSelector(
    (state: RootState) => state.searchResultReducer
  );
  const isLoading = useSelector((state: RootState) => state.loadingReducer);

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
          data={searchedData.length === 0 ? Data : searchedData}
          lastRefCallback={
            searchedData.length === 0 ? lastRefCalllback : () => {}
          }
          Modal={ModalAction}
          displayModal={setVisible}
          isLoading={isLoading}
        />
      </div>
      <>
        {visible === true ? (
          <UserModal
            ModalData={
              searchedData.length === 0
                ? Data[ModalIndex]
                : searchedData[ModalIndex]
            }
            displayModal={setVisible}
          />
        ) : (
          <></>
        )}
      </>
    </>
  );
}

export default SearchPage;
