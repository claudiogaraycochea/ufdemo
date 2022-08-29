const initialState = {
  items: [],
  notification: {}
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.items
      };
    case 'GET_ITEMS_ERROR':
      return {
        ...state,
        notification: action.notification
      };
    default:
      return state;
  }
}