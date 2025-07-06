export const getWeatherDataForCity = async (city: string) => {
  try {
    const res = await fetch('http://localhost:3001/api/getWeather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Unknown server error');
    }

    const data = await res.json();
    return data;

  } catch (e) {
    console.error('Error fetching weather from backend:', e);
    if (e instanceof Error) {
      throw new Error(`Could not get weather for ${city}. Error: ${e.message}`);
    }
    throw new Error(`An unknown error occurred while fetching weather for ${city}.`);
  }
};
