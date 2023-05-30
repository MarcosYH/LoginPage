import { postRequest, putRequest, deleteRequest } from './apiUtils';
// Ajouter une marque

export async function addBrand(brandData) {
    try {
      const response = await postRequest('brands', brandData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de l\'ajout de la marque : ' + error.message);
    }
  }
  
  // Modifier une marque

export async function updateBrand(brandId, brandData) {
    try {
      const response = await putRequest(`brands/${brandId}`, brandData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la modification de la marque : ' + error.message);
    }
  }
  
  // Supprimer une marque
 
 export async function deleteBrand(brandId) {
    try {
      // eslint-disable-next-line no-undef
      const response = await deleteRequest(`brands/${brandId}`);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de la marque : ' + error.message);
    }
  }