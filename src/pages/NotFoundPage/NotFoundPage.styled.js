import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackHome = styled(Link)`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  /* color: ${p => p.theme.colors.white}; */
  & > svg {
    position: relative;
    top: 3px;
    width: 52px;
    height: 52px;
    transition: 500ms;
  }
  &:hover > svg {
    transform: scale(1.05);
    /* color: ${p => p.theme.colors.red}; */
  }
`;

export const TextInfo = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
`;
