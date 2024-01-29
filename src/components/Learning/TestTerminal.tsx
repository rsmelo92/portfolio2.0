import type { TestResults } from "@/types"
import clsx from "clsx"

import classes from "./TestTerminal.module.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  results: TestResults[]
}

export const TestTerminal = (props: Props) => {
  const testsAmount = useRef<number | null>(null)
  const [results, setResults] = useState(props.results);
  const [testStatus, setTestStatus] = useState({ pass:0, fail: 0 })

  useEffect(() => {
    const totalTests = props.results.reduce((acc, cur) => {
      if(cur.status === "pass") return { ...acc, pass: acc.pass + 1}
      if(cur.status === "fail") return { ...acc, fail: acc.fail + 1}
      return acc
    }, { pass: 0, fail: 0 })
    
    setTestStatus(totalTests);
    setResults(props.results)
  }, [props.results])
  
  return (
    <div className={classes.terminal}>
    {results.length > 0 && (
      <div className={classes.result}>
        <p>Tests: {testsAmount.current}</p>
        <p>Pass: {testStatus.pass}</p>
        <p>Fail: {testStatus.fail}</p>
      </div>
    )}
      {results.length > 0 ? 
        results.map(({ status }, idx) => (
          <p key={idx} className={classes.result}>
            <span className={clsx([classes.tag, status === "pass"? classes.pass : classes.fail])}>{status?.toUpperCase()}</span>
            Test case {results.length - idx}
          </p>
        )) : (
          <div className={classes.input}>
            <p>$ Change the code and press 'Run Tests'</p>
            <div className={classes.cursor}></div>
          </div>
        )
      }
    </div>
  )
}
