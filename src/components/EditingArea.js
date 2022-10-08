import React, { useState } from 'react'
import Editor from '@monaco-editor/react'

const componentName = 'EA';

export const EditingArea = ({ onChange, code }) => {

    const [script, setScript] = useState(code || '');


    const handleEditorChange = (value) => {
        onChange(componentName, value);
    };

    return (
        <Editor
            className='mt-5 mb-2 border border-2 rounded-3'
            height='40vh'
            width={`100%`}
            language='xml'
            value={code}
            onChange={handleEditorChange}
            defaultValue='// A test comment'
        />
    )
}
