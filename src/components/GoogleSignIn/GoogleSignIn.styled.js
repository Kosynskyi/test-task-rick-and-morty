import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';
import { ReactComponent as Icon } from 'assets/google.svg';

const GoogleIconRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SignInButton = styled.button`
  @media ${breakpoints.mobile} {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: ${props => props.theme.space[4]}px;
    padding-left: ${props => props.theme.space[9]}px;
    padding-right: ${props => props.theme.space[9]}px;
    font-size: ${props => props.theme.fontSizes.xxl};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.primary};
    color: ${props => props.theme.colors.buttonSignIn};
    border: ${props => props.theme.borders.none};
    border-radius: ${props => props.theme.radii.effect};
    transition: 500ms;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 176, 200);
      color: ${props => props.theme.colors.white};
      box-shadow: 0 0 50px rgba(126, 253, 100, 0.5);
      -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
    }

    &::before {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      border-right: 2px solid rgb(0, 63, 72);
      border-bottom: 2px solid rgb(0, 63, 72);
      right: 0;
      bottom: 0;
      border-radius: 0 0 25px 0;
      transition: 500ms;
    }

    &::after {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      border-left: 2px solid rgb(0, 63, 72);
      border-top: 2px solid rgb(0, 63, 72);
      top: 0;
      left: 0;
      border-radius: 25px 0 0;
      transition: 500ms;
    }

    &:hover::after,
    &:hover::before {
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: ${props => props.theme.radii.effect};
    }

    &:hover > svg {
      animation: 1500ms ${GoogleIconRotate} ease-in;
    }
  }

  @media ${breakpoints.desktop} {
    padding: ${props => props.theme.space[4]}px;
    padding-left: ${props => props.theme.space[7]}px;
    padding-right: ${props => props.theme.space[7]}px;
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const GoogleIcon = styled(Icon)`
  @media ${breakpoints.mobile} {
    margin-left: ${props => props.theme.space[4]}px;
    width: 36px;
    height: 36px;
  }

  @media ${breakpoints.desktop} {
    width: 48px;
    height: 48px;
  }
`;
