import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{
    type: 'bot',
    text: "Hi there! I'm your AI assistant. How can I help you with your studies today?"
  }]);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleSend = e => {
    e.preventDefault();
    if (message.trim() === '') return;
    // Add user message to chat
    setChatHistory([...chatHistory, {
      type: 'user',
      text: message
    }]);
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'bot',
        text: "Thanks for your question. I'm here to help with your coursework and assignments. Could you provide more details so I can assist you better?"
      }]);
    }, 1000);
    setMessage('');
  };
  return <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col" style={{
      height: '400px'
    }}>
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white text-blue-700 rounded-full p-1 mr-2">
                <MessageCircleIcon className="h-4 w-4" />
              </div>
              <h3 className="font-medium">AI Study Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {chatHistory.map((msg, index) => <div key={index} className={`mb-3 ${msg.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${msg.type === 'user' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>)}
          </div>
          <form onSubmit={handleSend} className="border-t p-4 flex">
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask me anything about your courses..." className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-700 text-white rounded-r-md px-4 hover:bg-blue-800">
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </div> : <button onClick={toggleChat} className="bg-blue-700 text-white rounded-full p-3 shadow-lg hover:bg-blue-800 transition-colors flex items-center">
          <MessageCircleIcon className="h-6 w-6" />
        </button>}
    </div>;
}