import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

const QuotationsItems = () => {

    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoBitcoin}
                        source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>11/06/2022</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 28.565,28</Text>
            </View>            
        </View>
    )
}

export default QuotationsItems