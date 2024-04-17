export const getApiKey = () => {
  const key = localStorage.getItem("key");
  return key;
};
 
export const setApiKey = (key) => {
  localStorage.setItem("key", key);
};
