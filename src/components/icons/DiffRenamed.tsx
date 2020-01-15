import * as React from "react";
import icon from "./icons/diff-renamed.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 14,
        height: 16
    }
});

export const DiffRenamed = (props) => {
    const {style} = props;
    return <Icon src={icon} style={[styles.icon, style]} />
};

