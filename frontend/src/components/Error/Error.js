import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorMessage, clearError } from '../../redux/slices/errorSlice';

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage)
            dispatch(clearError())
        }
    }, [errorMessage, dispatch])

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
    />
  );
};

export default Error;
