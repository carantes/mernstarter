import { expect } from 'chai'
import getAPIURL from '../../util/apiURL'


describe('API URL', () => {
  let API_URL

  describe('development', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development'
    })

    it('Precisa retornar a URL correta', () => {
      API_URL = getAPIURL()
      expect(API_URL).to.equal('/api')
    })
  })

  describe('testing', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'test'
    })

    describe('Se a URL base estiver definida', () => {
      it('Precisa retornar a URL base', () => {
        process.env.BASE_URL = '/bar'
        API_URL = getAPIURL()
        expect(API_URL).to.equal('/bar')
      })
    })


    describe('Se não houver uma URL base', () => {
      it('Precisa retornar http://localhost:PORT/api ', () => {
        process.env = {
          NODE_ENV: 'test',
          PORT: '9999'
        }

        API_URL = getAPIURL()
        expect(API_URL).to.equal('http://localhost:9999/api')
      })
    })
  })
})
