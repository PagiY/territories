type LoginData = {
  username: string,
  password: string,
}

export const login = async (data: LoginData) => {
  
  const response = await fetch('http://localhost:8000/api/login', {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};