import { request } from '../../lib/https';

const getItems = async (dispatch) => {
  const endpoint = `/customers`;
  try {
    const res = await request('GET', endpoint, null);
    console.log(res.data);
    const items = res.data;
    dispatch({
      type: 'GET_ITEMS',
      items: items,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ITEMS_ERROR',
      notification: {
        message: error
      }
    });
  }
};
  
export { getItems };  