import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { theme } from '../theme';

const Text = ({ children, style, ...rest }) => {
    return (
        <RNText
            {...rest}
            style={[styles.default, style]}
        >
            {children}
        </RNText>
    );
};

export default Text;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'RedHatDisplay-Black',
        color: theme.primary,
    }
});
