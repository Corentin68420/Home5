import {View, Text} from "react-native";
import styling from "../constants/Styling";

const SettingsScreen = () =>{ 
    return(
        <View style={styling.container}>
            <Text style={styling.text}>
                SettingsScreen
            </Text>
        </View>
    );
};

export default SettingsScreen;

