{/*import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const App = () => {
  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign Up button pressed");
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login link pressed");
  };

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />

      
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
};

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
    position:"absolute", 
    top: 25,
    
    
  },
  brandName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    position:"absolute", 
    top: 150,
  },
  signUpButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
    position:"absolute", 
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
    position:"absolute", 
    top: 670,
  },
  loginLink: {
    color: "#ff3b30",
    fontWeight: "bold",
  },
});

export default App;
*/}








import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Get screen width for responsive design
const { width } = Dimensions.get("window");

const SignupStep1 = ({ navigation }) => {
  const handleNext = () => {
    console.log("Next button pressed");
    // Navigate to the next step (Step 2)
    navigation.navigate("SignupStep2");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Signup</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <View style={styles.circleActive}></View>
        <Text style={styles.stepText}>Step 1</Text>
        <View style={styles.line}></View>
        <View style={styles.circleInactive}></View>
        <Text style={styles.stepText}>Step 2</Text>
        <View style={styles.line}></View>
        <View style={styles.circleInactive}></View>
        <Text style={styles.stepText}>Step 3</Text>
      </View>

      {/* Form Inputs */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Business Name"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Person Name"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#aaa"
          multiline={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Google Location"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Area"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Products / Services"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 20,
    color: "#000",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  searchIcon: {
    fontSize: 20,
    color: "#000",
  },
  stepIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  circleActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ff3b30",
  },
  circleInactive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  line: {
    width: width * 0.2,
    height: 2,
    backgroundColor: "#ccc",
  },
  stepText: {
    fontSize: 14,
    color: "#000",
  },
  form: {
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupStep1;




{/*}

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Get screen width for proper spacing
const { width } = Dimensions.get("window");

const SignupStep2 = () => {
  const handleRegister = () => {
    console.log("Register button pressed");
    // Add your registration logic here
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Signup</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stepIndicator}>
        <View style={styles.circleActive}></View>
        <Text style={styles.stepText}>Step 1</Text>
        <View style={styles.line}></View>
        <View style={styles.circleActive}></View>
        <Text style={styles.stepText}>Step 2</Text>
        <View style={styles.line}></View>
        <View style={styles.circleInactive}></View>
        <Text style={styles.stepText}>Step 3</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Business Category"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Commission % Offered"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="About the Business"
          placeholderTextColor="#aaa"
          multiline={true}
        />
      </View>

      <Text style={styles.photoGalleryText}>Photo Gallery</Text>
      <View style={styles.photoGallery}>
        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>LOGO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>BANNER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>CERTIFICATE</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 20,
    color: "#000",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  searchIcon: {
    fontSize: 20,
    color: "#000",
  },
  stepIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  circleActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ff3b30",
  },
  circleInactive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  line: {
    width: width * 0.2,
    height: 2,
    backgroundColor: "#ccc",
  },
  stepText: {
    fontSize: 14,
    color: "#000",
  },
  form: {
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // For multiline inputs
  },
  photoGalleryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  photoGallery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  photoButton: {
    width: "30%",
    height: 50,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  photoButtonText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignupStep2;
*/}

{/*}
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SuccessScreen = ({ navigation }) => {
  const handleContinue = () => {
    console.log("Continue to Login button pressed");
    // Navigate to the login screen
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.successText}>Success!</Text>
        <Text style={styles.messageText}>
          Your Account has been Successfully Created
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue to Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  successText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
*/}