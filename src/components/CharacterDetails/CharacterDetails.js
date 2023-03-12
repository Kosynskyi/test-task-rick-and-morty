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
  DetailElement,
  DetailList,
} from './CharacterDetails.styled';

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCharacterInfo(id).then(setCharacter);
  }, [id]);

  if (!character) return;

  const { image, name, gender, status, species, origin, type } = character;

  return (
    <Wrapper>
      <CharacterPhoto src={image} alt={name} width="300px" />
      <CharacterName>{placeholderMissingInfo(name)}</CharacterName>
      <CharacterInfoTitle>Informations</CharacterInfoTitle>

      <DetailList>
        <DetailElement>
          <DescriptionTitle>Gender</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(gender)}</CharacterInfo>
        </DetailElement>
        <DetailElement>
          <DescriptionTitle>Status</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(status)}</CharacterInfo>
        </DetailElement>
        <DetailElement>
          <DescriptionTitle>Specie</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(species)}</CharacterInfo>
        </DetailElement>
        <DetailElement>
          <DescriptionTitle>Origin</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(origin.name)}</CharacterInfo>
        </DetailElement>
        <DetailElement>
          <DescriptionTitle>Type</DescriptionTitle>
          <CharacterInfo>{placeholderMissingInfo(type)}</CharacterInfo>
        </DetailElement>
      </DetailList>
    </Wrapper>
  );
};

export default CharacterDetails;
