import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/helloReducer';

const Greet = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {greeting}
      {' '}
      World!
    </div>
  );
};

export default Greet;
