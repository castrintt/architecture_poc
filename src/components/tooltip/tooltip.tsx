import React from 'react';
import {TooltipTypes} from "@components/tooltip/tooltip.types";
import Tooltip from 'react-native-walkthrough-tooltip';
import {Text, TouchableOpacity} from "react-native";
import {styles} from "@components/tooltip/tooltip.styles";


const ControlledTooltip = ({children, text}: TooltipTypes) => {
    const [toolTipVisible, setToolTipVisible] = React.useState(false);
    return (
        <Tooltip
            isVisible={toolTipVisible}
            content={<Text style={styles.tooltipText}>{text}</Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
            showChildInTooltip={false}
            contentStyle={styles.tooltipContentStyle}
        >
            <TouchableOpacity onPress={() => setToolTipVisible(true)}
            >
                {children}
            </TouchableOpacity>
        </Tooltip>
    );
};

export default ControlledTooltip;