import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

var itemsArray = new Array(25).fill('empty');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      winMessage: "",
      isLiveOver: 4
    };
  }
  // when app loads up
  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() })
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: false });
    return randomNumber;
  };

  scratchItem = itemNumber => {
    if (this.state.isScratched === false) {
      if (itemsArray[itemNumber] == "empty") {
        this.setState({ isLiveOver: (this.state.isLiveOver - 1) })
        if (this.state.isLiveOver === 0) {
          this.setState({ isScratched: true, isLiveOver: -1 })
        }
      }
      if (this.state.randomNumber === itemNumber) {
        itemsArray[itemNumber] = "lucky";
        this.setState({
          isScratched: true, winMessage: "You Won !!!!"
        });
        if (this.state.isLiveOver === 0) {
          this.setState({ winMessage: "You Won !!!!" })
        }
      } else {
        itemsArray[itemNumber] = "unlucky";
        if (this.state.isLiveOver === 0) {
          this.setState({ winMessage: "You Loose :(" })
        }
      }
      this.forceUpdate();
    } else {
      Alert.alert("Game Over \n" + this.state.winMessage)
    }

  }

  scratchItemIcon = itemNumber => {
    if (itemsArray[itemNumber] == "lucky") {
      return "dollar"
    } else if (itemsArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
  }

  scratchItemColor = itemNumber => {
    if (itemsArray[itemNumber] == "lucky") {
      return "green"
    } else if (itemsArray[itemNumber] === "unlucky") {
      return "red"
    }
    return "black"
  }
  showAllItems = () => {
    if (this.state.isScratched) {
      itemsArray.fill('unlucky');
      itemsArray[this.state.randomNumber] = "lucky";
      this.forceUpdate();
    } else {
      Alert.alert("Try your luck first!!!!")
    }

  }
  resetGame = () => {
    this.setState({ randomNumber: this.generateRandomNumber(), winMessage: "", isLiveOver: 4 }, () => {
      itemsArray.fill("empty");
      this.forceUpdate();
      this.setState({ isScratched: false });
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>SCRATCH AND WIN</Text>
          <View style={styles.itemRow}>
            <Text style={styles.hintGreen}>WIN : <FontAwesome
              name={"dollar"}
              size={25}
              color={"green"}
            />
            </Text>
            <Text style={styles.hintRed}> LOOSE : <FontAwesome
              name={"frown-o"}
              size={25}
              color={"red"}
            />
            </Text>
          </View>

          <Text style={styles.name}>{(this.state.winMessage == "") ? "PLAY" : this.state.winMessage}</Text>
          <Text style={[styles.name, { color: (this.state.isLiveOver < 0) ? "red" : "green" }]}>{this.state.isLiveOver + 1}</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(0)}>
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(1)}>
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(2)}>
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(3)}>
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(4)}>
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(5)}>
              <FontAwesome
                name={this.scratchItemIcon(5)}
                size={50}
                color={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(6)}>
              <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
                color={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(7)}>
              <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
                color={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(8)}>
              <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
                color={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(9)}>
              <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
                color={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(10)}>
              <FontAwesome
                name={this.scratchItemIcon(10)}
                size={50}
                color={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(11)}>
              <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
                color={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(12)}>
              <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
                color={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(13)}>
              <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
                color={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(14)}>
              <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
                color={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(15)}>
              <FontAwesome
                name={this.scratchItemIcon(15)}
                size={50}
                color={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(16)}>
              <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
                color={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(17)}>
              <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
                color={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(18)}>
              <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
                color={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(19)}>
              <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
                color={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(20)}>
              <FontAwesome
                name={this.scratchItemIcon(20)}
                size={50}
                color={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(21)}>
              <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
                color={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(22)}>
              <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
                color={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(23)}>
              <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
                color={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}
              onPress={() => this.scratchItem(24)}>
              <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
                color={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button full success rounded style={styles.button}
          onPress={() => this.showAllItems()}>
          <Text style={styles.buttonText}>Show all coupons</Text>
        </Button>
        <Button full primary rounded style={styles.button}
          onPress={() => this.resetGame()}>
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
  },
  hintGreen: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
  },
  hintRed: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
  },
  grid: {

  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  item: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#c1c1c1",
    minWidth: 70,
  },
  button: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
