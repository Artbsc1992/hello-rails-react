import react, { userEffect } from 'react';
import { userDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/helloReducer';

const Greet = () => {
  const dispatch = userDispatch();
  const { greeting } = useSelector((state) => state.hello);

  userEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
      {' '}
      World!
    </div>
  );
};

export default Greet;
