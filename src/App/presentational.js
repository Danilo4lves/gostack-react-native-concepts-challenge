// Dependencies
import React from "react";
import { FlatList } from "react-native";

// Components
import { Repository } from "./components";

// Styled components
import { StatusBar, Container } from "./styles";

function AppPresentational(props) {
  const { repositories } = props;

  const renderRepository = React.useCallback((properties) => {
    const { item = {} } = properties;
    const { id, title, techs, likes } = item;

    return (
      <Repository key={id} id={id} title={title} techs={techs} likes={likes} />
    );
  }, []);

  return (
    <>
      <StatusBar />

      <Container>
        <FlatList
          data={repositories}
          keyExtractor={(repository) => repository?.id}
          renderItem={renderRepository}
        />
      </Container>
    </>
  );
}

export default AppPresentational;
