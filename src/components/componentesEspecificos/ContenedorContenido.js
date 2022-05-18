import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Audio } from "expo-av";

const imagenes = {
  animales: [
    { value: "cerdo", img: require("../../../assets/cerdo.png") },
    { value: "gato", img: require("../../../assets/gato.png") },
    { value: "perro", img: require("../../../assets/perro.png") },
    { value: "pollo", img: require("../../../assets/pollo.png") },
    { value: "tortuga", img: require("../../../assets/tortuga.png") },
  ],
  colores: [
    { value: "rojo", img: require("../../../assets/rojo.png") },
    { value: "verde", img: require("../../../assets/verde.png") },
    { value: "azul", img: require("../../../assets/azul.png") },
    { value: "amarillo", img: require("../../../assets/amarillo.png") },
    { value: "rosado", img: require("../../../assets/rosado.png") },
  ],
  numeros: [
    { value: "1", img: require("../../../assets/1.png") },
    { value: "2", img: require("../../../assets/2.png") },
    { value: "3", img: require("../../../assets/3.png") },
    { value: "4", img: require("../../../assets/4.png") },
    { value: "5", img: require("../../../assets/5.png") },
  ],
  banderas: [
    { value: "POR", img: require("../../../assets/portugal.png") },
    { value: "UK", img: require("../../../assets/uk.png") },
    { value: "ES", img: require("../../../assets/spain.png") },
  ],
};
const Audios = {
  ES: {
    cerdo: require("../../../assets/audios/ES/cerdo.wav"),
    perro: require("../../../assets/audios/ES/perro.wav"),
    gato: require("../../../assets/audios/ES/gato.wav"),
    pollo: require("../../../assets/audios/ES/gallina.wav"),
    tortuga: require("../../../assets/audios/ES/tortuga.wav"),
    rojo: require("../../../assets/audios/ES/rojo.wav"),
    verde: require("../../../assets/audios/ES/verde.wav"),
    azul: require("../../../assets/audios/ES/azul.wav"),
    amarillo: require("../../../assets/audios/ES/amarillo.wav"),
    rosado: require("../../../assets/audios/ES/rosado.wav"),
    1: require("../../../assets/audios/ES/1.wav"),
    2: require("../../../assets/audios/ES/2.wav"),
    3: require("../../../assets/audios/ES/3.wav"),
    4: require("../../../assets/audios/ES/4.wav"),
    5: require("../../../assets/audios/ES/5.wav"),
  },
  UK: {
    cerdo: require("../../../assets/audios/UK/cerdo.wav"),
    perro: require("../../../assets/audios/UK/perro.wav"),
    gato: require("../../../assets/audios/UK/gato.wav"),
    pollo: require("../../../assets/audios/UK/pollo.wav"),
    tortuga: require("../../../assets/audios/UK/tortuga.wav"),
    rojo: require("../../../assets/audios/UK/rojo.wav"),
    verde: require("../../../assets/audios/UK/verde.wav"),
    azul: require("../../../assets/audios/UK/azul.wav"),
    amarillo: require("../../../assets/audios/UK/amarillo.wav"),
    rosado: require("../../../assets/audios/UK/rosado.wav"),
    1: require("../../../assets/audios/UK/1.wav"),
    2: require("../../../assets/audios/UK/2.wav"),
    3: require("../../../assets/audios/UK/3.wav"),
    4: require("../../../assets/audios/UK/4.wav"),
    5: require("../../../assets/audios/UK/5.wav"),
  },
  POR: {
    cerdo: require("../../../assets/audios/POR/cerdo.wav"),
    perro: require("../../../assets/audios/POR/perro.wav"),
    gato: require("../../../assets/audios/POR/gato.wav"),
    pollo: require("../../../assets/audios/POR/pollo.wav"),
    tortuga: require("../../../assets/audios/POR/tortuga.wav"),
    rojo: require("../../../assets/audios/POR/rojo.wav"),
    verde: require("../../../assets/audios/POR/verde.wav"),
    azul: require("../../../assets/audios/POR/azul.wav"),
    amarillo: require("../../../assets/audios/POR/amarillo.wav"),
    rosado: require("../../../assets/audios/POR/rosado.wav"),
    1: require("../../../assets/audios/POR/1.wav"),
    2: require("../../../assets/audios/POR/2.wav"),
    3: require("../../../assets/audios/POR/3.wav"),
    4: require("../../../assets/audios/POR/4.wav"),
    5: require("../../../assets/audios/POR/5.wav"),
  },
};
export default function ContenedorContenido(props) {
  const { idioma, categoria } = props;
  const banderaSeleccionada = imagenes.banderas.filter(
    (x) => x.value == idioma
  )[0];
  const ejecutarSonido = async (value) => {
    const { sound } = await Audio.Sound.createAsync(Audios[idioma][value]);
    sound.playAsync();
  };
  return (
    <View styles={styles.containerGeneral}>
      <View
        style={{
          width: 200,
          height: 70,
          position: "absolute",
          right: 60,
          top: -40,
        }}
      >
        <Image
          style={{ width: 250, height: 100 }}
          source={banderaSeleccionada.img}
          resizeMode="contain"
        ></Image>
      </View>
      <View styles={styles.containerContenido}>
        {imagenes[categoria].map((c, index) => (
          <TouchableOpacity key={index} onPress={() => ejecutarSonido(c.value)}>
            <Image
              source={c.img}
              resizeMode="contain"
              style={[
                styles.img,
                index % 2 == 0 && styles.imgLeft,
                index % 2 != 0 && styles.imgRight,
              ]}
            ></Image>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    alignItems: "flex-start",
  },
  containerContenido: {
    flex: 1,
    flexDirection: "column",
  },
  img: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.15,
  },
  imgLeft: {
    marginBottom: -50,
    marginRight: 150,
  },
  imgRight: {
    marginLeft: 150,
  },
});
