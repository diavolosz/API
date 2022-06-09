
const request = require("request");


const fetchBreedDescription = (breedName, callback) => {

  const urlAPI = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(urlAPI, (error, response, body) => {

    if (error) {
      callback(error);
      return;
    }

    const dataJSON = JSON.parse(body);
    const breed = dataJSON[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("breed not found");
    }
  });
};


module.exports = fetchBreedDescription;