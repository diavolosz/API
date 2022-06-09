
const request = require("request");

let searchBread = () => {
  
  const args = process.argv.splice(2);
  const entry = args[0];
  const urlAPI = `https://api.thecatapi.com/v1/breeds/search?q=${entry}`;

  if (!entry) {
    console.log(`Please enter a breedname`);
    process.exit();
  }

  request(`${urlAPI}`, (error, response, body) => {
    
    if (error) {
      console.log(`ERROR. ${urlAPI} is invalid. \n${error}`);
      process.exit();
    }

    let dataJSON = JSON.parse(body);
    
    if (!dataJSON.length) {
      console.log(`Invalid input: ${entry} is not a proper breed name. Plsease enter a proper breedname`);
      process.exit();
    }

    let description = dataJSON[0].description;
    console.log(description);
  });
};

searchBread();