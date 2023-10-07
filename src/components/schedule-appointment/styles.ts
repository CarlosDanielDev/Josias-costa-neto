import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary.brand};
  color: ${({ theme }) => theme.grayScale.white};
  font-size: 1.8rem;
  cursor: pointer;
  width: 296px;
  height: 50px;
  birder-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  &.outline {
    background: transparent;
     border: solid 2px ${({ theme }) => theme.secondary.brand};
  }

  @media (min-width: 768px) {
    grid-area: button;
  }
`;

export const ButtonText = styled.span`
  height: 1.8rem;
`;
