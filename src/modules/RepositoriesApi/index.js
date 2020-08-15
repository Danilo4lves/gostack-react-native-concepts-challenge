// Api
import { api } from "../../config";

function RepositoriesApi() {
  let instance = null;

  function init() {
    const MAIN_ENDPOINT = "/repositories";

    async function getAll() {
      const apiResponse = await api.get(MAIN_ENDPOINT);

      return apiResponse;
    }

    return {
      MAIN_ENDPOINT,
      getAll,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default RepositoriesApi();
