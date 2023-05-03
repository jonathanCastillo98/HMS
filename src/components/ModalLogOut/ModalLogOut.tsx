import { useNavigate } from 'react-router-dom';
import './modalLogOut.css'
import { useDispatch } from 'react-redux';
import { clearLocalStorage } from '../../utilities';
import { UserKey, resetUser } from '../../redux/states/user';
import { PublicRoutes } from '../../models';

type Props = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLogOut = ({ setModalState }: Props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setModalState(false)
  }

  const handleOnLogOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN, { replace: true })
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Log Out?</h1>
        </div>
        <div className="body">
          <div className="bttns">
            <button id='cancelBttn' onClick={handleModalClose}>CANCEL</button>
            <button onClick={handleOnLogOut}>YES</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogOut;