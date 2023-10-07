import * as S from './styles'
import { FaProcedures } from "react-icons/fa";
import { lazy, Suspense, useState } from 'react';
import { MdOutlineHome, MdPersonOutline, MdOutlineEmail, MdMenu, MdClose } from "react-icons/md";

const LazyScheduleAppointment = lazy(() => import('../schedule-appointment'))

type Func = (...args: any[]) => void;

interface HeaderProps {
  scrolling?: boolean;
}

export const debounce = (func: Func, wait: number): Func => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: any[]): void {
    const later = () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}; export function MainHeader({ scrolling }: HeaderProps) {
  const [active, setActive] = useState('none');
  const [activeSection, setActiveSection] = useState('');

  const handleMenuClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setActive('none');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.MainHeader scrolling={!!scrolling} className={active}>
      <a href="#" aria-label="ínicio" onClick={(e) => handleMenuClick(e, 'init')}>
        <S.Logo scrolling={!!scrolling} />
      </a>
      <S.Button scrolling={!!scrolling} className={active} type="button" onClick={() => setActive(active === 'none' ? 'visible' : 'none')}>
        {active === 'none' ? <MdMenu /> : <MdClose />}
        <span>
          {active === 'none' ? 'Menu' : 'Fechar'}
        </span>
      </S.Button>
      <S.NavContainer className={active}>
        <S.NavItem href="#" className={activeSection === 'init' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'init')}>
          <MdOutlineHome />
          <S.NavText>Início</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'procedures' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'procedures')}>
          <FaProcedures />
          <S.NavText>Procedimentos</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'about')}>
          <MdPersonOutline />
          <S.NavText>Sobre mim</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'contact')}>
          <MdOutlineEmail />
          <S.NavText>Contato</S.NavText>
        </S.NavItem>
        <LazyScheduleAppointment />
      </S.NavContainer>
    </S.MainHeader>
  );
}

const renderLoader = () => <p>Carregando...</p>;

const Header = ({ scrolling }: { scrolling: boolean }) => (
  <Suspense fallback={renderLoader()}>
    <MainHeader scrolling={scrolling} />
  </Suspense>
);

export default Header;

