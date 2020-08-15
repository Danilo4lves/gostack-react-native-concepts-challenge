// Dependencies
import React from "react";

// Styled components
import {
  StatusBar,
  Container,
  RepositoryContainer,
  RepositoryName,
  TechsContainer,
  TechBadge,
  LikesContainer,
  HowManyLikesText,
  Button,
  ButtonText,
} from "./styles";

function AppPresentational(props) {
  const {
    repositories,

    handleLikeRepository,
  } = props;

  return (
    <>
      <StatusBar />

      <Container>
        {repositories?.map((repository) => {
          const { id, title, techs, likes } = repository;

          return (
            <RepositoryContainer key={id}>
              <RepositoryName>{title}</RepositoryName>

              <TechsContainer>
                {techs?.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </TechsContainer>

              <LikesContainer>
                <HowManyLikesText testID={`repository-likes-${id}`}>
                  {likes} curtidas
                </HowManyLikesText>
              </LikesContainer>

              <Button
                onPress={() => handleLikeRepository(id)}
                testID={`like-button-${id}`}
              >
                <ButtonText>Curtir</ButtonText>
              </Button>
            </RepositoryContainer>
          );
        })}
      </Container>
    </>
  );
}

export default AppPresentational;
