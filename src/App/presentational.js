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
  const { handleLikeRepository } = props;

  return (
    <>
      <StatusBar />
      <Container>
        <RepositoryContainer>
          <RepositoryName>Repository 1</RepositoryName>

          <TechsContainer>
            <TechBadge>ReactJS</TechBadge>
            <TechBadge>Node.js</TechBadge>
          </TechsContainer>

          <LikesContainer>
            <HowManyLikesText
              // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
              testID={`repository-likes-1`}
            >
              3 curtidas
            </HowManyLikesText>
          </LikesContainer>

          <Button
            onPress={() => handleLikeRepository(1)}
            // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
            testID={`like-button-1`}
          >
            <ButtonText>Curtir</ButtonText>
          </Button>
        </RepositoryContainer>
      </Container>
    </>
  );
}

export default AppPresentational;
