import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'services/mixins/mixins';

export const StyledList = styled.ul`
  @media ${breakpoints.mobile} {
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-row-gap: ${props => props.theme.space[9]}px;
    width: 312px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: ${props => props.theme.space[6]}px;
    grid-row-gap: ${props => props.theme.space[7]}px;
    width: 100%;
  }
`;

export const StyledItem = styled.li`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    border-radius: ${props => props.theme.radii.secondary};
    box-shadow: ${props => props.theme.boxShadow.primary};
    overflow: hidden;
    width: 312px;
    cursor: pointer;
    transition: 500ms;
  }

  @media ${breakpoints.desktop} {
    width: 240px;

    &:hover {
      transform: scale(1.05);
    }
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
