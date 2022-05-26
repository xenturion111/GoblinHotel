export const GET_HOTELS = 'GET_HOTELS'


const API_URL =  'https://hotels4.p.rapidapi.com/properties/get-hotel-photos'

export const getHotels = () => {
    try {
        return async dispatch => {
            const result = await fetch (API_URL, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
                    'X-RapidAPI-Key': '6042a8b925mshd94589829ce6124p191dd8jsna1224032e364',
                },
                params: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if(json) {
                dispatch({
                    type: GET_HOTELS,
                    payload: json
                });
            } else {
                console.log('unable to connect')
            }
        }
    } catch (err) {
                console.error(err);
            }
}

// // export const fetchHotels = () => async(dispatch) => {
// //     try {
// //         const res = await axios.get(API_URL, {
// //             method: 'GET',
// //                 params: {
// //                     'Content-Type': 'application/json',
// //                 }
// //         });
// //         await dispatch(setIsLoading(true));
// //         await dispatch(setHotels(res.data));
// //         await dispatch(setIsLoading(false));
// //     } 
// //    
// }