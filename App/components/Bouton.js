import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styling from "../constants/Styling";


export default function Bouton ({children, couleur}) {
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    
      <TouchableOpacity style={[styles.button,{backgroundColor: couleur}]} onPress={() => navigation.navigate(children)} >
            <Text style={styling.buttonText}>{children}</Text>
      </TouchableOpacity>
        
  </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding: 25,
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    borderRadius: 10,
    padding: 30,
    flex:0
    
  }
  });