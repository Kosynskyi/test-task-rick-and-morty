import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    padding-left: ${props => props.theme.space[7]}px;
    padding-right: ${props => props.theme.space[7]}px;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: ${props => props.theme.space[0]}px;
    margin-right: ${props => props.theme.space[0]}px;
    padding-bottom: 188px;
  }
`;
