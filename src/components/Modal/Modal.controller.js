import { EventEmitter } from 'events'
import { Events } from '@constants'

const event = new EventEmitter()

const show = (props) => {
  const eventProps = {
    isVisible: true,
    ...props
  }
  event.emit(Events.MODAL, eventProps)
}

const hide = () => {
  event.emit(Events.MODAL, { isVisible: false })
}

const kills = () => {
  event.removeListener(Events.MODAL, () => { })
}

export default {
  event,
  show,
  hide,
  kills,
}