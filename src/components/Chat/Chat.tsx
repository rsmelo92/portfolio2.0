import * as webllm from "@mlc-ai/web-llm";
import { useEffect, useRef, useState } from "react";

import classes from './Chat.module.css'

export const Chat = () => {
  const [text, setText] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [loadingAmount, setLoadingAmount] = useState("0")
  const inputRef = useRef<HTMLInputElement>(null)
  const chat = useRef<webllm.ChatWorkerClient | null>(null)

  const isChromiumBased = navigator.userAgent.includes("Chrome")
  let focusTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    return () => {
      if(focusTimeout) clearTimeout(focusTimeout)
    }
  }, [focusTimeout])
  

  const instantiateChat = async () => {
    const newChat = new webllm.ChatWorkerClient(new Worker(
      new URL('./worker.ts', import.meta.url),
      { type: 'module' }
    ));

    newChat.setInitProgressCallback((report: webllm.InitProgressReport) => {
      setLoadingAmount(`${Math.round(report.progress * 100)}`)
      console.log(report.text);
    });

    await newChat.reload("Llama-2-7b-chat-hf-q4f32_1");
    // await newChat.reload("RedPajama-INCITE-Chat-3B-v1-q4f32_1");
    return newChat
  }

  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    const prompt = inputValue
    if(prompt === "") return

    // Webpgu only works in chromium based browsers
    if(!isChromiumBased) {
      setText(["Please use a chromium based browser otherwise I can't load the LLM model. Chrome or Edge for example", prompt, ...text]);
      setInputValue("")
      return
    }

    setText(["...", prompt, ...text])
    setInputValue("")
    setIsDisabled(true)
    
    if(!chat.current) chat.current = await instantiateChat()

    await chat.current.generate(prompt, (_step: number, message: string) => {
      const strippedMessage = message.replace(/<human/gim, "")
      setText([strippedMessage, prompt, ...text])
    });

    setIsDisabled(false)
    focusTimeout = setTimeout(() => {
      inputRef.current?.focus()
    }, 200);
  }

  const isLoading = Number(loadingAmount) > 0 && Number(loadingAmount) < 100

  return (
    <div className={classes.wrapper}>
      <div className={classes.chatWrapper}>
        <div
          className={classes.loader} 
          style={{ 
            top: `${isLoading ? 8 : -46}px` 
          }}
        >
          <span className={classes.pill}>
            Downloading model {loadingAmount}%
          </span>
        </div>
        <div className={classes.chat}>
          {text.map((item, idx) => {
            const isEven = idx%2 === 0;
            return (
              <div key={idx} className={classes.bubble}>
                <span className={classes.icon}>{!isEven ? "😎" : "✨"}</span>
                <p className={classes.reply}>{item}</p>
              </div>
            )
          })}
          <div className={classes.bubble}>
            <span className={classes.icon}>✨</span>
            <p className={classes.reply}>Hello I'm a in-browser LLM, ask me anything!</p>
          </div>
        </div>
        <form className={classes.form}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type anything"
            disabled={isDisabled}
            value={inputValue}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value)
            }}
          />
          <button type="submit" onClick={onSubmit}>Send</button>
        </form>
      </div>
    </div>
  )
}
