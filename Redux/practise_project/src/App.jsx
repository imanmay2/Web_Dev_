
import {Content} from "./Content"
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <Content/>
      </Provider>
    </>
  )
}

export default App
