import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CircularPicker from "react-native-circular-picker";
import { observe } from "react-native/Libraries/LogBox/Data/LogBoxData";

export default function App() {
  const [price, setPrice] = useState(0);
  const [endOne, setEndOne] = useState(15);
  const [endTwo, setEndTwo] = useState(40);
  const [endThree, setEndThree] = useState(75);
  const [endFour, setEndFour] = useState(100);
  const handleChange = (v) => setPrice((v * 20).toFixed(0));
  const stepsArray = [15, 40, 70, 100];
  const underweight = ["rgb(255, 97, 99)", "rgb(247, 129, 119)"];
  const goodGood = ["rgb(255, 204, 0)", "rgb(255, 214, 10)"];
  const overweight = ["rgb(52, 199, 89)", "rgb(48, 209, 88)"];
  const obese = ["rgb(0, 122, 255)", "rgb(100, 132, 255)"]; // the 2nd value is the "cursor circle", not the actual circle
  // const stepOne = 0;
  // const stepTwo = 15;
  // const stepTwoMeta = `${stepTwo}`; //15

  const gradients = {
    0: underweight,
    15: goodGood,
    40: overweight,
    70: obese,
  };

  return (
    <View style={styles.container}>
      <CircularPicker
        size={400}
        steps={stepsArray}
        gradients={gradients}
        onChange={handleChange}
      >
        <>
          <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 8 }}>
            {price} $
          </Text>
          <Text style={{ textAlign: "center" }}>Available balance 2000 $</Text>
          {/* <Text style={{ textAlign: "center" }}>{stepsArray[0]}</Text> */}
        </>
      </CircularPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
