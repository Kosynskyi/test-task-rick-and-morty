import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 92px;
    padding-bottom: 223px;
    width: 100%;
  }

  @media ${breakpoints.desktop} {
    width: 1020px;
  }
`;
