import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AppStack } from './AppStack';
import colors from "./constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import styling from "./constants/Styling";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Tab.Navigator
      sceneContainerStyle={styling.arriereplan}
    
      screenOptions={{
      tabBarLabelPosition: "below-icon",
      tabBarShowLabel: true,
      tabBarActiveTintColor: colors.black,
      tabBarActiveBackgroundColor: colors.orange,
      tabBarInactiveBackgroundColor: colors.moccasin,
      headerStyle: styling.headerStyle
      }}>
    <Tab.Screen name="Cours" component={AppStack} options={{
                headerShown: false,
                tabBarIcon: ({color}) => <Ionicons name="book" size={20} color={color} />,
                }}/>
        <Tab.Screen name="Profil" component={ProfileScreen} options={{
          tabBarLabel: "Mon profil",
          tabBarIcon: ({color}) => <Ionicons name="person" size={20} color={color} />,
          tabBarBadge: 3     // à modifier    
        }}/>
        <Tab.Screen name="Paramètres" component={SettingsScreen} options={{
          tabBarIcon: ({color}) => <Ionicons name="settings" size={20} color={color} />
        }}/>
        
    </Tab.Navigator>
</NavigationContainer>

    
  );
}