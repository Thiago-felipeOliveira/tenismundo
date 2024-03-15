import{NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerRoutes from './src/routes/Routes.js';

export default function App(){
  return(

    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  )
}
