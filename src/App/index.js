// Dependencies
import React from "react";

// Presentational
import AppPresentational from "./presentational";

// Services
import { RepositoriesService, LikeService } from "../services";

function App() {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    async function fetchRepositories() {
      const apiResponse = await RepositoriesService?.getAll();

      if (apiResponse?.status === 200) {
        const { data = [] } = apiResponse;

        setRepositories(data);
      } else {
        console.log("Error trying to obtain data...");
      }
    }

    fetchRepositories();
  }, []);

  const handleLikeRepository = React.useCallback(
    async (id) => {
      const apiResponse = await LikeService?.increase(id);

      if (apiResponse?.status === 200) {
        const { data = {} } = apiResponse;

        const newRepositories = repositories?.map((repository) => {
          if (repository?.id === id) {
            return data;
          }

          return repository;
        });

        setRepositories(newRepositories);
      } else {
        console.log("Error trying to obtain data...");
      }
    },
    [repositories]
  );

  return React.createElement(AppPresentational, {
    repositories,

    handleLikeRepository,
  });
}

export default App;
