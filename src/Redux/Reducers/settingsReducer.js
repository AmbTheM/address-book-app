export default function settingsReducer(state = {}, action) {
  switch (action.type) {
    case "SETTING":
      state = action.payload;
      return state;
    default:
      return state;
  }
}
