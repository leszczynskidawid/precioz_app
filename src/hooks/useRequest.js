import { ApiClientMethodTypes } from "constants/ApiClientMehodTypes";
import { apiClient } from "helpers/apiClient";
import { useApiClientExceptionHandler } from "hooks/useApiClientExceptionHandler";

export const useRequest = () => {
  const { handleApiClientException } =
    useApiClientExceptionHandler();

  const callApiRequest = async (
    method,
    path,
    config,
    body,
  ) => {
    try {
      let response = null;
      if (
        method === ApiClientMethodTypes.get ||
        method === ApiClientMethodTypes.delete
      ) {
        response = await apiClient[method](
          path,
          config !== "undefind" ? config : {},
        );
      } else if (
        method === ApiClientMethodTypes.post ||
        method === ApiClientMethodTypes.put ||
        method === ApiClientMethodTypes.patch
      ) {
        response = await apiClient[method](
          path,

          body,
          config !== "undefind" ? config : {},
        );
      }
      if (response) {
        return response.data;
      }
    } catch (error) {
      return handleApiClientException(error);
    }
  };

  return { callApiRequest };
};
