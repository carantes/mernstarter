import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Style
import styles from './App.css'

// Import Components
import DevTools from './components/DevTools'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Import Actions
import { toggleAddPost } from './AppActions'

class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      isMounted: false,
      headerIsActive: context.router.isActive('/', true)
    }
  }

  componentDidMount() {
    this.setState({isMounted: true}) // eslint-disable-line
  }

  toggleAddPostSection() {
    this.props.dispatch(toggleAddPost())
  }

  render() {
    return (
      <div>
        {this.state.isMounted && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Header
            toggleAddPost={this.toggleAddPostSection.bind(this)}
            isActive={this.state.headerIsActive}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(App)
