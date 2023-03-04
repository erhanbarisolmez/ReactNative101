import { LangContextProvider } from '../context/LangContext';
import { ThemeContextProvider } from '../context/ThemeContext';
import Router from './Router';

const StackNavigator = () => {
  return (
   <LangContextProvider>
  <ThemeContextProvider>
   <Router />
  </ThemeContextProvider>
  </LangContextProvider>
 
  )
}

export default StackNavigator;