export const getLocation = () => {
  return async (dispatch, getState) =>  {
    if (!navigator.geolocation) {
      console.log(`FILE: locationActions.js getLocation() Get location not supported`);
    } else {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          console.log(location);
          
          dispatch({
            type: 'GET_LOCATION',
            payload: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }
          });
        },
        (error) => {
          console.error(`FILE: locationActions.js () | ERROR1: \n`, error);
        }
      );
    
    }
  }

  
};

