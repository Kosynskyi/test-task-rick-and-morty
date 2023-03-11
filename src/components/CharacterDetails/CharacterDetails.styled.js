import styled from 'styled-components';

export const CharacterPhoto = styled.img`
  border-radius: ${props => props.theme.radii.round};
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const CharacterName = styled.h2`
  margin-bottom: ${props => props.theme.space[13]}px;
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.secondary};
  color: ${props => props.theme.colors.title};
  text-align: center;
`;

export const CharacterInfoTitle = styled.h3`
  margin-bottom: ${props => props.theme.space[13]}px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.additional};
  letter-spacing: ${props => props.theme.letterSpacing.primary};
  color: ${props => props.theme.colors.gray};
  text-align: center;
`;

export const DescriptionTitle = styled.h4`
  margin-bottom: ${props => props.theme.space[1]}px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.primary};
  letter-spacing: ${props => props.theme.letterSpacing.primary};
  color: ${props => props.theme.colors.title};
  text-align: left;
`;

export const CharacterInfo = styled.p`
  margin-bottom: ${props => props.theme.space[1]}px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.extra};
  letter-spacing: ${props => props.theme.letterSpacing.secondary};
  color: ${props => props.theme.colors.subtext};
  text-align: left;
`;

export const InfoElementWrapper = styled.div`
  padding-top: 9px;
  padding-bottom: ${props => props.theme.space[4]}px;
  border-bottom: ${props => props.theme.borders.normal};
  border-color: rgba(0, 0, 0, 0.25);
`;
