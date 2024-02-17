"use client"
import { useState, useEffect } from "react"

const CustomAlert = ({message, onClose}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-4 rounded-md">
      {message}
    </div>
  );
};


function HomePage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);


  const handleSendEmail = async () => {
    setIsAlertVisible(true);

    if (fullName === '' || email === '' || message === '') {
      setAlertMessage("Complete todos los campos");

      return;
    }



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
     
    if (res.ok) {
      setAlertMessage("Mensaje enviado con éxito");
    } else {
      setAlertMessage("Error al enviar el mensaje");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    setAlertMessage("Error al enviar el mensaje");
  }


    
    setFullName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
    }, 2000);

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
          {isAlertVisible && (
          <CustomAlert
            message={alertMessage}
            onClose={() => setIsAlertVisible(false)}
          />
        )}
      
        </form>
      </section>
  )
}

export default HomePage
