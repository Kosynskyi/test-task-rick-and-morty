import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[7]}px;
  border-radius: ${props => props.theme.radii.secondary};
  box-shadow: ${props => props.theme.boxShadow.primary};
  overflow: hidden;
  max-width: 240px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-last-child(-n + 4) {
    margin-bottom: ${props => props.theme.space[1]}px;
  }
`;

export const CharacterName = styled.p`
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.primary};
  letter-spacing: ${props => props.theme.letterSpacing.primary};
`;

export const Species = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.primary};
  letter-spacing: ${props => props.theme.letterSpacing.secondary};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
