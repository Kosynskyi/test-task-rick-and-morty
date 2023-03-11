import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[9]}px;
    width: 312px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[5]}px;
    width: 600px;
  }
`;
