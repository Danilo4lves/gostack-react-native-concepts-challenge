// Dependencies
import React from "react";

// Styled components
import {
  Container,
  Title,
  TechsContainer,
  TechBadge,
  LikesContainer,
  HowManyLikesText,
  Button,
  ButtonText,
} from "./styles";

function RepositoryPresentational(props) {
  const {
    id,
    title,
    techs,
    likes,

    handleLikeRepository,
  } = props;

  return (
    <Container key={id}>
      <Title>{title}</Title>

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
    </Container>
  );
}

export default RepositoryPresentational;
