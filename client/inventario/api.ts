const API_URL = "http://localhost:3000"; 

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Aquí debes devolver los datos del usuario y el token
        } else {
            throw new Error("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error en login:", error);
        throw error; // Lanzamos el error para que lo maneje el store
    }
};


export const logoutUser = async () => {
  await fetch(`${API_URL}/api/v1/auth/login`, { method: "POST"});
};
