import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotronConfig = () => {
  const { log, logImportant, error } = Reactotron
  global.log = log
  global.error = error
  global.logImportant = logImportant

  return Reactotron
    .configure({
      configure: 'MFU Botanical Garden',
      name: 'MFU Botanical Garden'
    })
    .use(reactotronRedux())
    .useReactNative()
    .connect()
}
export default reactotronConfig