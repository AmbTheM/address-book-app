export function persistData(option) {
  return (dispatch) => {
    dispatch({
      type: "PERSIST",
      payload: option,
    });
  };
}

export function saveSettings(settings) {
  return (dispatch) => {
    dispatch({
      type: "SETTING",
      payload: settings,
    });
  };
}
