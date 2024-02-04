"use client"
import { useState } from "react"


function HomePage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (

      <section className="h-screen flex justify-center">
        <form className="py-20">
          <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Nombre completo" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}/>
          <input type="email" id="email" placeholder="Email" className="border p-2 mb-4 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <textarea id="description" className="border p-2 mb-4 w-full resize-none rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="bg-gray-400 px-3 py-2"
           onClick={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
            >
            Send email
          </button>

        </form>
      </section>
  )
}

export default HomePage
