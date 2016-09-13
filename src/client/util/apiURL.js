
const PORT = process.env.PORT || 3000

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${PORT}/api`) :
  '/api'
