import apiWp from "./ApiWp";

const getDataWp = () => {
  const response = apiWp
    .get()
    .then((resolve) => resolve.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export { getDataWp };
