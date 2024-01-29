// https://www.npmjs.com/package/@uiw/react-codemirror

import CodeMirror from '@uiw/react-codemirror';
import { SetStateAction, useCallback, useRef, useState } from 'react';
import { materialDark } from "@uiw/codemirror-theme-material";

import { TestTerminal } from "./TestTerminal"

import type { Extension } from '@uiw/react-codemirror';
import type { TestResults } from "@/types"

import classes from "./Code.module.css";

type Props = {
  initialValue: string
  extensions: Extension[]
  tests: (value: string) => Promise<TestResults[]>
}

export function Code({ initialValue, extensions, tests }: Props) {
  const testsAmount = useRef<number | null>(null)
  const [value, setValue] = useState<string>("");
  const [testResults, setTestResults] = useState<TestResults[]>([]);

  const onChange = useCallback((val: SetStateAction<string>) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const formatResult = async () => {
    const results = await tests(value)
    const newResults = results.reverse()
    if(!testsAmount.current) testsAmount.current = results.length
    const trueResults = newResults.slice(0, testsAmount.current);
    setTestResults(trueResults);
  }

  return (
    <div>
      <CodeMirror
        theme={materialDark}
        value={initialValue}
        height="40vh"
        width='840px'
        extensions={extensions}
        onChange={onChange}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
      <button
        className={classes.button}
        onClick={async () => {
          await formatResult()
        }}
        disabled={value === ""}
      >
        <PlayIcon /> 
        Run tests
      </button>
      <TestTerminal results={testResults} />
    </div>
  )
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="#185922"
      version="1.1"
      viewBox="0 0 17.804 17.804"
      xmlSpace="preserve"
    >
      <g>
        <path d="M2.067.043a.4.4 0 01.426.042l13.312 8.503a.41.41 0 01.154.313c0 .12-.061.237-.154.314L2.492 17.717a.402.402 0 01-.25.087l-.176-.04a.399.399 0 01-.222-.361V.402c0-.152.086-.295.223-.359z"></path>
      </g>
    </svg>
  );
}
