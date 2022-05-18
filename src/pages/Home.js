import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { React, useContext, useState } from "react";
import AuthContext from "../context/firebaseContext/AuthContext";
import ContenedorIdiomas from "../components/componentesEspecificos/ContenedorIdiomas";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "../theme";
import ContenedorCategorias from "../components/componentesEspecificos/ContenedorCategorias";
import ContenedorContenido from "../components/componentesEspecificos/ContenedorContenido";
const Stack = createNativeStackNavigator();
export default function Home({ navigation }) {
  const [idiomas, showIdiomas] = useState(true);
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState("");
  const [categorias, showCategorias] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [contenido, showContenido] = useState(false);
  const { logOut } = useContext(AuthContext);

  const logout = () => {
    logOut().then(() => navigation.navigate("Login"));
  };
  const handleClickIdiomas = () => {
    resetearScreens();
    showIdiomas(true);
  };
  const handleClickCategorias = () => {
    resetearScreens();
    showCategorias(true);
  };
  const handleChangeIdioma = (idioma) => {
    setIdiomaSeleccionado(idioma);
    resetearScreens();
    if (categoriaSeleccionada == "") {
      showCategorias(true);
    } else {
      showContenido(true);
    }
  };
  const handleChangeCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    resetearScreens();
    if (idiomaSeleccionado == "") {
      showIdiomas(true);
    } else {
      showContenido(true);
    }
  };
  const construirContenidoAccionable = () => {
    return (
      <ContenedorContenido
        idioma={idiomaSeleccionado}
        categoria={categoriaSeleccionada}
      ></ContenedorContenido>
    );
  };
  const resetearScreens = () => {
    showCategorias(false);
    showContenido(false);
    showIdiomas(false);
  };
  const handleIconChangeLanguage = () => {
    return (
      <Image
        source={require("../../assets/menu.png")}
        resizeMode="cover"
        style={styles.imageBtn}
      ></Image>
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.contenedorScreen}>
        {idiomas && (
          <ContenedorIdiomas
            handleClickIdioma={handleChangeIdioma}
          ></ContenedorIdiomas>
        )}
        {categorias && (
          <ContenedorCategorias
            handleClickCategoria={handleChangeCategoria}
          ></ContenedorCategorias>
        )}
        {contenido && construirContenidoAccionable()}
      </View>
      <View
        // renderIcon={handleIconChangeLanguage}
        style={styles.containerTabs}
      >
        <TouchableOpacity onPress={logout}>
          <Image
            source={require("../../assets/power-off.png")}
            resizeMode="cover"
            style={styles.imageSalir}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickIdiomas()}>
          <Image
            source={require("../../assets/idiomas.png")}
            resizeMode="cover"
            style={styles.imageBtn}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickCategorias()}>
          <Image
            source={require("../../assets/categorias.png")}
            resizeMode="cover"
            style={styles.imageBtn}
          ></Image>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.colores.primary,
  },
  containerTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: Dimensions.get("screen").height * 0.18,
    width: Dimensions.get("screen").width,
    backgroundColor: theme.colores.primary,
  },
  contenedorScreen: {
    flex: 1,
    height: Dimensions.get("screen").height,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: theme.colores.primary,
    zIndex: -99,
  },
  btnCategorias: {
    borderRadius: 50,
    width: Dimensions.get("screen").width * 0.26,
    height: Dimensions.get("screen").height * 0.12,
    backgroundColor: theme.colores.details,
  },
  btnSalir: {},
  imageSalir: {
    width: Dimensions.get("screen").width * 0.21,
    height: Dimensions.get("screen").height * 0.095,
  },
  imageBtn: {
    width: Dimensions.get("screen").width * 0.21,
    height: Dimensions.get("screen").height * 0.095,
  },
});
