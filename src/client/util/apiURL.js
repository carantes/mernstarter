
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

export default getAPIURL
