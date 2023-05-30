
import { postRequest, putRequest, deleteRequest } from './apiUtils';

// Ajouter une voiture
export async function addCar(carData) {
    try {
      const response = await postRequest('cars', carData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de l\'ajout de la voiture : ' + error.message);
    }
  }
  
  // Modifier une voiture
  export async function updateCar(carId, carData) {
    try {
      const response = await putRequest(`cars/${carId}`, carData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la modification de la voiture : ' + error.message);
    }
  }
  
  // Supprimer une voiture
 export async function deleteCar(carId) {
    try {
      const response = await deleteRequest(`cars/${carId}`);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de la voiture : ' + error.message);
    }
  }