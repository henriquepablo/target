import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Indext() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>
                Olá Mundo
            </Text>

            <TouchableOpacity onPress={() => router.navigate('/target')} >
                <Text>
                    Target
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/transaction/2')} >
                <Text>
                    Transaction
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/in-progress/2')} >
                <Text>
                    InProgess
                </Text>
            </TouchableOpacity>
        </View>
    )
}