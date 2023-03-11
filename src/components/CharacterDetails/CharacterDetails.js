import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterInfo } from 'services/API/API';
import { placeholderMissingInfo } from 'helpers/placeholderMissingInfo';
import {
  Wrapper,
  CharacterPhoto,
  CharacterName,
  CharacterInfoTitle,
  DescriptionTitle,
  CharacterInfo,
  InfoElementWrapper,
  Thumb,
} from './CharacterDetails.styled';

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log('in in useEffect', id);
    getCharacterInfo(id).then(setCharacter);
  }, [id]);

  if (!character) return;

  console.log('character', character);

  const { image, name, gender, status, species, origin, type } = character;

  return (
    <Wrapper>
      <CharacterPhoto src={image} alt={name} width="300px" />
      <CharacterName>{placeholderMissingInfo(name)}</CharacterName>
      <CharacterInfoTitle>Informations</CharacterInfoTitle>

      <Thumb>
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
      </Thumb>
    </Wrapper>
  );
};

export default CharacterDetails;
