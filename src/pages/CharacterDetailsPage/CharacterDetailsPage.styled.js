import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: ${props => props.theme.space[1]}px;
    justify-content: center;
    padding: ${props => props.theme.space[7]}px;
    padding-bottom: 85px;
  }

  @media ${breakpoints.desktop} {
    width: 1440px;
    padding: 23px 50px 142px;
  }
`;
