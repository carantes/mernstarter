import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Header from '../../../../modules/App/components/Header/Header'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Header', () => {
  let header
  let callback

  beforeEach(() => {
    header = shallow(<Header />)
  })

  it('Precisa possuir um link para a home', () => {
    const link = header.find('Link')
    expect(link).to.have.length(1)
    expect(link.props().to).to.equal('/')
  })

  describe('Propriedades', () => {
    describe('isActive', () => {
      describe('True', () => {
        beforeEach(() => {
          header = shallow(<Header isActive={true} />)
        })

        it('Precisa exibir o link Adicionar Post', () => {
          const link = header.find('a')
          expect(link.nodes[0].props.children).to.equal('Adicionar Post')
        })
      })

      describe('False', () => {
        beforeEach(() => {
          header = shallow(<Header isActive={false} />)
        })

        it('Precisa ocultar o link Adicionar Post', () => {
          const link = header.find('a')
          expect(link.nodes.length).to.equal(0)
        })
      })
    })


    describe('toggleAddPost', () => {
      describe('onClick', () => {
        beforeEach(() => {
          callback = sinon.spy()
          header = mount(<Header isActive={true} toggleAddPost={callback} />)
        })

        it('Precisa executar a funcao toggleAddPost ao clicar no link', () => {
          const link = header.find('a').findWhere(n => n.text() === 'Adicionar Post')
          link.simulate('click')
          expect(callback.called).to.equal(true)
        })
      })
    })
  })
})
