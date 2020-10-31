import React from 'react';
import { StyleSheet } from 'react-native';

const stylemaincontainer = StyleSheet.create(
    {
        maincontainer:
        {
            flex: 1
            , backgroundColor: '#e4ebe6'
        },
        innercontainer:
        {
            backgroundColor: '#fafaf0',
            marginHorizontal: 30,
            marginTop: 10, paddingVertical: 70,
            paddingBottom: 30

        }
    }
)
// for REGISTER AND LOGIN TEXT
const maintextstyle = StyleSheet.create(
    {
        text:
        {
            paddingTop: 50,
            alignContent: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#102c57'
        },
        btn:
        {
            color: 'white',
            borderWidth: 3
            , borderColor: '#102c58',
            backgroundColor: '#102c57',
            borderRadius: 35,
            alignSelf: "center",
            width: "80%",
            alignItems: "center",
            /* alignitems horizontal krta ha r justifyContent vertical */
            height: 45,
            justifyContent: "center"

        }, textbtn:
        {
            marginTop: 90,
            color: '#102c57',
            alignSelf: 'center'
        }

    });
const styles = StyleSheet.create(
    {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d9dadb',
        margin: 12,
        padding: 3,
        backgroundColor: '#fafaf0',
        alignItems: "center",
        alignSelf: "center",
        width: "80%"
    }
);

export { stylemaincontainer, maintextstyle, styles }

