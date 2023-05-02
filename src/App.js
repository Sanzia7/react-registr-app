import { useState } from 'react';
import Button from './components/UI/Button/Button';
import Modal from './components/Modal/Modal';
import { Link } from 'react-router-dom';


function App() {

  const [active, setActive] = useState(false);

  return (
    <div>
      <Link to={'/login'} >
        <Button
          onClick={() => setActive(true)}
          title={'Авторизация / Регистрация'}
          color={'yellow'}
        />
      </Link>
      <Modal
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default App;


/* <Button onDoubleClick={() => console.log('db_click')} title={'Text'} color={'white'} /> */ 
// Реализовать в компоненте Modal кнопку 'X', который закроет моадльное окно