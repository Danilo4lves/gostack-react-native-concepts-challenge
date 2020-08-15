// Dependencies
import React from "react";

// Presentational
import RepositoryPresentational from "./presentational";

function Repository(props) {
  const { id, title, techs, likes } = props;

  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return React.createElement(RepositoryPresentational, {
    id,
    title,
    techs,
    likes,

    handleLikeRepository,
  });
}

export default RepositoryPresentational;
