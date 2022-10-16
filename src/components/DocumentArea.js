import Editor from '@monaco-editor/react';
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { useState } from 'react';

const componentName='LA';


export const DocumentArea = ({onChange, documentXml}) => {

    const handleLoadChange = (value) => {
        onChange(componentName, value);
    };

    return (
    <div>
        <Editor
        className='mt-5 mb-2 border border-2 rounded-3'
         height='40vh'
         width={`100%`}
         language='xml'
        theme='vs-dark'
        onChange={handleLoadChange}
        value={documentXml}
        />
    </div>
    )
    //<button className="p-2 btn btn-primary" id='button-editor' type="button">Load</button>
}