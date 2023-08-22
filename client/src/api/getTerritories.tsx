export const getTerritories = async () => {
  
  const response = await fetch(`/api/territories`, {
    method: "GET",
  });
  
  return await response.json();
};