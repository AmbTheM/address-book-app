import CallAPI from "./APIcall";
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreators from "../../Redux/Actions";
import { bindActionCreators } from "redux";
import type { RootState } from "../../Redux/configureStore";
import { set } from "lodash";

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
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData(data.results);
    await setLoading(false);
  };

  const concatData = async () => {
    await setLoading(true);
    const data = await CallAPI(
      savedSettings.nationalities,
      savedSettings.gender
    );

    storeData(cache.concat(data.results));
    await setLoading(false);
  };
  return [saveData, concatData];
}

export default useData;
