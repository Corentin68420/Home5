import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const QCMHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/nuage.png")}
      />
      <View style={styles.titreContainer}>
        <Text style={styles.titre}>QCM</Text>
      </View>

      <View style={styles.reglesContainer}>
        <Text style={styles.text}>Règles:</Text>

        <View style={styles.contenuRegles}>
          <View style={styles.etiquetteRegle}>
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.regle}>
              Chaque bonne réponse te fait gagner un point
            </Text>
          </View>

          <View style={styles.etiquetteRegle}>
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.regle}>Il n'y a pas points négatifs</Text>
          </View>

          <View style={styles.etiquetteRegle}>
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.regle}>
              Tu dois répondre à toutes les questions
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.startButton}
        onPress={() => navigation.navigate("QCM")}
      >
        <Text style={styles.startButtonText}>Démarrer</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default QCMHomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  contenuRegles: {
    padding: 10,
    backgroundColor: "#F88379",
    borderRadius: 6,
    marginTop: 15,
  },
  etiquetteRegle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  regle: {
    marginLeft: 4,
    color: "#722F37",
    fontSize: 15,
    fontWeight: "500",
  },
  startButton: {
    backgroundColor: "magenta",
    padding: 14,
    width: 120,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  startButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    height: "50%",
    width: "90%",
    resizeMode: "stretch",
    alignSelf: "center",
    position: "absolute",
  },
  reglesContainer: { padding: 10, marginTop: 20},
  titre: {
    textAlign: "center",
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    position: "absolute",
    alignSelf: "center",
  },
  titreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "50%"
  },
});
