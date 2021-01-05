export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBBunQnRwipMES-LrTj0Qri7yRpGoevXcxWZwmTJS-c6uCrrllG9Gqogkoz8iZq8GojjaIxztNL2aaYqrsZPb8J9rzRo2Ej3MNYIbSNpR8qQ8enfLTOtRSzqrLi0N6ZOUp9YjLWwKahbZiCaLPoZE456L50oZ3CiXOUH6eHKYq6I0OsVSRB",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekkly,
      };

    default:
      return state;
  }
};

export default reducer;
