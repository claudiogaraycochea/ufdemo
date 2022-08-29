// import mockOffices from './../mock/offices.json';

// define typescript

const initialState = {
  items: [],
  notification: Object
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.items
      };
    case 'GET_ITEMS':
      return {
        ...state,
        notification: action.notification
      };
    default:
      return state;
  }
}