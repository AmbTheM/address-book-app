import CallAPI from "./APIcall";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../Redux/Actions";
import { bindActionCreators } from "redux";
import type { RootState } from "../../Redux/configureStore";
import { message } from "antd";

function useData() {
  const dispatch = useDispatch();
  const { storeData, setLoading } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const savedSettings = useSelector(
    (state: RootState) => state.settingsReducer
  );
  const Data = useSelector((state: RootState) => state.dataReducer);
  const cache = [...[], ...Data];

  const saveData = async () => {
    await setLoading(true);
    message.loading({
      content: "Loading Users",
      key: 1,
    });
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    ).catch((error) => {
      message.error(`Error: ${error}`);
    });

    storeData(data.results);
    await setLoading(false);
    message.success({
      content: "Finished Loading",
      duration: 2,
      key: 1,
    });
  };

  const concatData = async () => {
    await setLoading(true);
    message.loading({
      content: "Loading Users",
      key: 1,
    });
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    ).catch((error) => {
      message.error(`Error: ${error}`);
    });

    storeData(cache.concat(data.results));
    await setLoading(false);
    message.success({
      content: "Finished Loading",
      duration: 2,
      key: 1,
    });
  };
  return [saveData, concatData];
}

export default useData;
