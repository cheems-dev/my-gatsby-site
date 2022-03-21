/**
 * Funcion para filtrar un arreglo de objetos
 * @param {Object} property - JSON
 * @param {string} filter - keyword para filtrar
 * @returns True o False
 */
export const handleFilter = (property, filter) => {
  const { name } = property;

  /* Home */
  if (name) {
    return name?.toLowerCase().includes(filter.toLowerCase());
  }
};
