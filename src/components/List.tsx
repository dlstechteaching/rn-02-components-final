import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { EntryPoint } from "./EntryPoint"

interface ListProps {
    data: { label: string, value: number }[];
    header?: string;
}

export const List: React.VFC<ListProps> = ({ data, header }) => {    
    return (
        <View style={styles.listWrapper}>
            { header && (
            <View style={styles.header}>
                <Text style={styles.headerText}>{ header.toUpperCase() }</Text>
            </View>
            )}
            { data.map(({label, value}) =>  <EntryPoint label={label} value={value} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10
    },
    header: {
        display: 'flex',
        marginBottom: 10,
        alignSelf: 'flex-start',
        flex: 1
    },
    headerText: {
        fontSize: 18,
        color: 'rgba(0,0,0, 0.56)',
    },
  });