import { useEffect, useState, lazy } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdContentCopy, MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md';
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import { data } from './data';
import * as S from './styles';

import { debounce } from '../../utils';
import { phoneNumber, whatsppLink } from '../../constants'

const LazyHeader = lazy(() => import('../../components/header'));
const LazyMap = lazy(() => import('../../components/map'));
const LazyScheduleAppointment = lazy(() => import('../../components/schedule-appointment'))

export function Main() {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const currentDate = new Date().getFullYear();

  const condition = scrollPosition > 50;

  const defaultToastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }

  const notifySuccess = () => toast('Copiado!', defaultToastConfig);

  const notifyError = () => toast.error('Ops, tente novamente', defaultToastConfig);

  async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      notifySuccess();
    } catch (err) {
      notifyError();
    }
  }

  const handleScroll = debounce(() => {
    const position = window.scrollY;
    setScrollPosition(position);
  }, 50);

  function redirectToUrl(url: string): void {
    window.location.href = url;
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <S.Wrapper>
      <S.Main>
        <S.Banner id="init">
          <LazyHeader scrolling={condition} />
          <S.BannerContent>
            <S.BannerTitle>
              Cuidando da função à estética,
              para um sorriso saudável e bonito
            </S.BannerTitle>
            <S.BannerSubtitle>
              Tratamentos odontológicos personalizados,
              focado no que você realmente precisa.
            </S.BannerSubtitle>
            <LazyScheduleAppointment onClick={() => redirectToUrl(whatsppLink)} />
          </S.BannerContent>
        </S.Banner>

        <S.ProceduresContainer>
          <S.ProcedureDisclaimer>
            Um sorriso saudável não apenas ilumina o seu rosto,
            mas também contribui para o seu bem-estar.
            Ofereço serviços especializados para a saúde dos
            seus dentes. Como dentista, minha missão é cuidar
            da sua saúde bucal, proporcionando resultados
            incríveis e um atendimento acolhedor.
          </S.ProcedureDisclaimer>
          <S.ProceduesTitle id="procedures">Procedimentos</S.ProceduesTitle>
          <S.List>
            {data.map(item => (
              <S.Item key={item.title}>
                <S.ItemBadge>
                  <S.BadgeImage src={item.icon} />
                </S.ItemBadge>
                <S.ItemTitle>{item.title}</S.ItemTitle>
                <S.ItemDescription>{item.description}</S.ItemDescription>
              </S.Item>
            ))}
          </S.List>

        </S.ProceduresContainer>
        <S.Section>
          <S.CTAContainer>
            <S.CTAText>
              Agende a sua consulta agora mesmo e comece a trilhar o caminho para um sorriso radiante e saudável
            </S.CTAText>
            <LazyScheduleAppointment />
          </S.CTAContainer>
        </S.Section>
        <S.Section>
          <S.AboutContainer>
            <S.Profile id="about" title="Foto do josias" />
            <S.AboutContent>
              <S.AboutContentTitle>
                Sobre mim
              </S.AboutContentTitle>
              <S.Separator />
              <S.AboutName>Dr. Josias Costa Neto</S.AboutName>
              <S.AboutBio>
                Atuo na Odontologia desde 2011, oferecendo tratamento de excelência naquilo que é importante para o paciente restabelecer sua saúde bucal e também todo cuidado para prevenção. Com experiência em cirurgias
                de implantes, enxertos ósseos, exodontias de sisos, próteses sobre implantes, ofereço um tratamento odontológico personalizado e acolhedor para você e sua família.
              </S.AboutBio>
            </S.AboutContent>
          </S.AboutContainer>
        </S.Section>
        <S.ContactContainer id="contact">
          <S.ContactInfoContainer>
            <S.AboutContentTitle>
              Contato
            </S.AboutContentTitle>
            <S.ContactSeparator />

            <S.AboutName>
              Dr. Josias Costa Neto
            </S.AboutName>
            <S.AboutBio>
              CRO-SP 136.595
            </S.AboutBio>

            <S.ContactInfo>
              <MdOutlinePhone color="#212121" />
              <S.ContactInfoLabel>
                Telefone
              </S.ContactInfoLabel>
            </S.ContactInfo>

            <S.ContactInfoValueButton onClick={() => copyToClipboard(phoneNumber)}>
              <S.ContactInfoValue>
                (11) 94931-3064
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>
            <S.ContactInfoValueButton onClick={() => copyToClipboard('11965301321')}>
              <S.ContactInfoValue>
                (11) 96530-1321
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>

            <S.ContactInfo className="above">
              <MdOutlineEmail color="#212121" />
              <S.ContactInfoLabel>
                E-mail
              </S.ContactInfoLabel>
            </S.ContactInfo>
            <S.ContactInfoValueButton onClick={() => copyToClipboard('drjosiascostaneto@gmail.com')}>
              <S.ContactInfoValue>
                drjosiascostaneto@gmail.com
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>

            <S.ContactInfo className="above">
              <MdOutlineLocationOn color="#212121" />
              <S.ContactInfoLabel>
                Endereço
              </S.ContactInfoLabel>
            </S.ContactInfo>
            <S.ContactInfoValueButton onClick={() => copyToClipboard(`Edifício São Paulo Office — 6° andar,
                sala 62. R.Frei Caneca, 33.
                São Paulo / SP. 01307 - 00.`)}>

              < S.ContactInfoValue className="address" >
                Edifício São Paulo Office — 6° andar,
                sala 62. R. Frei Caneca, 33.
                São Paulo/SP. 01307-00.
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>
          </S.ContactInfoContainer>
          <LazyMap />
        </S.ContactContainer>
      </S.Main >
      <S.Footer>
        <S.FooterContent>
          <S.FooterMainContent>
            <S.FooterLogo />
            <LazyScheduleAppointment onClick={() => redirectToUrl(whatsppLink)} className="outline" />
            <S.Ul>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Início
                </S.LiText>
              </S.Li>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Procedimentos
                </S.LiText>
              </S.Li>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Sobre mim
                </S.LiText>
              </S.Li>
            </S.Ul>
          </S.FooterMainContent>
          <S.BottomInfoContainer>
            <S.SocialMediaContainer>
              <a href="https://www.linkedin.com/in/josias-costa-neto-9b3655104/" target="_blank" style={{ cursor: 'pointer' }}>
                <FaLinkedin size={32} />
              </a>

              <a href="https://www.instagram.com/drjosiascostaneto/" target="_blank" style={{ cursor: 'pointer' }}>
                <BiLogoInstagramAlt size={32} />
              </a>
            </S.SocialMediaContainer>
            <S.FooterSeparator />
            <S.Copyright>
              ©{currentDate} Dr. Josias Costa Neto. Todos os direitos reservados.
            </S.Copyright>
          </S.BottomInfoContainer>
        </S.FooterContent>
        <ToastContainer
          style={{
            fontSize: '1.8rem'
          }}
          position="top-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </S.Footer>
    </S.Wrapper >
  )
}
