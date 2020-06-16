
const ipGeoApi = (() => {
  const apiHost = 'https://extreme-ip-lookup.com/json/';
  /* eslint-disable arrow-body-style */
  const getUsersCity = () => {
    return fetch(apiHost).then(response => {
      return response.json();
    });
  };
  /* eslint-enable arrow-body-style */
  return { getUsersCity };
})();

export default ipGeoApi;