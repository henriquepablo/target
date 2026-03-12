import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Transaction() {

    const { id } = useLocalSearchParams<{id: string}>();

    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <Text>
                ID: { id }
            </Text>
        </View>
    )
}