import React, { ReactNode, RefObject } from "react";
import { Modal, StyleSheet, TouchableOpacity, ViewStyle, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TooltipState } from "../types";

type TooltipProps = {
	children: ReactNode;
	setTooltip: (value: React.SetStateAction<TooltipState>) => void;
	tooltip: TooltipState;
};

export default function Tooltip(props: TooltipProps) {
	const { children, setTooltip, tooltip } = props;
	const { pos } = tooltip;

	const getTooltipStyle = (x: number, y: number): ViewStyle => ({
		position: "absolute",
		right: 60,
		top: y + 10,
		backgroundColor: "#3C5B6F",
		// height: 80,
		// width: 150,
		// margin: 10,
		borderRadius: 5,
		transformOrigin: "top"
	});
	console.log(tooltip);
	return (
		<Modal transparent>
			<View style={getTooltipStyle(pos.x, pos.y)}>
				<View style={styles.subContainer}>
					<TouchableOpacity
						onPress={() => setTooltip({ ...tooltip, show: false })}
					>
						<Ionicons name='close-circle-outline' size={24} style={styles.closeIcon} />
					</TouchableOpacity>
					<View style={styles.infoContents}>{children}</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	subContainer: {
		backgroundColor: "#948979",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#3C5B6F",
		padding: 5,		
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
		elevation: 20
	},
	closeIcon: {
		color: '#DFD0B8',
		textAlign: "right"
	},
	infoContents: {
		padding: 5
	}
});
