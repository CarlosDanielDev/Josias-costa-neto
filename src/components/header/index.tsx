import * as S from './styles'
import { lazy, Suspense, useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { Procedure as ProcedureIcon } from './procedure'
import { Home as HomeIcon } from './home'
import { Contact as ContactIcon } from './contact'
import { About as AboutIcon } from './about'

const LazyScheduleAppointment = lazy(() => import('../schedule-appointment'))

interface HeaderProps {
  scrolling?: boolean;
}

export function MainHeader({ scrolling }: HeaderProps) {
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
          <HomeIcon className="icon-style" />
          <S.NavText>Início</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'procedures' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'procedures')}>
          <ProcedureIcon className="icon-style" />
          <S.NavText>Procedimentos</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'about')}>
          <AboutIcon className="icon-style" />
          <S.NavText>Sobre mim</S.NavText>
        </S.NavItem>
        <S.NavItem href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleMenuClick(e, 'contact')}>
          <ContactIcon className="icon-style" />
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

