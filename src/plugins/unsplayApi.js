const unsplashApi = (() => {

  const apiHost = 'https://source.unsplash.com/1600x900';
  
  const getImageBySearch = (query) => {
    const randomPhotoHost = apiHost+'?'+query

    const fullQuery = apiHost + query;
    return fetch(randomPhotoHost, {method: 'get'});
  };

  return { getImageBySearch };

})();

export default unsplashApi;