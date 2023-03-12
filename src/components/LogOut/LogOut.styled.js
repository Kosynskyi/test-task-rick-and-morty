import styled from 'styled-components';
import { MdLogout } from 'react-icons/md';
import { breakpoints } from 'services/mixins/mixins';

export const LogOutButton = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  padding: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogOutIcon = styled(MdLogout)`
  @media ${breakpoints.mobile} {
    color: ${props => props.theme.colors.buttonSignIn};
    width: 36px;
    height: 36px;
  }

  @media ${breakpoints.desktop} {
    width: 44px;
    height: 44px;
  }
`;
