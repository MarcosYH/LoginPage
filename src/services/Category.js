 
 import { postRequest, putRequest, deleteRequest } from './apiUtils';
 // Ajouter une catégorie
export async function addCategory(categoryData) {
    try {
  
      const response = await postRequest('categories', categoryData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de l\'ajout de la catégorie : ' + error.message);
    }
  }
  
  // Modifier une catégorie
  
  export async function updateCategory(categoryId, categoryData) {
    try {
      const response = await putRequest(`categories/${categoryId}`, categoryData);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la modification de la catégorie : ' + error.message);
    }
  }
  
  // Supprimer une catégorie
 export async function deleteCategory(categoryId) {
    try {
      const response = await deleteRequest(`categories/${categoryId}`);
      return response;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de la catégorie : ' + error.message);
    }
  }
  