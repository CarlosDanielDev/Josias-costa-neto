import styled from 'styled-components'

export const Wrapper = styled.div``;

export const Main = styled.main`
  background: ${({ theme }) => theme.clear.default};
  padding-bottom: 128px;
`;

export const Banner = styled.div`
  width: 100%;
  /* background: url('https://via.placeholder.com/1960x566'); */
  background: url('/public/assets/banner.webp');
  background-repeat: no-repeat;
  height: 488px;
  display: flex;
  background-position: center center;

  @media (min-width: 768px) {

    background-size: cover;
    height: 566px;
  }
`;

export const BannerContent = styled.div`
  max-width: 1770px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: center; 
  justify-content: center;
  margin-bottom: 64px;
`;

export const BannerTitle = styled.h1`
  width: 296px;
  font-size: 2.8rem;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.grayScale.white};

  @media (min-width: 768px) {
    font-size: 6.8rem;
    width: 915px;
  }
`;

export const BannerSubtitle = styled.h2`
  width: 296px;
  font-size: 1.4rem;
  text-align: center;
  color: ${({ theme }) => theme.grayScale.white};
  margin-top: 24px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    width: 100%;

    margin-bottom: 64px;
  }
`;


export const ProceduresContainer = styled.div`
  padding: 64px 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const ProcedureDisclaimer = styled.span`
  font-size: 1.4rem;
  text-align: center;
  font-stretch: normal;
  color: ${({ theme }) => theme.grayScale.gray700};

  @media (min-width: 768px) {
    font-size: 1.8rem;
    width: 770px; 
  }

`;


export const ProceduesTitle = styled.h2`
  font-size: 2.8rem;
  font-family: 'FoundersGrotesk-Medium';
  font-weight: 500;
  margin-top: 64px;
  margin-bottom: 32px;
`;


export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  flex-basis: 100%;

  @media (min-width: 768px) {
    width: 170px;
    flex-basis: 170px;
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const ItemTitle = styled.h3`
  font-size: 2rem;
  margin: 24px 0px;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.grayScale.gray900};
  height: auto;

`;

export const ItemBadge = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary.brand};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const ItemDescription = styled.p`
  widht: 170px;
  height: 100px;
  text-align: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.grayScale.gray700};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTAContainer = styled.div`
  background: url('/public/assets/images/banner-desktop-schedule.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 970px;
  height: 264px;
  margin-bottom: 64px;
  border-radius: 4px;

  @media (min-width: 768px) {
    background-position: center center;
  }
`;

export const CTAText = styled.p`
  display: block;
  font-size: 2.8rem; 
  text-align: center;
  width: 312px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.grayScale.white};

  @media (min-width: 768px) {
    width: 770px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  
  @media (min-width: 768px) {
    flex-direction: row;  
  }
`;

export const Profile = styled.div`
  /* background: url('https://via.placeholder.com/270x270'); */
  background: url('/public/assets/images/profile.webp');
  background-size: cover;
  background-position: top; /* Ajuste aqui */
  background-repeat: no-repeat;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin: 0;
    margin-right: 30px;
  }
`;

export const AboutContent = styled.div`
  width: 328px;
  height: 332px;
  padding: 30px;
  border-radius: 4px;
  background: ${({ theme }) => theme.grayScale.white};

  @media (min-width: 768px) {
    width: 470px;
    height: 270px;
  }

`;

export const AboutContentTitle = styled.span`
  display: block;
  font-family: 'FoundersGrotesk-Medium';
  font-size: 2.8rem;
  font-weight: 500;
  height: 2.8rem;
  color: ${({ theme }) => theme.grayScale.gray900};
`;

export const Separator = styled.div`
  width: 32px;
  height: 2px;
  margin-top: 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.grayScale.gray400};
`;

export const AboutName = styled(AboutContentTitle)`
  display: block;
  font-size: 2rem;
  height: 1.6rem;
  margin-bottom: 16px;
`;

export const AboutBio = styled.p`
  font-size: 1.4rem;
  height: 1.4rem;
  color: ${({ theme }) => theme.grayScale.gray700};
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row; 
    align-items: center;
    justify-content: center;
  }
`;

export const ContactInfoContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  padding: 30px 16px 29px 46px;
  height: 480px;
  background: ${({ theme }) => theme.clear.light};

  @media (min-width: 768px) {
    width: 400px;
    height: 480px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;


  &.above {
    margin-top: 31px;
  }

  svg {
    font-size: 1.6rem;
    margin-right: 7px;
  }
`;

export const ContactInfoLabel = styled(AboutName)`
  height: 1.6rem; 
  margin: 0px;
`;

export const ContactSeparator = styled(Separator)`
  margin-top: 10px;
`;

export const ContactInfoValue = styled(AboutBio)`
  margin: 0px;
  font-size: 1.6rem;
  line-heigth: 1.5;

  &.address {
    text-align: left;
    width: 268px;
    height: 70px;
  }
`;

export const ContactInfoValueButton = styled.button`
  margin-top: 16px;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.6rem;
    margin-left: 7px;
    color: ${({ theme }) => theme.primary.brand};
  }
`;


export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primary.brand};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 32px 127px;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 970px;
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    width: 970px;
  }

`;

export const FooterLogo = styled.div`
  background: url('/assets/footer-logo/logo.webp');
  margin-bottom: 64px;
  height: 64px;
  width: 204px;
`;

export const Ul = styled.ul`
  margin-top: 64px;
  margin-bottom: 68px;
  list-style: none;


  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const ArrowRight = styled.div`
  display: block;
  width: 0; 
  height: 0; 
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;

  margin-right: 8px;
  border-left: 4px solid ${({ theme }) => theme.primary.brandLight};
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;


export const LiText = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
  height: 1.8rem;
  display: block;
  color: ${({ theme }) => theme.grayScale.white};
`;


export const BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 74px;
  }
`;

export const SocialMediaContainer = styled.div` 
  margin-bottom: 16px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.primary.brandLight};
  }
`;

export const FooterSeparator = styled.div`
  margin-bottom: 16px;
  width: 128px;
  height: 1px;
  margin: 16px 77px;
  background-color: ${({ theme }) => theme.primary.brandLight};
`;

export const Copyright = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.grayScale.white};
`;

