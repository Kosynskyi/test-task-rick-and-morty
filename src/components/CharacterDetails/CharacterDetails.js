import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterInfoQuery } from 'redux/characterSlice';
import Skeleton from 'components/Skeleton';
import Error from 'components/Error';
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

  const { data, isLoading, isError } = useGetCharacterInfoQuery(id);

  useEffect(() => {
    setCharacter(data);
  }, [data]);

  return (
    <>
      {isError && <Error />}
      {isLoading ? (
        <Skeleton />
      ) : (
        <Wrapper>
          <CharacterPhoto
            src={character?.image}
            alt={character?.name}
            width="300px"
          />
          <CharacterName>{character?.name}</CharacterName>
          <CharacterInfoTitle>Informations</CharacterInfoTitle>

          <DetailList>
            <DetailElement>
              <DescriptionTitle>Gender</DescriptionTitle>
              <CharacterInfo>
                {placeholderMissingInfo(character?.gender)}
              </CharacterInfo>
            </DetailElement>
            <DetailElement>
              <DescriptionTitle>Status</DescriptionTitle>
              <CharacterInfo>
                {placeholderMissingInfo(character?.status)}
              </CharacterInfo>
            </DetailElement>
            <DetailElement>
              <DescriptionTitle>Specie</DescriptionTitle>
              <CharacterInfo>
                {placeholderMissingInfo(character?.species)}
              </CharacterInfo>
            </DetailElement>
            <DetailElement>
              <DescriptionTitle>Origin</DescriptionTitle>
              <CharacterInfo>
                {placeholderMissingInfo(character?.origin.name)}
              </CharacterInfo>
            </DetailElement>
            <DetailElement>
              <DescriptionTitle>Type</DescriptionTitle>
              <CharacterInfo>
                {placeholderMissingInfo(character?.type)}
              </CharacterInfo>
            </DetailElement>
          </DetailList>
        </Wrapper>
      )}
    </>
  );
};

export default CharacterDetails;
