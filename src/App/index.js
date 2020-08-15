// Dependencies
import React from "react";

// Presentational
import AppPresentational from "./presentational";

// Services
import { RepositoriesService } from "../services";

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

  return React.createElement(AppPresentational, {
    repositories,
  });
}

export default App;
