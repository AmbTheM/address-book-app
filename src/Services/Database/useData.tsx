import CallAPI from "./APIcall";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../Redux/Actions";
import { bindActionCreators } from "redux";
import type { RootState } from "../../Redux/configureStore";

function useData() {
  const dispatch = useDispatch();
  const { storeData } = bindActionCreators(ActionCreators, dispatch);
  const savedSettings = useSelector(
    (state: RootState) => state.settingsReducer
  );
  const Data = useSelector((state: RootState) => state.dataReducer);
  const cache = [...[], ...Data];

  const saveData = async () => {
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData(data.results);
  };

  const concatData = async () => {
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData(cache.concat(data.results));
  };
  return [saveData, concatData];
}

export default useData;
