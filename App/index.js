import React from "react";
///////////////////////////////
//imported Dimensions
import { StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Dimensions } from "react-native";
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
  digitStyle: {
    ////////////////////////////////////

    color: "#fff",
    //////////////////////////////////////////////////////
    // Changed from 40 to screen.width/4.3
    fontSize: 70,
    //////////////////////////////////////////////////////
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
    width: screen.width
  },
  equationStyle: {
    color: "#d3d3d3",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
    width: screen.width,
  }
  //////////////////////////////////////////////////////////
});

//////////////////////////////////////////////
//////////////////////////////////////////////

export default class App extends React.Component {
  state = initialState;

//HandleTap handles tap, it takes type and Value
//sets state, which takes in parameter state
//to get state, we call calculator ()
//which returns    currentValue: `${state.currentValue}${value}` for number
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
        <View>
        ////////////////////////////////////////////////////////////////////
          <Text style={styles.equationStyle}>{this.state.previousValue} {this.state.operator}</Text>
          ////////////////////////////////////////////////////////////////////  
        </View>
        <Text style={styles.digitStyle}>
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
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => this.handleTap("number", ".")} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
          />
          <Button
            text="√"
            theme="accent"
            onPress={() => this.handleTap("operator", "sqrt")}
          />
        </Row>
      </SafeAreaView>
    </View>
    );
  }
}
