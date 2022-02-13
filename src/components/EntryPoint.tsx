import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface EntryPointProps {
    label: string;
    value: number;
}

export const EntryPoint: React.VFC<EntryPointProps> = ({ label, value }) => {
    return (
        <View style={styles.item}>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>{ label }</Text>
            <Text style={styles.text}>{ value }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: { 
        display: 'flex',
        alignItems: 'center', 
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between' ,
        padding: 20,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.04)',
        marginVertical: 10
    },
    text: {
      color: 'black',
      fontSize: 18
    },
  });