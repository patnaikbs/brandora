import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function Notification({ navigation }) {
  const handleSignUp = () => {
    console.log("Sign Up button pressed");
    // You can also navigate to another screen if required:
    // navigation.navigate("Profile");
  };

  const handleLogin = () => {
    console.log("Login link pressed");
  };

  return (
    <ImageBackground source={require("../../assets/background.png")} style={styles.background}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.brandName}>Brandora</Text>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.loginLink} onPress={handleLogin}>
            login
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
    position: "absolute",
    top: 25,
  },
  brandName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    position: "absolute",
    top: 150,
  },
  signUpButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
    position: "absolute",
    top: 590,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    color: "#fff",
    position: "absolute",
    top: 670,
  },
  loginLink: {
    color: "#ff3b30",
    fontWeight: "bold",
  },
});
