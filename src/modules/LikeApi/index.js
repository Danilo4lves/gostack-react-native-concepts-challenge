// Api
import { api } from "../../config";

function LikeApi() {
  let instance = null;

  function init() {
    async function increase(id) {
      const endpoint = `/repositories/${id}/like`;

      const apiResponse = await api.post(endpoint);

      return apiResponse;
    }

    return {
      increase,
    };
  }

  if (!instance || Object.entries(instance)?.length === 0) {
    instance = init();
  }

  return instance;
}

export default LikeApi();
