import {View,Text, StyleSheet} from 'react-native';
import colors from '../constants/Colors';
import styling from "../constants/Styling";


//Bande Récap'eps

export default function Box({children}) {
  return (
    <View style={styles.box}>
      <Text style= {[styling.text, {color: colors.white}]}>{children} </Text>
    </View>
  );
}

const styles= StyleSheet.create({
    box: {
        backgroundColor: colors.black,
        padding: 30,
        
        alignContent: "center"
        
        
    },
    


});