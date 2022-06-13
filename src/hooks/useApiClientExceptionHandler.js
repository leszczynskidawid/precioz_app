import { useAuth } from "context/getAuth";

export const useApiClientExceptionHandler = () => {
  const { toggleAlert } = useAuth();
  const handleApiClientException = e => {
    const status = e.response.status;
    let errorMessage = "";
    switch (status) {
      case 404:
        errorMessage = e.response.data;
        toggleAlert(errorMessage);
        break;
      default:
        toggleAlert(errorMessage);
    }
  };
  return { handleApiClientException };
};
