import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box } from 'utils/Box';
import { getCharacterInfo } from 'services/API/API';
import { placeholderMissingInfo } from 'helpers/placeholderMissingInfo';
import { ReactComponent as GoBackIcon } from 'assets/arrow_back.svg';
import {
  GoBackLink,
  GoBackText,
  // StyledGoBackIcon,
  CharacterPhoto,
  CharacterName,
  CharacterInfoTitle,
  DescriptionTitle,
  CharacterInfo,
  InfoElementWrapper,
} from './CharacterDetails.styled';

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(id);

  useEffect(() => {
    console.log('in in useEffect', id);
    getCharacterInfo(id).then(setCharacter);
  }, [id]);

  if (!character) return;

  console.log('character', character);

  const { image, name, gender, status, species, origin, type } = character;

  return (
    <>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <GoBackLink to={backLinkHref}>
          <GoBackIcon /> <GoBackText>go back</GoBackText>
        </GoBackLink>
      </Box>
      <Box pt="31px" width="413px">
        <CharacterPhoto src={image} alt={name} width="300px" />
        <CharacterName>{placeholderMissingInfo(name)}</CharacterName>
        <CharacterInfoTitle>Informations</CharacterInfoTitle>
        <InfoElementWrapper>
          <DescriptionTitle>Gender</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(gender)}</CharacterInfo>
        </InfoElementWrapper>
        <InfoElementWrapper>
          <DescriptionTitle>Status</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(status)}</CharacterInfo>
        </InfoElementWrapper>
        <InfoElementWrapper>
          <DescriptionTitle>Specie</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(species)}</CharacterInfo>
        </InfoElementWrapper>
        <InfoElementWrapper>
          <DescriptionTitle>Origin</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(origin.name)}</CharacterInfo>
        </InfoElementWrapper>
        <InfoElementWrapper>
          <DescriptionTitle>Type</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(type)}</CharacterInfo>
        </InfoElementWrapper>
      </Box>
    </>
  );
};

export default CharacterDetails;
