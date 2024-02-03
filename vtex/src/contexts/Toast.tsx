import Toasts from '../components/Toasts';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';

interface IToastContextValues {
  addToast: (
    text: string,
    type?: 'info' | 'warning' | 'error' | 'success'
  ) => void;
}

const ToastContext = createContext<IToastContextValues>(
  {} as IToastContextValues
);

export const ToastProvider: React.FC<{ children: any }> = ({ children }) => {
  const [toastsList, setToastsList] = useState<IToast[]>([]);

  const addToast = useCallback(
    (text: string, type: 'info' | 'warning' | 'error' | 'success' = 'info') => {
      const newToast: IToast = {
        id: uuid(),
        text,
        type,
      };

      setToastsList((prevState) => [...prevState, newToast]);
    },
    []
  );

  const removeToast = useCallback(
    (id: string) => {
      const newToastList = toastsList.filter((toast) => toast.id !== id);
      setToastsList(newToastList);
    },
    [toastsList]
  );

  useEffect(() => {
    if (toastsList.length > 0) {
      const timeout = setTimeout(() => {
        removeToast(toastsList[0].id);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toastsList, removeToast]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {!!toastsList.length && <Toasts list={toastsList} remove={removeToast} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};
