import React from "react";
///////////////////////////////
//imported Dimensions
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions } from "react-native";
//iniated screen
const screen = Dimensions.get("window");
//////////////////////////////
import Row from "./components/Row";
import Button from "./components/Button";
import Calculator, { initialState } from "./util/Calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //////////////////////////////////////////////////////
    // Changed from 202020 to 000000
    backgroundColor: "#000000",
    //////////////////////////////////////////////////////
    justifyContent: "flex-end",
  },
   //////////////////////////////////////////////////////
   //changed from value to digitDefault
  digitDefault: {
    ////////////////////////////////////

    color: "#fff",
    //////////////////////////////////////////////////////
    // Changed from 40 to screen.width/4.3
    fontSize: screen.width / 4.3,
    //////////////////////////////////////////////////////
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  //////////////////////////////////////////////////////////
  //adding digitstyle for 7,8, and9 digits
  digitSeven: {
    fontSize: screen.width / 5,

  },
  digitEight:{
    fontSize: screen.width / 5,
  },
  digitNine:{

    fontSize: screen.width / 5,
  },
});

//////////////////////////////////////////////
// Array digitStyles used for different digit font sizes
const digitStyles = [styles.digitDefault];
//////////////////////////////////////////////

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => {
      return Calculator(type, value, state);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          ////////////////////////////////////////////
          //changed from styles.Value to digitStyles
          // Implementing array digitStyles to allow different styles
          //// TODO:  just dynamically change the digit fonts when
          //there are 7,8,9 digits
          <Text style={digitStyles}>
          ///////////////////////////////////////////
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
            //////////////////////////////////
            ////changed text from "/" to "÷"
              text="÷"
            //////////////////////////////////
            //////////////////////////////////
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              ///////////////////////////////
              // Changed from 'x' to '×'
              text="×"
              ///////////////////////////////
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
