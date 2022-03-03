export const handleRegister = async ({ username, password }) => {
    const response = await fetch(`${process.env.API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const json = await response.json();
    console.log(json);
};

export const handleLogin = async ({ username, password }) => {
    const response = await fetch(`${process.env.API_URL}/user/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const json = await response.json();

    if (json.data) {
        localStorage.setItem('token', json.data);
    }
};