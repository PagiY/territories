export const getTerritories = async () => {
  
  const response = await fetch('http://localhost:8000/api/territories', {
    method: "GET",
  });
  
  return await response.json();
};