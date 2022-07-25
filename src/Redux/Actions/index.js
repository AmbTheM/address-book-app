export function persistData(option) {
  return (dispatch) => {
    dispatch({
      type: "PERSIST",
      payload: option,
    });
  };
}
