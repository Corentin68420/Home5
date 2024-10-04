import { View } from 'react-native';
import React from 'react';
import Bouton from "../../components/Bouton";
import styling from "../../constants/Styling";



export default function Ressources() {
  return (
    <View style={styling.container}>
      <Bouton couleur="red">QCMHome</Bouton>
      
    </View>
    
  );
}