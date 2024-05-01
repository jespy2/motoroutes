import { Modal, Pressable, Text, View } from "react-native";

export default function Notes({setShowModal}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <View>
      <Modal>
        <Text>Some stuff</Text>
        <Pressable onPress={() => setShowModal(false)}>
						<Text >close
					</Text>
					</Pressable >
      </Modal>
    </View>
  )
}