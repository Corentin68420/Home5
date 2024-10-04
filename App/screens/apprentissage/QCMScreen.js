import { Text, View, SafeAreaView, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../constants/Colors";

const QCMScreen = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  //points
  const [points, setPoints] = useState(0);

  //index of the question:
  const [index, setIndex] = useState(0);

  //answer Status (true or false):
  const [answerStatus, setAnswerStatus] = useState(null);

  //answers:
  const [answers, setAnswers] = useState([]);

  //selected answer:
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //progress bar
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  //prend effet dès que le contenu de [] change:
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 1);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("QCMResults", {
        answers: answers,
        points: points,
        totalQuestions: totalQuestions,
      });
    }
  }, [currentQuestion]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView>
      <View style={styles.titreContainer}>
        <Text style={styles.titre}>QCM</Text>
      </View>

      <View style={styles.soustitreContainer}>
        <Text>Progression</Text>
        <Text>
          Question: ({index+1}/{totalQuestions})
        </Text>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <Text style={[styles.progressBarPercentage, {width: `${progressPercentage}%`}]} />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion?.question}</Text>
        <View style={styles.answersContainer}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              //  if null, only then set...
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion?.correctAnswerIndex
                  ? styles.correctAnswerContainer
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? styles.wrongAnswerContainer
                  : styles.noAnswerContainer
              }
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex ? (
                <AntDesign
                  style={styles.checkMark}
                  name="checkcircle"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={styles.checkMark}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text style={styles.optionsText}>{item.options}</Text>
              )}

              <Text style={styles.answerText}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={answerStatus === null ? null : styles.commentsContainer}>
        {answerStatus === null ? null : (
          <Text style={answerStatus == null ? null : styles.commentsText}>
            {!!answerStatus ? "Bonne réponse!" : "Mauvaise réponse..."}
          </Text>
        )}
        {/* ajouté après */}
        {index +1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("QCMResults", {
                points: points,
                answers: answers,
                totalQuestions: totalQuestions,
              })
            }
            style={styles.nextButtonContainer}
          >
            <Text style={styles.nextButtonText}>Terminer</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={styles.nextButtonContainer}
          >
            <Text style={styles.nextButtonText}>Question suivante</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QCMScreen;

const styles = StyleSheet.create({
  titreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
  titre: {
    fontSize: 30,
    fontWeight: "500",
  },
  soustitreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  progressBar: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  progressBarPercentage: {
    backgroundColor: "#FFC0CB",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 10,
    right: 0,
    marginTop: 20,
  },
  questionContainer: {
    backgroundColor: "#F0F8FF",
    marginTop: 30,
    padding: 10,
    borderRadius: 6,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  answersContainer: { marginTop: 12 },
  correctAnswerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    backgroundColor: "green",
    borderRadius: 20,
  },
  wrongAnswerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    backgroundColor: "red",
    borderRadius: 20,
  },
  noAnswerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    borderRadius: 20,
  },
  checkMark: {
    borderColor: "#00FFFF",
    textAlign: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },
  optionsText: {
    borderColor: "#00FFFF",
    textAlign: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },
  answerText: { marginLeft: 10 },
  commentsContainer: { marginTop: 45, backgroundColor: colors.papaye },
  commentsText: { fontSize: 17, textAlign: "center", fontWeight: "bold" },
  nextButtonContainer: {
    backgroundColor: "green",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 6,
  },
  nextButtonText: { color: "white" },
});
