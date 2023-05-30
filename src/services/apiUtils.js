 
import axios from 'axios';

 // URL de base de votre API
const baseURL = 'https://lien-de-l_api';

// Fonction générique pour effectuer une requête POST

export async function postRequest(endpoint, data) {
  try {
    const response = await axios.post(baseURL + endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

// Fonction générique pour effectuer une requête PUT

export async function putRequest(endpoint, data) {
  try {
    const response = await axios.put(baseURL + endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

// Fonction générique pour effectuer une requête DELETE

export async function deleteRequest(endpoint){
  try {
    const response = await axios.delete(baseURL + endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export default axios;