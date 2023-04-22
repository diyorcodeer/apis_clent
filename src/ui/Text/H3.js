import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class H3 extends Component {
    render() {
        return (
            <Text {...this.props} style={[styles.text, this.props.style]}>{this.props.children}</Text>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500'
    }
})




