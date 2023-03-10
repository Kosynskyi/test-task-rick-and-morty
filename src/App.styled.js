import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    padding-left: ${props => props.theme.space[0]}px;
    padding-right: ${props => props.theme.space[0]}px;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
