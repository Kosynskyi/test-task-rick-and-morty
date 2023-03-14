import logo_desktop_1x from 'assets/logo_desktop_1x.png';
import logo_desktop_2x from 'assets/logo_desktop_2x.png';
import logo_mobile_1x from 'assets/logo_mobile_1x.png';
import logo_mobile_2x from 'assets/logo_mobile_2x.png';

import { Title, Wrapper } from './Logo.styled';

const Logo = () => {
  return (
    <Wrapper>
      <Title>Rick and Morty</Title>

      <picture>
        <source
          srcSet={`${logo_desktop_1x} 1x, ${logo_desktop_2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logo_mobile_1x} 1x, ${logo_mobile_2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={logo_desktop_1x} alt="Rick and Morty" width="312px" />
      </picture>
    </Wrapper>
  );
};

export default Logo;
