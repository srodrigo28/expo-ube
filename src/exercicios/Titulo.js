import React from "react";

import { View, Text } from "react-native";

export default props => {
    return (
        <View>
            <Text>{ props.principal }</Text>
            <Text>{ props.segundario }</Text>
        </View>
    )
}
