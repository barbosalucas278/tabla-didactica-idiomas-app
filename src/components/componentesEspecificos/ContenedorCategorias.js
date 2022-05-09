import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from "react-native";
import React from "react";

export default function ContenedorCategorias(props) {
  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => props.handleClickCategoria("animales")}>
        <Image
          source={require("../../../assets/animales.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleClickCategoria("colores")}>
        <Image
          source={require("../../../assets/colores.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleClickCategoria("numeros")}>
        <Image
          source={require("../../../assets/numeros.png")}
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
    marginBottom: 40,
  },
});
