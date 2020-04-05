import { Component, ComponentChild, h, RefObject } from "preact";
import style from "./style.css";
import { useEffect } from "preact/hooks";


interface EditableProps {
    type: "input" | "textarea";
    placeholder: string;
    text: string | number;
    childRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
}

interface EditableState {
    isEditing: boolean;
}

export default class Editable extends Component<EditableProps, EditableState> {
    constructor() {
        super();
        this.state = {
            isEditing: false
        };
    }


    setEditing = (isEditing: boolean): void => {
        this.setState({ isEditing });
    };
    handleKeyDown = (event, type): void => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            this.setEditing(false);
        }
    };

    render(): ComponentChild {
        const { children, type, text, placeholder, childRef } = this.props;
        const { isEditing } = this.state;

        useEffect(() => {
            if (childRef.current && isEditing) {
                childRef.current.focus();
            }
        }, [isEditing, childRef]);


        return <section {...this.props}>
            {isEditing ? (
                <div
                    onBlurCapture={() => {
                        this.setEditing(false);
                    }}
                    onKeyDown={e => this.handleKeyDown(e, type)}
                >
                    {children}
                </div>
            ) : (
                <div
                    className={style.editable}
                    onClick={() => this.setEditing(true)}
                >
          <span>
            {text !== undefined ? text : placeholder || "Editable content"}
          </span>
                </div>
            )}
        </section>;
    }
}