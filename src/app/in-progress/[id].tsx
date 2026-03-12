import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function InProgress() {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>
                InProgress
            </Text>

            <TouchableOpacity onPress={() => router.back()}>
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}