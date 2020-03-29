import { Component, createRef, h } from "preact";
import CM, { EditorFromTextArea } from "codemirror";

interface CodeMirrorProps {
    code: string;
    height?: string;
    width?: string;
    config: CM.EditorConfiguration;

    onChange?(value: string): void;
}

export default class CodeMirror extends Component<CodeMirrorProps, {}> {
    ref = createRef<HTMLTextAreaElement>();
    codeMirror: EditorFromTextArea;

    constructor() {
        super();
    }

    codemirrorValueChanged = (doc, change) => {
        const { onChange } = this.props;
        if (onChange && change.origin !== "setValue") {
            onChange(doc.getValue());
        }
    };

    componentDidMount(): void {
        const { current } = this.ref;
        const { config, code, height, width } = this.props;
        this.codeMirror = CM.fromTextArea(current, config);
        this.codeMirror.on("change", this.codemirrorValueChanged);
        this.codeMirror.setValue(code);
        this.codeMirror.setSize(width, height);
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(nextProps: Readonly<CodeMirrorProps>, nextContext: any): void {
        const { height, width, code } = nextProps;
        const { code: currentCode } = this.props;
        this.codeMirror.setSize(width, height);
        if (currentCode != code) {
            const prevScrollPosition = this.codeMirror.getScrollInfo();
            const prevCursor = this.codeMirror.getCursor();
            this.codeMirror.setValue(code);
            this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
            this.codeMirror.setCursor(prevCursor);
        }

    }

    render() {
        return (
            <textarea ref={this.ref}></textarea>
        );
    }
}