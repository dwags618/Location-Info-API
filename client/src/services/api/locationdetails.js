export const getElevation = (params) => {
  return fetch('/api/location/elevation', {
  	method: 'POST',
  	headers: {'Content-Type': 'application/json'},
  	body: JSON.stringify(params)
  });
}

export const getTimeZone = (params) => {
  return fetch('/api/location/timezone', {
  	method: 'POST',
  	headers: {'Content-Type': 'application/json'},
  	body: JSON.stringify(params)
  });
}

export const getWeather = (params) => {
  return fetch('/api/location/weather', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  });
}