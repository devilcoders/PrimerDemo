import * as React from "react";
import icon from "./icons/git-branch.svg"
import {Icon} from "./Icon";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 10,
        height: 16
    }
});

export const GitBranch = (props) => {
    const {style} = props;
    return <Icon src={icon} style={[styles.icon, style]} />
};

