import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  View
 } from "react-native";
import Button from "../components/Button";
import { IHomeProps } from "../types";


 

export default function Home({navigation, route}: IHomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar} >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Button
          title="My Routes"
          onPress={() => 
            navigation.navigate('Routes')
          }
        />
        <Button
          title="Add Route" 
          onPress={() => 
            navigation.navigate('AddRoute')
          }
        />
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C5B6F",
    flex: 1,
  },
  navbar: {
    paddingVertical: 170,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
		width: 300,
		height: 146,
	}
})
