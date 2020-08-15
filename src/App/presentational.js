// Dependencies
import React from "react";

// Components
import { Repository } from "./components";

// Styled components
import { StatusBar, SafeAreaView, List } from "./styles";

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

      <SafeAreaView>
        <List
          data={repositories}
          keyExtractor={(repository) => repository?.id}
          renderItem={renderRepository}
        />
      </SafeAreaView>
    </>
  );
}

export default AppPresentational;
