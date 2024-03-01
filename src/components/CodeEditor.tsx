import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { Theme } from './theme-switcher';
import React from 'react';

type CodeEditorProps = {
    value: string;
    theme: Theme;
    onChange?: (value: string) => void;
};
export default function CodeEditor(props: Readonly<CodeEditorProps>) {
    const editorTheme = props.theme == 'light' ? githubLight : githubDark;
    return (
        <CodeMirror
            value={props.value}
            onChange={props.onChange}
            extensions={[javascript({ jsx: true })]}
            theme={editorTheme}
        />
    );
}
