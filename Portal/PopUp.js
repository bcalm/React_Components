import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div
      style={{
        position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
      }}
      onClick={this.props.onClose}
      >
      <div
      style={{
        padding: 20,
          background: '#fff',
          borderRadius: '2px',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
      }}
      >
      {this.props.children}
      <hr />
      <button onClick={this.props.onClose}>Close</button>
      </div>
      </div>,
      modalRoot,
    )
  }
}

class App extends React.Component {
  state = {showModal: false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  render() {
    return (
      <div
      style={{
        height: '100%',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
      }}
      >
      <div
      style={{
        maxWidth: 400,
          position: 'relative',
      }}
      >
      <h1>My App</h1>
      <p>
      This is an example of how you might use React.createPortal. I think
      it is a pretty neat API that is yet another awesome escape hatch
      that React provides for practical reasons. Sometimes you just need
      to render something completely outside the React Tree.
      </p>
      <button onClick={this.handleShowMessageClick}>
      Show Secret Modal
      </button>
      {this.state.showModal ? (
        <Modal onClose={this.handleCloseModal}>
        This is the secret modal message!
        </Modal>
      ) : null}
      </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)

