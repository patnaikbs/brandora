import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EvenNumberChecker = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkEvenNumber = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num)) {
      setResult(num % 2 === 0 ? "Even Number" : "Odd Number");
    } else {
      setResult("Please enter a valid number");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter a number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Check" onPress={checkEvenNumber} />
      {result !== "" && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EvenNumberChecker;
