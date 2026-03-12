import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Target() {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>
                Target
            </Text>

            <TouchableOpacity onPress={() => router.back()}>
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}