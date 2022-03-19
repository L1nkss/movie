import devWarning from "../../utils/devWarning";
import {ButtonProps} from "./Button.interface";
import {ButtonHtmlTypes, ButtonTypes} from "./Button.enums";

const Button = (props: ButtonProps) => {
    const {
        type = ButtonTypes.default,
        icon,
        children,
        htmlType = ButtonHtmlTypes.button,
    } = props;
    // devWarning(false, 'Button', 'Ошибка')

    if (!children && !icon) {
        devWarning(false, 'Button', 'Need to declare icon or children')
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const {onClick, disabled} = props;
    }

    return (
        <button
            type={htmlType}
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}

export default Button;