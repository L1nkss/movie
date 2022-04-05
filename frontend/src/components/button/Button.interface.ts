import React from "react";
import {ButtonHtmlTypes, ButtonTypes} from "./Button.enums";

export interface ButtonProps {
    type?: keyof ButtonTypes;
    icon?: string;
    children?: React.ReactNode;
    loading?: boolean;
    htmlType?: ButtonHtmlTypes,
    onClick?: React.MouseEventHandler<HTMLElement>,
    disabled?: boolean
}