import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"

const CurrentPrice = (props) => {

    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
            <Text style={styles.textPrice}>Última Cotação</Text>
        </View>
    )
}

export default CurrentPrice