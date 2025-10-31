import {memo} from "react";
import Svg, {Path} from "react-native-svg";

function AttentionSvg() {
    return (
        <Svg width={18} height={19} fill="none">
            <Path
                fill="#fff"
                d="M8.709.841A8.662 8.662 0 0 0 .049 9.5c0 4.78 3.88 8.659 8.66 8.659s8.659-3.88 8.659-8.659c0-4.78-3.88-8.659-8.66-8.659Zm.866 12.988H7.843v-1.731h1.732v1.731Zm0-3.463H7.843V5.17h1.732v5.195Z"
            />
        </Svg>
    );
}

export default memo(AttentionSvg);
