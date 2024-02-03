import { MdClose, MdError, MdWarning, MdInfo, MdDone } from 'react-icons';
import { Container, Toast } from './styles';

const icons = {
  info: MdInfo,
  error: MdError,
  warning: MdWarning,
  success: MdDone,
};

const backgroundColor = {
  info: '#2196F3',
  warning: '#FF9800',
  error: '#F44336',
  success: '#00A000',
};

interface IToasts {
  list: IToast[];
  remove: (id: string) => void;
}

const Toasts: React.FC<IToasts> = ({ list, remove }) => (
  <Container>
    {list.map((toast) => {
      const Icon = icons[toast.type];

      return (
        <Toast key={toast.id} backgroundColor={backgroundColor[toast.type]}>
          <Icon size="20" />
          <span>{toast.text}</span>
          <MdClose
            onClick={() => remove(toast.id)}
            size="15"
            style={{
              cursor: 'pointer',
              marginLeft: 'auto',
            }}
          />
        </Toast>
      );
    })}
  </Container>
);

export default Toasts;
