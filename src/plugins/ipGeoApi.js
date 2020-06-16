
const ipGeoApi = (() => {
  const apiHost = 'https://extreme-ip-lookup.com/json/';

  const getUsersCity = () => {

    return fetch(apiHost).then( response => {
      return response.json();
    });
  }

  return { getUsersCity };

})();

export default ipGeoApi;