import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotronConfig = () => {
  const { log, logImportant, error } = Reactotron
  global.log = log
  global.error = error
  global.logImportant = logImportant

  return Reactotron
    .configure({
      configure: 'MFU Botanical Garden',
      name: 'MFU Botanical Garden',
      host: scriptHostname,
    })
    .use(reactotronRedux())
    .useReactNative()
    .connect()
}
export default reactotronConfig