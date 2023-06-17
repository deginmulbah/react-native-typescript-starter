import React from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    ViewStyle,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import useTheme from '../hooks/useTheme';
import { IBlockProps } from '../constants/types';

const Block = (props: IBlockProps) => {
    const {
        id = 'Block',
        children,
        style,
        shadow,
        card,
        center,
        outlined,
        overflow,
        row,
        safe,
        keyboard,
        scroll,
        color,
        gradient,
        primary,
        secondary,
        tertiary,
        black,
        white,
        gray,
        danger,
        warning,
        success,
        info,
        radius,
        height,
        width,
        margin,
        marginBottom,
        marginTop,
        marginHorizontal,
        marginVertical,
        marginRight,
        marginLeft,
        padding,
        paddingBottom,
        paddingTop,
        paddingHorizontal,
        paddingVertical,
        paddingRight,
        paddingLeft,
        justify,
        align,
        flex = 1,
        wrap,
        blur,
        intensity,
        tint,
        position,
        right,
        left,
        top,
        bottom,
        end,
        start,
        ...rest
    } = props;
    const { colors, sizes } = useTheme();

    const colorIndex = primary
        ? 'primary'
        : secondary
            ? 'secondary'
            : tertiary
                ? 'tertiary'
                : black
                    ? 'black'
                    : white
                        ? 'white'
                        : gray
                            ? 'gray'
                            : danger
                                ? 'danger'
                                : warning
                                    ? 'warning'
                                    : success
                                        ? 'success'
                                        : info
                                            ? 'info'
                                            : null;

    const blockColor = color
        ? color
        : colorIndex
            ? colors?.[colorIndex]
            : undefined;

    const blockStyles = StyleSheet.flatten([
        style,
        {
            ...(shadow && {
                shadowColor: colors.shadow,
                shadowOffset: {
                    width: sizes.shadowOffsetWidth,
                    height: sizes.shadowOffsetHeight,
                },
                shadowOpacity: sizes.shadowOpacity,
                shadowRadius: sizes.shadowRadius,
                elevation: sizes.elevation,
            }),
            ...(card && {
                backgroundColor: colors.card,
                borderRadius: sizes.cardRadius,
                padding: sizes.cardPadding,
                shadowColor: colors.shadow,
                shadowOffset: {
                    width: sizes.shadowOffsetWidth,
                    height: sizes.shadowOffsetHeight,
                },
                shadowOpacity: sizes.shadowOpacity,
                shadowRadius: sizes.shadowRadius,
                elevation: sizes.elevation,
            }),
            ...(margin !== undefined && { margin }),
            ...(marginBottom && { marginBottom }),
            ...(marginTop && { marginTop }),
            ...(marginHorizontal && { marginHorizontal }),
            ...(marginVertical && { marginVertical }),
            ...(marginRight && { marginRight }),
            ...(marginLeft && { marginLeft }),
            ...(padding !== undefined && { padding }),
            ...(paddingBottom && { paddingBottom }),
            ...(paddingTop && { paddingTop }),
            ...(paddingHorizontal && { paddingHorizontal }),
            ...(paddingVertical && { paddingVertical }),
            ...(paddingRight && { paddingRight }),
            ...(paddingLeft && { paddingLeft }),
            ...(radius && { borderRadius: radius }),
            ...(height && { height }),
            ...(width && { width }),
            ...(overflow && { overflow }),
            ...(flex !== undefined && { flex }),
            ...(row && { flexDirection: 'row' }),
            ...(align && { alignItems: align }),
            ...(center && { justifyContent: 'center' }),
            ...(justify && { justifyContent: justify }),
            ...(wrap && { flexWrap: wrap }),
            ...(blockColor && { backgroundColor: blockColor }),
            ...(outlined && {
                borderWidth: 1,
                borderColor: blockColor,
                backgroundColor: 'transparent',
            }),
            ...(position && { position }),
            ...(right !== undefined && { right }),
            ...(left !== undefined && { left }),
            ...(top !== undefined && { top }),
            ...(bottom !== undefined && { bottom }),
        },
    ]) as ViewStyle;

    // generate component testID or accessibilityLabel based on Platform.OS
    const blockID =
        Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

    if (safe) {
        return (
            <DismissKeyboard>
                <SafeAreaView {...blockID} {...rest} style={blockStyles}>
                    {children}
                </SafeAreaView>
            </DismissKeyboard>
        );
    }

    if (keyboard) {
        return (
            <DismissKeyboard>
                <KeyboardAwareScrollView {...blockID} {...rest} style={blockStyles}>
                    {children}
                </KeyboardAwareScrollView>
            </DismissKeyboard>
        );
    }

    if (scroll) {
        return (
            <DismissKeyboard>
                <ScrollView {...blockID} {...rest} style={blockStyles}>
                    {children}
                </ScrollView>
            </DismissKeyboard>
        );
    }

    if (gradient) {
        return (
            <DismissKeyboard>
                <LinearGradient
                    {...blockID}
                    colors={gradient}
                    style={blockStyles}
                    end={end || [1, 0]}
                    start={start || [0, 0]}
                    {...rest}>
                    {children}
                </LinearGradient>
            </DismissKeyboard>
        );
    }

    if (blur) {
        return (
            <BlurView
                {...blockID}
                tint={tint}
                intensity={intensity}
                style={blockStyles}>
                {children}
            </BlurView>
        );
    }

    return (
        <DismissKeyboard>
            <View {...blockID} {...rest} style={blockStyles}>
                {children}
            </View>
        </DismissKeyboard>
    );
};


const DismissKeyboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export default React.memo(Block);
