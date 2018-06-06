export const signupUser = (params) => {
  return fetch('/auth/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(params)
  });
}

export const loginUser = (params) => {
  return fetch('/auth/login', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(params)
  });
}

export const resetUser = (params) => {
  return fetch('/auth/reset', {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(params)
  });
}





