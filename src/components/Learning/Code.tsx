// https://www.npmjs.com/package/@uiw/react-codemirror
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { SetStateAction, useCallback, useState } from 'react';
import { materialDark } from "@uiw/codemirror-theme-material";

export function Code() {
  const [value, setValue] = useState<string>("");

  const initialValue = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        
      </body>
    </html>
  `;

  const onChange = useCallback((val: SetStateAction<string>) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <>
      <CodeMirror
        theme={materialDark}
        value={initialValue}
        height="50vh"
        width='100%'
        extensions={[html()]}
        onChange={onChange}
      />
      <div dangerouslySetInnerHTML={{__html:value}} />
    </>
  )
}
