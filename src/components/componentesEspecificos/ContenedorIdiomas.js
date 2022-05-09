import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import theme from "../../theme";
export default function ContenedorIdiomas(props) {
  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => props.handleClickIdioma("ES")}>
        <Image
          source={require("../../../assets/spain.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleClickIdioma("POR")}>
        <Image
          source={require("../../../assets/portugal.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleClickIdioma("UK")}>
        <Image
          source={require("../../../assets/uk.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.2,
  },
});
