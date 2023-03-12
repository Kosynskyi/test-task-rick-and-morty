import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const CharacterPhoto = styled.img`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[9]}px;
    border-radius: ${props => props.theme.radii.round};
    border: ${props => props.theme.borders.large};
    border-color: ${props => props.theme.colors.borderImageDetails};
    margin-left: auto;
    margin-right: auto;
    width: 150px;
  }
  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[5]}px;
    width: 300px;
  }
`;

export const CharacterName = styled.h2`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[9]}px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.secondary};
    color: ${props => props.theme.colors.title};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[13]}px;
    font-size: ${props => props.theme.fontSizes.xxxl};
    font-weight: ${props => props.theme.fontWeights.normal};
    width: 500px;
  }
`;

export const CharacterInfoTitle = styled.h3`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[5]}px;
    text-align: left;
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: ${props => props.theme.lineHeights.additional};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    color: ${props => props.theme.colors.gray};
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[13]}px;
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    text-align: center;
  }
`;

export const DetailList = styled.ul`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 14px;
    padding-right: 8px;
    list-style: none;
  }
`;

export const DetailElement = styled.li`
  @media ${breakpoints.mobile} {
    padding-top: ${props => props.theme.space[4]}px;
    padding-bottom: ${props => props.theme.space[4]}px;
    border-bottom: ${props => props.theme.borders.normal};
    border-color: rgba(0, 0, 0, 0.25);

    width: 312px;
  }

  @media ${breakpoints.desktop} {
    width: 413px;
    padding-left: ${props => props.theme.space[1]}px;
    padding-right: ${props => props.theme.space[1]}px;
    padding-top: 9px;
    padding-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const DescriptionTitle = styled.h4`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[1]}px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    color: ${props => props.theme.colors.title};
  }

  @media ${breakpoints.desktop} {
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    text-align: left;
  }
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

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    margin-left: auto;
    margin-right: auto;
    width: 320px;
  }

  @media ${breakpoints.desktop} {
    width: 500px;
  }
`;
