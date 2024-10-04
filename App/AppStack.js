import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import Ressources from './screens/ressources/Ressources';
import E1R from './screens/ressources/e1R/E1R';
import E2R from './screens/ressources/e2R/E2R';
import O1R from './screens/ressources/o1R/O1R';
import O2R from './screens/ressources/o2R/02R';
import Apprentissage from './screens/apprentissage/Apprentissage';
import Evaluation from './screens/evaluation/Evaluation';
import { Pressable, Text } from 'react-native';
import colors from "./constants/Colors";
import styling from "./constants/Styling";
import QCMHomeScreen from "./screens/apprentissage/QCMHomeScreen";
import QCMScreen from "./screens/apprentissage/QCMScreen";
import QCMResults from "./screens/apprentissage/QCMResults";

const Stack = createNativeStackNavigator()

export const AppStack = () => {
    const navigation = useNavigation();
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: styling.headerStyle,
        headerTintColor: colors.black,
        headerTitleStyle: {fontWeight: "bold"},
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Accueil")}> 
          {/* attention, nom donné dans le Stack.Screen */}
            <Text style={{fontSize:24}}>🏠</Text> 
          </Pressable>
        ),
        contentStyle: styling.arriereplan
        }}>
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Ressources" component={Ressources} />
        <Stack.Screen name="Ecrit 1" component={E1R} />
        <Stack.Screen name="Ecrit 2" component={E2R} />
        <Stack.Screen name="Oral 1" component={O1R} />
        <Stack.Screen name="Oral 2" component={O2R} />        
        <Stack.Screen name="Apprentissage" component={Apprentissage} />
        <Stack.Screen name="QCMHome" component={QCMHomeScreen} options={{title: "Règles QCM"}}/>
        <Stack.Screen name="QCM" component={QCMScreen} options={{title: "QCM"}}/>
        <Stack.Screen name="QCMResults" component={QCMResults} options={{title: "Résultat"}} />
        <Stack.Screen name="Évaluation" component={Evaluation} />
        
      </Stack.Navigator>
  );
}

export default function App() {
    return(
        <NavigationContainer>
    <AppStack />
  </NavigationContainer>
    )
  }