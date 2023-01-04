import AppProvider from './src/context/AppContext'
import Home from './src/pages/Home'


export default function app() {

  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}