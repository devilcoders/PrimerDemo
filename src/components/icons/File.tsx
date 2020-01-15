import * as React from "react";
import icon from "./icons/file.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 12,
        height: 16
    }
});

export const File = (props) => {
    const {style} = props;
    return <Icon src={icon} style={[styles.icon, style]} />
};

