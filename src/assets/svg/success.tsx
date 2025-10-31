import * as React                           from "react"
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg"

function SuccessSvg() {
    return (
        <Svg
            width={28}
            height={28}
            fill="none"
        >
            <Rect width={28} height={28} fill="#279700" rx={14}/>
            <G clipPath="url(#a)">
                <Path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M4 14C4 8.486 8.486 4 14 4s10 4.486 10 10-4.486 10-10 10S4 19.514 4 14Zm9.649 3.3 5.416-5.417a.832.832 0 1 0-1.178-1.179l-4.828 4.828-2.119-2.12a.832.832 0 1 0-1.178 1.179l2.708 2.708a.831.831 0 0 0 1.179 0Z"
                    clipRule="evenodd"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M4 4h20v20H4z"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SuccessSvg
