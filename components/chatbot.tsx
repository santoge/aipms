"use client"

import type React from "react"
import { useState } from "react"

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const sendMessage = () => {
    if (input.trim() !== "") {
      let processedMessage = input.trim()
      // Replace phone numbers
      processedMessage = processedMessage.replace(/\d{10}/g, "9562934815")
      // Replace email addresses
      processedMessage = processedMessage.replace(/[\w.-]+@[\w.-]+\.\w+/g, "hello@adhithyangroupofinstitutions")

      setMessages([...messages, "You: " + processedMessage])
      setInput("")

      // Simulate a bot response (replace with actual bot logic)
      setTimeout(() => {
        let botResponse = "This is a sample bot response."
        botResponse = botResponse.replace(/\d{10}/g, "9562934815")
        botResponse = botResponse.replace(/[\w.-]+@[\w.-]+\.\w+/g, "hello@adhithyangroupofinstitutions")
        setMessages([...messages, "You: " + processedMessage, "Bot: " + botResponse])
      }, 500)
    }
  }

  return (
    <div className="chatbot-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={input} onChange={handleInputChange} placeholder="Type your message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Chatbot
