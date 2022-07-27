import CallAPI from "./APIcall";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../Redux/Actions";
import { bindActionCreators } from "redux";

function useData() {
  const dispatch = useDispatch();
  const { storeData } = bindActionCreators(ActionCreators, dispatch);
  const savedSettings = useSelector((state) => state.settingsReducer);
  const Data = useSelector((state) => state.dataReducer.storage);
  const cache = [...[], ...Data];
  const saveData = async () => {
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData({ storage: data.results });
  };

  const concatData = async () => {
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData({ storage: cache.concat(data.results) });
  };
  return [saveData, concatData];
}

export default useData;
