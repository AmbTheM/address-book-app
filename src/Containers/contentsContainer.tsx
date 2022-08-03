import { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useData from "../Services/Database/useData";
import type { RootState } from "../Redux/configureStore";
import { message } from "antd";

function useContent() {
  const Data = useSelector((state: RootState) => state.dataReducer);
  const isLoading = useSelector((state: RootState) => state.loadingReducer);

  const observer = useRef<any>(null);
  const [saveData, concatData] = useData();

  const lastRefCalllback = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          Data.length < 100 &&
          isLoading === false
        ) {
          concatData();
        } else if (entries[0].isIntersecting && Data.length >= 100) {
          message.success({
            content: "All users have been loaded",
            key: 1,
            duration: 2,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [concatData]
  );

  return lastRefCalllback;
}

export default useContent;
