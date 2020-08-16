// Module
import { LikeApi } from "../../modules";

function LikeService() {
  let instance = null;

  function init() {
    async function increase(id) {
      const apiResponse = await LikeApi?.increase(id);

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

export default LikeService();
