import { useState } from 'react';
import marque from '../assets/marque.png';
function Form() {
  const [brandForm1, setBrandForm1] = useState('');
  const [modelForm1, setModelForm1] = useState('');
  const [categoryForm1, setCategoryForm1] = useState('');
  const [itemForm1, setItemForm1] = useState([]);
  const [successMessageForm1, setSuccessMessageForm1] = useState('');
  const [errorMessageForm1, setErrorMessageForm1] = useState('');

  const [brandForm2, setBrandForm2] = useState('');
  const [modelForm2, setModelForm2] = useState('');
  const [categoryForm2, setCategoryForm2] = useState('');
  const [plateForm2, setPlateForm2] = useState('');
  const [yearForm2, setYearForm2] = useState('');
  const [dateForm2, setDateForm2] = useState('');
  const [itemForm2, setItemForm2] = useState([]);
  const [errorMessageForm2, setErrorMessageForm2] = useState('');

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleAddItemForm1 = () => {
    if (brandForm1 === '' || modelForm1 === '' || categoryForm1 === '') {
      setErrorMessageForm1('Veuillez remplir tous les champs.');
      return;
    }

    const newItem = {
      brand: brandForm1,
      model: modelForm1,
      category: categoryForm1,
    };

    setItemForm1([...itemForm1, newItem]);
    setBrandForm1('');
    setModelForm1('');
    setCategoryForm1('');
    setSuccessMessageForm1('Les données ont été ajoutées avec succès.');
    setErrorMessageForm1('');
  };

  const handleDeleteItemForm1 = (index) => {
    const updatedItems = itemForm1.filter((_, i) => i !== index);
    setItemForm1(updatedItems);
  };

  const handleAddItemForm2 = () => {
    if (
      brandForm2 === '' ||
      modelForm2 === '' ||
      categoryForm2 === '' ||
      plateForm2 === '' ||
      yearForm2 === '' ||
      dateForm2 === ''
    ) {
      setErrorMessageForm2('Veuillez remplir tous les champs.');
      return;
    }

    const newItem = {
      brand: brandForm2,
      model: modelForm2,
      category: categoryForm2,
      plate: plateForm2,
      year: yearForm2,
      date: dateForm2,
    };

    setItemForm2([...itemForm2, newItem]);
    setBrandForm2('');
    setModelForm2('');
    setCategoryForm2('');
    setPlateForm2('');
    setYearForm2('');
    setDateForm2('');
    setErrorMessageForm2('');
  };

  const handleDeleteItemForm2 = (index) => {
    const updatedItems = itemForm2.filter((_, i) => i !== index);
    setItemForm2(updatedItems);
  };

  const handleEditItemForm1 = (index) => {
    const selectedItem = itemForm1[index];
    setBrandForm1(selectedItem.brand);
    setModelForm1(selectedItem.model);
    setCategoryForm1(selectedItem.category);
    handleDeleteItemForm1(index);
  };

  const handleEditItemForm2 = (index) => {
    const selectedItem = itemForm2[index];
    setBrandForm2(selectedItem.brand);
    setModelForm2(selectedItem.model);
    setCategoryForm2(selectedItem.category);
    setPlateForm2(selectedItem.plate);
    setYearForm2(selectedItem.year);
    setDateForm2(selectedItem.date);
    handleDeleteItemForm2(index);
  };

  const validateYearInput = (event) => {
    const yearInput = event.target.value;
    const isValidYear =
      /^\d{4}$/.test(yearInput) && yearInput >= 1995 && yearInput <= 2023;
    if (isValidYear || yearInput === '') {
      setYearForm2(yearInput);
      setErrorMessageForm2('');
    } else {
      setErrorMessageForm2('Veuillez entrer une année valide (entre 1995 et 2023).');
    }
  };

  return (
    <>
      <div className=" py-5">
        <img
          src={marque}
          alt="fond1"
          className="w-auto h-auto mx-auto flex ml-auto"
        />
      </div>


      <div className="flex flex-col justify-center items-center py-10">

        <div className="bg-white p-6 shadow-lg rounded-lg mb-8 ">
          <h2 className="text-2xl text-center font-bold mb-4">Ajouter vos Marques, Models et Catégories de voiture</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="brand-input1" className="mb-2">
                Marque
              </label>
              <input
                type="text"
                id="brand-input1"
                value={brandForm1}
                onChange={(event) => handleInputChange(event, setBrandForm1)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Ferrari"
             />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="model-input1" className="mb-2">
                Model
              </label>
              <input
                type="text"
                id="model-input1"
                value={modelForm1}
                onChange={(event) => handleInputChange(event, setModelForm1)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Californie"
             />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="category-input1" className="mb-2">
                Catégorie
              </label>
              <input
                type="text"
                id="category-input1"
                value={categoryForm1}
                onChange={(event) => handleInputChange(event, setCategoryForm1)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Sport"
              />
            </div>
            <div className='flex flex-col w-full py-8'>

              <button
                onClick={handleAddItemForm1}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Ajouter
              </button>
            </div>

          </div>
          {errorMessageForm1 && <p className="text-red-500 mt-2">{errorMessageForm1}</p> || successMessageForm1 && <p className="text-green-500 mt-2">{successMessageForm1}</p>}
          {/* {} */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Liste des éléments ajoutés</h3>
            {itemForm1
            .map((item, index) => (
              <div key={index} className="bg-blue-100 shadow p-4 mb-2 rounded-md">
                <p className="text-lg font-bold mb-2">Marque: <span className='text-xl font-semibold text-gray-600'>{item.brand} </span> </p>
                <p className="text-lg font-bold mb-2">Model: <span className='text-xl font-semibold text-gray-600'>{item.model}</span> </p>
                <p className="text-lg font-bold mb-2">Catégorie: <span  className='text-xl font-semibold text-gray-600'>{item.category}</span></p>
                <div className='flex py-3 '>
                  <button
                    onClick={() => handleEditItemForm1(index)}
                    className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDeleteItemForm1(index)}
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Supprimer
                  </button>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Ajouter une voiture</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="brand-select2" className="mb-2">
                Marque
              </label>
              <select
                id="brand-select2"
                value={brandForm2}
                onChange={(event) => handleInputChange(event, setBrandForm2)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionner une marque</option>
                {itemForm1.map((item, index) => (
                  <option key={index} value={item.brand}>
                    {item.brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="model-select2" className="mb-2">
                Model
              </label>
              <select
                id="model-select2"
                value={modelForm2}
                onChange={(event) => handleInputChange(event, setModelForm2)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionner un model</option>
                {itemForm1.map((item, index) => (
                  <option key={index} value={item.model}>
                    {item.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="category-select2" className="mb-2">
                Catégorie
              </label>
              <select
                id="category-select2"
                value={categoryForm2}
                onChange={(event) => handleInputChange(event, setCategoryForm2)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionner une catégorie</option>
                {itemForm1.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="plate-input2" className="mb-2">
                Plaque
              </label>
              <input
                type="text"
                id="plate-input2"
                value={plateForm2}
                onChange={(event) => handleInputChange(event, setPlateForm2)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="year-input2" className="mb-2">
                Année:
              </label>
              <input
                type="number"
                id="year-input2"
                value={yearForm2}
                onChange={(event) => validateYearInput(event)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1995"
                max="2023"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="date-input2" className="mb-2">
                Date
              </label>
              <input
                type="date"
                id="date-input2"
                value={dateForm2}
                onChange={(event) => handleInputChange(event, setDateForm2)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className='flex flex-col w-full py-8'>
            <button
              onClick={handleAddItemForm2}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Ajouter
            </button>
            </div>
          </div>
          {errorMessageForm2 && <p className="text-red-500 mt-2">{errorMessageForm2}</p>}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Liste des voitures</h3>
            {itemForm2.map((item, index) => (
              <div key={index} className="bg-gray-200 p-4 mb-2 rounded-md">
                <p className="text-lg font-bold mb-2">Marque: <span className='text-xl font-semibold text-gray-600' >{item.brand}</span></p>
                <p className="text-lg font-bold mb-2">Modèle: <span className='text-xl font-semibold text-gray-600'>{item.model}</span> </p>
                <p className="text-lg font-bold mb-2">Catégorie: <span className='text-xl font-semibold text-gray-600' >{item.category} </span> </p>
                <p className="text-lg font-bold mb-2">Plaque: <span className='text-xl font-semibold text-gray-600'> {item.plate}</span> </p>
                <p className="text-lg font-bold mb-2">Année: <span className='text-xl font-semibold text-gray-600'> {item.year}</span> </p>
                <p className="text-lg font-bold mb-2">Date: <span className='text-xl font-semibold text-gray-600'>{item.date} </span> </p>
                <div className='flex py-3 '>
                <button
                  onClick={() => handleEditItemForm2(index)}
                  className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDeleteItemForm2(index)}
                  className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Supprimer
                </button>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
