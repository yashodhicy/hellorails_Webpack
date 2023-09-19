import { setGreeting } from '../reducers/greetingReducer';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/random_greeting');
      const data = await response.json();
      dispatch(setGreeting(data.greeting));
    } catch (error) {
      // Handle errors here
      console.error('Error fetching greeting:', error);
    }
  };
};
