import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import TimetableScreen from './screens/TimetableScreen';
import RoomsScreen from './screens/RoomsScreen';
import GradesScreen from './screens/GradesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            if (route.name === 'Emploi du temps') {
              iconName = 'calendar-outline';
            } else if (route.name === 'Salles') {
              iconName = 'school-outline';
            } else {
              iconName = 'document-text-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Emploi du temps" component={TimetableScreen} />
        <Tab.Screen name="Salles" component={RoomsScreen} />
        <Tab.Screen name="Notes" component={GradesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
