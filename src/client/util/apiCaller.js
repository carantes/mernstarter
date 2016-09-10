import fetch from 'isomorphic-fetch'

function getAPIURL() {
  const ENV = process.env.NODE_ENV
  let url

  if (ENV === 'development') {
    url = '/api'
  } else {
    url = ENV === 'test' ? (process.env.BASE_URL || `http://localhost:${process.env.PORT}/api`) : '/api'
  }

  return url
}

export default function callApi(endpoint, method = 'get', body) {
  const API_URL = getAPIURL()

  return fetch(`${API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return json
    })
    .then(
      response => response,
      error => error
    )
}
