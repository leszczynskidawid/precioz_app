import {apiClient} from 'helpers/apiClient'
import {useApiClientExceptionHandler} from 'hooks/useApiClientExceptionHandler'

export const useRequest = () => {
    const { handleApiClientException } = useApiClientExceptionHandler();

    const getRequest = async (path) => {     
        try {
            const response = await apiClient.get('', {timeout: 10000});
    
        if(response) {
            return response.data;
        } 
        } catch(e) {
console.log(e)
           return handleApiClientException(e)
        }
    
    }
      // Create one generic function with all methods


// const postRequest = async (path, body) => {     
// try {
//     const response = await apiClient.post('', body, {timeout: 10000,});

// if(response) {
//     return response.data;
// } else {
//     handleApiClientException(response )
// }
// } catch(e) {
//    handleApiClientException(e)
// }

// }
    return {getRequest}
}

