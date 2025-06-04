import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimetableScreen from './screens/TimetableScreen';
import RoomsScreen from './screens/RoomsScreen';
import GradesScreen from './screens/GradesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Emploi du temps" component={TimetableScreen} />
        <Tab.Screen name="Salles" component={RoomsScreen} />
        <Tab.Screen name="Notes" component={GradesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
