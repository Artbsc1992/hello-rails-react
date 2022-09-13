import axios from 'axios';
// actions

export const GET_GREETING = 'GET_GREETING';
export const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';
export const GET_GREETING_FAILURE = 'GET_GREETING_FAILURE';

// action creators
const getGreeting = () => ({
  type: GET_GREETING,
});

const getGreetingSuccess = (greeting) => ({
  type: GET_GREETING_SUCCESS,
  payload: greeting,
});

const getGreetingFailure = () => ({
  type: GET_GREETING_FAILURE,
});

// thunk
export const fetchGreeting = () => async (dispatch) => {
  dispatch(getGreeting());
  try {
    const res = await axios.get('/messages');
    dispatch(getGreetingSuccess(res.data.greeting));
  } catch (err) {
    dispatch(getGreetingFailure());
  }
};

// initial state
const initialState = {
  greeting: '',
  status: 'idle',
  error: null,
};

// reducer

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        status: 'loading',
      };
    case GET_GREETING_SUCCESS:
      return {
        ...state,
        status: 'idle',
        greeting: action.payload,
      };
    case GET_GREETING_FAILURE:
      return {
        ...state,
        status: 'error',
        error: 'Error fetching greeting',
      };
    default:
      return state;
  }
};

export default { helloReducer, fetchGreeting };

export {
  getGreeting,
  getGreetingSuccess,
  getGreetingFailure,
};
