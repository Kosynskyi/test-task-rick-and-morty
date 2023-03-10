import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;
  padding: ${props => props.theme.space[5]}px;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.primaryBorder};
  border-radius: ${props => props.theme.radii.primary};
  width: 100%;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: ${props => props.theme.space[3]}px;
  width: 18px;
  height: 18px;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.primaryBorder};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.primary};
  border: ${props => props.theme.borders.none};
  width: 100%;

  &:focus {
    outline: transparent;
  }
`;
