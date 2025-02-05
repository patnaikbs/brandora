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
