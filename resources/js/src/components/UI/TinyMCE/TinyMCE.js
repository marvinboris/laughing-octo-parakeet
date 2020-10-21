import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default ({ name, value = '', onChange }) => {
    return <Editor
        apiKey={process.env.TINY_API_KEY}
        cloudChannel='5-stable'
        onChange={onChange}
        tagName='div'
        textareaName={name}
        value={value}
    />;
};