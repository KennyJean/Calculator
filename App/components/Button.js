import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#ffff",
    ////////////////////////////////
    ////////////////////////////////
    //changed from 25 to 40
    fontSize: 40,
    ////////////////////////////////
    ////////////////////////////////
  },
  textSecondary: {
    color: "#060606",
  },
  ///////////////////////
  ///////////////////////
  textAccent: {
    fontSize: 50,
  },
  ///////////////////////
  ///////////////////////
  button: {
    backgroundColor: "#333333",
    flex: 1,
      ///////////////////////
      //changed height from -10 to -15
    height: Math.floor(buttonWidth-15 ),
    alignItems: "center",
    justifyContent: "center",
      ///////////////////////
      //changed borderRadius from -10 to -15
    borderRadius: Math.floor(buttonWidth-15),
      ///////////////////////

      ///////////////////////
      //changed margin from 5 to 7
    margin: 7,
  },
  buttonDouble: {
      ///////////////////////
      //changed width from -10 to -13
    width: screen.width / 2 - 13,
      ///////////////////////
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    ///////////////////////////////////
    //changed from "#f09a36 to #FF9500
    backgroundColor: "#FF9500",
    ///////////////////////////////////
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    /////////////////////////////////////////
    //TEXT STYLE made operators look bigger
    textStyles.push(styles.textAccent);
    /////////////////////////////////////////
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
