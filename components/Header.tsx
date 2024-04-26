import { Image, StyleSheet, View } from 'react-native';

export default function Header () {
  return (
    <View style={styles.header}>
				<Image style={styles.logo} source={require("../assets/logo.png")} />
			</View>
  )
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		color: "#DFD0B8",
		width: 120,
		height: 58,
	},
	header: {
		marginTop: 20,
		alignItems: "center",
		backgroundColor: "#3C5B6F",
		paddingVertical: 35,
    borderRadius: 20
	},
});