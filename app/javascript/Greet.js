import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/helloReducer';

const Greet = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.hello);

  useEffect(() => {
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
