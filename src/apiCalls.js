export const getFilms = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching films');
      } 
      return response.json()
    });
};