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

const Profile = ({ navigation }) => {
  const handleNext = () => {
    console.log("Next button pressed");
    // Navigate to the next step (if needed)
    navigation.navigate("SignupStep2"); // Ensure "SignupStep2" is added in StackNavigator
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
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

export default Profile;
