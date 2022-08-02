import { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useData from "../Services/Database/useData";
import type { RootState } from "../Redux/configureStore";

function useContent() {
  const Data = useSelector((state: RootState) => state.dataReducer);
  const observer = useRef<any>(null);
  const [saveData, concatData] = useData();

  const lastRefCalllback = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          Data.length < 1000 //&&
          //isLoading === false
        ) {
          concatData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [concatData]
  );

  return lastRefCalllback;
}

export default useContent;
