const axios = require('axios');
// export const GET_HOTELS = 'GET_HOTELS'

const fetchHotel = async(searchQuery) => {
//     const options = {
//         method: 'GET',
//         url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
//         params: {query: `${searchQuery}`, locale: 'en_US', currency: 'USD'},
//         headers: {
//           'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//           'X-RapidAPI-Key': '6042a8b925mshd94589829ce6124p191dd8jsna1224032e364'
//         }
//       }
    
    
const options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
    params: {query: searchQuery, currency: 'USD', locale: 'en_US'},
    headers: {
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
      'X-RapidAPI-Key': '6042a8b925mshd94589829ce6124p191dd8jsna1224032e364'
    }
  };
  const response = await axios(options)
    response.data.suggestions.map((hotels) => {
    hotels.entities.map((hotel) => {
        console.log(hotel.images);
    })
})
}

fetchHotel('jakarta');
// export const getHotels = () => {
//     try {
//         return async dispatch => {
//             const result = await fetch (API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//                     'X-RapidAPI-Key': '6042a8b925mshd94589829ce6124p191dd8jsna1224032e364',
//                 },
//                 params: {
//                    query: `${term}`
//                 }
//             });
//             const json = await result.json();
//             if(json) {
//                 dispatch({
//                     type: GET_HOTELS,
//                     payload: json
//                 });
//             } else {
//                 console.log('unable to connect')
//             }
//         }
//     } catch (err) {
//                 console.error(err);
//             }
// }
