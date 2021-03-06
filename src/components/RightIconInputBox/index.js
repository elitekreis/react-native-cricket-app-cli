import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './styles';

const RightIconInputBox = props => {
    const {
        value = value,
        iconType,
        iconName,
        iconColor,
        placeholder,
        secureTextEntry,
        inputWidth,
        onPress,
        onChangeText,
    } = props;

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={[styles.textInput, {width: inputWidth}]}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={value => onChangeText(value)}
            />
            <View style={styles.iconView}>
                <TouchableOpacity onPress={onPress}>
                    <Icon name={iconName} type={iconType} color={iconColor} size={hp('3.0%')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RightIconInputBox;
