import AppProvider from './src/context/AppContext'
import Home from './src/pages/Home'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/componnents/Routes';


export default function app() {

  return (
    <NavigationContainer>
      <AppProvider>
          <Routes/>
      </AppProvider>
    </NavigationContainer>
  )
}