import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Footer from '../../../../modules/App/components/Footer/Footer'

describe('Footer', () => {
  let footer

  beforeEach(() => {
    footer = shallow(<Footer />)
  })

  it('Precisa carregar o rodapé', () => {
    const expected = footer.find('p').props().children
    expect(expected).to.contain('Todos os direitos reservados')
  })
})

