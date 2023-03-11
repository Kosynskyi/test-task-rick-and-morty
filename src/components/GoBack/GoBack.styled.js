import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'services/mixins/mixins';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
`;

export const GoBackText = styled.span`
  margin-left: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.secondary};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.karla};
`;

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    margin-bottom: 77px;
  }
  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[9]}px;
  }
`;
