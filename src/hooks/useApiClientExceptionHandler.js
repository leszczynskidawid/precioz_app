import { useAuth } from "context/getAuth";

export const useApiClientExceptionHandler = () => {
  const toggleAlert = useAuth();
  const handleApiClientException = (e) => {
    console.log(e);
    const status = e.response.status;
    let errorMessage = "";

    switch (status) {
      case 404:
        errorMessage = e.message;

        toggleAlert(errorMessage);
        break;

      case 400:
        toggleAlert(errorMessage);
        break;
      default:
        toggleAlert(errorMessage);
    }
  };
  return { handleApiClientException };
};
