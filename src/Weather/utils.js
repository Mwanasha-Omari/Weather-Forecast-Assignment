const baseUrl= process.env.REACT_APP_BASE_URL;

export const getWeatherChange = async() => {
    try{
        const response = await fetch(`${baseUrl}/Weather`);
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};