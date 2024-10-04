import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../constants/Colors";
const QCMResults = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params);

  return (
    <SafeAreaView style={{flex:1}}>
      <Pressable style={styles.container}>
        <Text style={styles.titre}>Résultats:</Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={styles.answerContainer}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />
        <View >
          <Text style={styles.noteText}>
            Votre note: {route.params.points}/{route.params.totalQuestions}
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Apprentissage")}
        >
          <Text style={styles.buttonText}>Retour</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default QCMResults;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 7,
    marginTop: 20,
    padding: 10,
    
    
    
    
  },
  titre: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
  },
  answerContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  noteText: { fontSize: 20, color: "black" },
  button:{
    backgroundColor: "green",
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: { color: "white", textAlign: "center" }
});
