import { View } from 'react-native';
import React from 'react';
import Box from "../../components/Box";
import Bouton from "../../components/Bouton";
import styling from "../../constants/Styling";



export default function Ressources() {
  return (
    <View style={styling.container}>
      <Bouton couleur="yellow">Ecrit 1</Bouton>
      <Bouton couleur="yellow">Ecrit 2</Bouton>
      <Bouton couleur="yellow">Oral 1</Bouton>
      <Bouton couleur="yellow">Oral 2</Bouton>
    </View>
    
  );
}