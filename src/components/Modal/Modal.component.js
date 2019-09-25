import React, { Fragment, Component } from 'react'
import RNModal from 'react-native-modal'
import { Events } from '@constants'
import ModalController from './Modal.controller'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      child: Fragment,
      isVisible: false
    }
  }

  componentDidMount() {
    ModalController.event.addListener(Events.MODAL, (modalProps) => {
      this.setState(modalProps)
    })
  }

  componentWillUnmount() {
    ModalController.kills()
  }

  onModalHide = () => {
    this.setState({ child: Fragment })
  }

  render() {
    const { child, isVisible } = this.state
    const ChildComponent = child
    return (
      <RNModal
        isVisible={isVisible}
        onModalHide={this.onModalHide}
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropOpacity={0}
        animationInTiming={200}
        animationOutTiming={200}
        style={{ margin: 0 }}
        backdropTransitionOutTiming={0}>
        <ChildComponent />
      </RNModal>
    )
  }
}

export default Modal