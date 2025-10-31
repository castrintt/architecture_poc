import type { ReactNode } from "react";
import type { DimensionValue } from "react-native";
import {EButtonCommonStyle}    from "../../../@domain/enum/buttonStyle.enum";

export interface ButtonTypes {
  onPress?: () => void;
  description?: string;
  maxWidth?: DimensionValue;
  maxHeight?: DimensionValue;
  style?: EButtonCommonStyle;
  icon?: ReactNode;
  disabled?: boolean;
  accessibilityLabel?: string;
}
