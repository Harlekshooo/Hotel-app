// BOOKING SECTION


const Final = document.querySelector(".final");
const inputSearch = document.querySelector(".input-search");
const Search = document.querySelector(".search");
const baseUrl = "https://api.foursquare.com/v3/places/";



const hotelData = async () => {
  let query = inputSearch.value
  const res = await fetch(`${baseUrl}search?query=${query}&categories=19014&limit=50`, {
    method: 'GET',
    headers:{
      Authorization:'fsq3GB1w/TlaskbikpILtnTSphQ96GlzCuL3jNCXmnGjyfA='
    }
  });

  const data = await res.json();
  let searchedResponse = data.results

  
    let hotelDetails = ""
    searchedResponse.map(async (eachSearchedResponse) => {
      console.log(eachSearchedResponse);
      const response = await fetch(`${baseUrl}${eachSearchedResponse.fsq_id}/photos`, {
        method: 'GET',
        headers:{
          Authorization:'fsq3GB1w/TlaskbikpILtnTSphQ96GlzCuL3jNCXmnGjyfA='
        }
      })
      const secondData = await response.json();
      console.log(secondData);
      hotelDetails += `<div class="p-6 bg-white flex flex-col justify-between xs:w-4/5 xs:mx-auto shadow-md rounded-lg">
                        <img
                          src="${secondData[2].prefix}original${secondData[2].suffix}"
                          alt="Executive Lounge"
                          class="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h4 class="text-xl font-bold mb-2">${eachSearchedResponse.name}</h4>
                        <p class="text-gray-600 mb-4">${eachSearchedResponse.location.formatted_address}</p>
                        <a class="block" href="https://www.google.com/search?q=${eachSearchedResponse.name}"><button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Book Now</button></a>
                      </div>`

    //  let images = []
    //   secondData.length > 0 ? secondData.map((eachSecondData) => {
    //     let image = eachSecondData.prefix+eachSecondData.suffix
    //     images.push(image)
    //   }) :  []
    //   console.log({...searchedResponse,images:images});
    //   return ({...searchedResponse,images:images})
    
    Final.innerHTML = hotelDetails
    })
};

hotelData()

Search.addEventListener('click', (e)=> {
  e.preventDefault()
  console.log("button clicked");
  
  let hotelDetails = ""
  if (inputSearch.value == "") {
    console.log("it is empty");
    hotelDetails += `<h4 class="text-xl font-bold mb-2">PLEASE INPUT THE NAME OF AN HOTEL OR LOUNGE.</h4>`
  } else{
    hotelData();
  }
  Final.innerHTML = hotelDetails
  // console.log(inputSearch.value);
})



