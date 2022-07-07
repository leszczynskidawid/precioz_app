import { ApiClientMethodTypes } from "constants/ApiClientMehodTypes";
import { useRequest } from "hooks/useRequest";

export const createOrder = (body) => {
  const { callApiRequest } = useRequest();
  (async function createOrder() {
    const res = await callApiRequest(
      ApiClientMethodTypes.post,
      "/orders",
      {},
      body,
    );
    if (res) {
      console.log(res);
    }
  })();
};
