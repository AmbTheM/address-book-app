import { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useData from "../Services/Database/useData";

function useContent() {
  const Data = useSelector((state) => state.dataReducer.storage);
  const observer = useRef(null);
  const [saveData, concatData] = useData();

  const lastRefCalllback = useCallback((node) => {
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
  });

  return lastRefCalllback;
}

export default useContent;
