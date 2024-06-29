import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// an example of a component, modify as needed 

interface ButtonProps {
    filled: boolean;
    variant: boolean;
}

const Button: React.FC<ButtonProps> = ({ filled, variant }) => {
    const buttonStyles = [
        styles.button,
        filled && styles.filledButton,
        variant && styles.variantButton,
    ];

    const textStyles = [
        styles.text,
        filled && styles.filledText,
        variant && styles.variantText,
    ];

    return (
        <TouchableOpacity style={buttonStyles}>
            <Text style={textStyles}>Button</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'transparent',
    },
    filledButton: {
        backgroundColor: 'blue',
    },
    variantButton: {
        borderColor: 'red',
    },
    text: {
        color: 'black',
    },
    filledText: {
        color: 'white',
    },
    variantText: {
        color: 'red',
    },
});

export default Button;