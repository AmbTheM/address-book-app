import { useSelector } from "react-redux";

function useSearch() {
  const Data = useSelector((state) => state.dataReducer.storage);

  const onTyping = (e) => {
    console.table(
      Data?.filter((item) => {
        return item.name["first"] === "John";
      })
    );
  };

  return onTyping;
}

export default useSearch;
