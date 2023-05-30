import { postRequest, putRequest, deleteRequest } from './apiUtils';
// Ajouter un modèle

export async function addModel(modelData) {
    try {
      const response = await postRequest('models', modelData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de l\'ajout du modèle : ' + error.message);
    }
  }
  
  // Modifier un modèle
  
  export async function updateModel(modelId, modelData) {
    try {
      const response = await putRequest(`models/${modelId}`, modelData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la modification du modèle : ' + error.message);
    }
  }
  
  // Supprimer un modèle
  export async function deleteModel(modelId) {
    try {
      const response = await deleteRequest(`models/${modelId}`);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la suppression du modèle : ' + error.message);
    }
  }
  