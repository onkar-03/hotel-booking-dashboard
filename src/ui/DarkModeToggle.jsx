import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon.jsx';
import { useDarkMode } from '../context/DarkModeContext.jsx';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
