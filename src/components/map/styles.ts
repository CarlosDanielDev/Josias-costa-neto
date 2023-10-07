import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;

  iframe {
    height: 452px;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 570px;
    height: 480px;

    iframe {
      height: 480px;
    }
  }

`;
