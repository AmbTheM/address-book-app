import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useCallback } from "react";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../Redux/Actions/index";
import type { RootState } from "../Redux/configureStore";
import { UserData } from "../Services/Database/DataType";

function useSearch() {
  const Data = useSelector((state: RootState) => state.dataReducer);
  const dispatch = useDispatch();
  const { searchData } = bindActionCreators(ActionCreators, dispatch);

  /*delay is the function which is utilizing the useCallback hook. We need the usecallback otherwise debounce function will be called everytime input changes
  stacking up multiple debounces and slowing down performance*/
  const delay = useCallback(
    debounce((inputText) => {
      inputText.target.value.length > 0
        ? searchData(
            Data?.filter((item: UserData) => {
              const lowercasefirst = item.name.first.toLowerCase();
              const lowercaselast = item.name.last.toLowerCase();
              const lowercaseterm = inputText.target.value.toLowerCase();

              return (
                lowercasefirst === lowercaseterm ||
                lowercaselast === lowercaseterm
              );
            })
          )
        : searchData([]);
    }, 1000),
    [Data]
  );
  //---------------------------------------------------------------------------------------------

  //Handle input, e is persisted so that it gets passed in the useCallback hook.
  const onTyping = (e: any) => {
    e.persist();
    delay(e);
  };
  //------------------------------------------------------------------------------
  return onTyping;
}

export default useSearch;
