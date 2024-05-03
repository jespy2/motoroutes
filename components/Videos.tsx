import { useState } from "react";
import {
	Linking,
	Modal,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Platform } from "react-native";

import { IVideosProps } from "../types";

import Button from "./Button";
import Header from "./Header";

export default function Videos(props: IVideosProps) {
	const { setShowVideos, videos } = props;

	const video = (url: string) => (
		<>
			{url === "" && (
				<Text key='none' style={styles.noteText}>No videos for this route</Text>
			)}
			{url !== "" && (
				<YoutubePlayer
					key={url}
					height={300}
					play={false}
					videoId={url.replace("https://youtu.be/", "")}
				/>
			)}
		</>
	);

	return (
		<View style={styles.container}>
			<Modal>
				<View style={styles.container}>
					<Header />
					<View style={styles.subContainer}>
						<ScrollView style={styles.videoContainer}>
							<Text style={styles.title}>Videos</Text>
							{videos.map((url) => video(url))}
						</ScrollView>
						<Pressable onPress={() => setShowVideos(false)}>
							<Button
								title='close'
								onPress={() => setShowVideos(false)}
								type='dark'
								accessibilityLabel='close videos'
							/>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3C5B6F",
	},
	subContainer: {
		borderColor: "#DFD0B8",
		backgroundColor: "#DFD0B8",
		borderWidth: 2,
		margin: 4,
		borderRadius: 5,
		// paddingVertical: 20,
		paddingHorizontal: 10,
	},
	videoContainer: {
		height: 600,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#3C5B6F",
		paddingHorizontal: 10,
	},
	sectionTitle: {
		fontSize: 25,
		paddingHorizontal: 10,
		color: "#948979",
		fontWeight: "bold",
	},
	noteText: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
		paddingTop: 10,
		paddingBottom: 30,
		fontSize: 20,
	},
	icon: {
		color: "#3C5B6F",
		fontSize: 24,
		paddingRight: 15,
	},
});
