//Filtra pelaje
export const filterData = (data, filterBy, value) => {
  return data.filter(cat => cat["facts"][filterBy] === value)
};

//Filtra personalidad
export const filterDataObj = (data, filterBy, value) => {
  return data.filter(cat => cat["extraInfo"][filterBy][value]) 
};

// orden A-Z y de Z-A
export const sortData = (data, sortBy, sortOrder) => {
  const dataSorted = [...data];
  
  dataSorted.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a[sortBy] > b[sortBy]) ? 1 : -1;
    }else if(sortOrder === "desc"){
      return (a[sortBy] > b[sortBy]) ? -1 : 1;
    }//else return 0;
  });
  return dataSorted;
};

//Ordena por precios
export const sortDataPrice = (data, sortBy, sortOrder) => {
  const dataSorted = data.map(x => x);
  dataSorted.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a["facts"][sortBy] > b["facts"][sortBy]) ? 1 : -1;
    }else if(sortOrder === "desc"){
      return (a["facts"][sortBy] > b["facts"][sortBy]) ? -1 : 1;
    }//else return 0;
  });
  return dataSorted;
};

//Funcion del boton estadísticas
export const computeStats = (data) => {
  const precioTotal = data.reduce((conteo, gato) => conteo + gato["facts"]["precioCachorro"], 0);
  return precioTotal / data.length;
};
