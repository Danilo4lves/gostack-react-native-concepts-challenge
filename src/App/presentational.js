// Dependencies
import React from "react";
import { Text } from "react-native";

// Components
import { Repository } from "./components";

// Styled components
import { StatusBar, Container } from "./styles";

function AppPresentational(props) {
  const { repositories } = props;

  return (
    <>
      <StatusBar />

      <Container>
        {repositories?.map((repository) => {
          const { id, title, techs, likes } = repository;

          return (
            <Repository
              key={id}
              id={id}
              title={title}
              techs={techs}
              likes={likes}
            />
          );
        })}
      </Container>
    </>
  );
}

export default AppPresentational;
