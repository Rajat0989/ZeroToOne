"use client"
import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const Roadmap = () => {
    const [input, setInput] = useState("");
    const [aiResponse, setaiResponse] = useState("");
    const genAI = new GoogleGenerativeAI('AIzaSyC7a9vdSyLffRPzhefJ0QDqSvt0UfUHWI0')
    const model = genAI.getGenerativeModel({model: 'gemini-pro'})

    async function run(){
        const prompt = `Generate the best possible roadmaps to accomplish the task ${input}. Generate the roadmap step wise listing down all the steps that should be followed in detail.`
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text();
        setaiResponse(text);
    }

    const handleClick = () => {
        run();
    }

    const handleInputChange = (e:any) =>{
        setInput(e.target.value)
    }

  return (
    <div>
        <input type="text" value={input} onChange={handleInputChange} placeholder="Enter the task"/>
        <button onClick={handleClick}>Generate Roadmap</button>
        <p>{aiResponse}</p>

      {/* Add the roadmap details here */}
    </div>
  )
}

export default Roadmap
