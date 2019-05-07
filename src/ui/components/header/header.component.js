import React, { Component, Fragment } from 'react'

import {
    View,
    Text,
    StatusBar,
    Platform
} from 'react-native'

export class Header extends Component {
    render() {
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />

                <View
                    style={{
                        backgroundColor: '#FBB041',
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        ...Platform.select({
                            ios: {
                                height: 65,
                            },
                            android: {
                                height: 57,
                            }
                        }),
                        paddingHorizontal: 10,
                        borderBottomWidth: 1,
                        borderColor: "#ddd"
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>
                        {this.props.textHeader}
                    </Text>
                </View>
            </Fragment>
        )
    }
}