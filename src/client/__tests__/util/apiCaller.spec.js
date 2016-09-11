import { expect } from 'chai'
import callApi from '../../util/apiCaller'


describe('API Caller', () => {
  it('Precisa chamar o recurso no server', () => {
    return callApi('posts').then(res => {
      return expect(res.posts).to.be.ok
    })
  })

  /*
  it('Precisa retornar ERRO quando o endpoint for invalido', (done) => {
    callApi('foo').then(res => {
      console.log(res.status);
      done()
    })
  })*/
})
