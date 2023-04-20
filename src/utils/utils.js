export const saveDataToStore = (type, name, description) => {
  const existingData = JSON.parse(localStorage.getItem(type)) || [];
  existingData.push({ name, description });
  localStorage.setItem(type, JSON.stringify(existingData));
};