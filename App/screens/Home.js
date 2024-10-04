import { View } from 'react-native';
import React from 'react';
import colors from '../constants/Colors';
import Box from "../components/Box";
import Bouton from "../components/Bouton";
import styling from "../constants/Styling";



export default function Home() {
  return (
    <View style={[styling.container,{alignItems:"stretch"}]}>
      <Box>Récap'eps</Box>
      {/* <Box>Ressources</Box>        <Box>Apprentissage actif</Box>
      <Box>Évaluation</Box> */}
      <Bouton couleur="yellow">Ressources</Bouton>
      <Bouton couleur="red">Apprentissage</Bouton>
      <Bouton couleur="green">Évaluation</Bouton>
    </View>
    
  );
}

