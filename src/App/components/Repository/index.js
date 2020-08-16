// Dependencies
import React from "react";

// Presentational
import RepositoryPresentational from "./presentational";

function Repository(props) {
  const {
    id,
    title,
    techs,
    likes,
    handleLikeRepository: handleLikeRepositoryFromProps,
  } = props;

  const handleLikeRepository = React.useCallback(() => {
    if (handleLikeRepositoryFromProps) {
      handleLikeRepositoryFromProps(id);
    }
  }, [handleLikeRepositoryFromProps]);

  return React.createElement(RepositoryPresentational, {
    id,
    title,
    techs,
    likes,

    handleLikeRepository,
  });
}

export default Repository;
