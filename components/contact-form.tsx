"use client"

import React, { FormEvent, useState } from "react"
import { FaRegPaperPlane } from "react-icons/fa6"
import Swal from 'sweetalert2'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.target as HTMLFormElement
    const formData: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0",
          Origin: window.location.origin
        },
        body: JSON.stringify({
          access_key: "2487e35a-6446-464c-8551-613c366c070b",
          subject: "New Contact Form Submission",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          domain: window.location.host,
          botcheck: false
        })
      })

      const data = await response.json()
      console.log("Web3Forms response:", data)

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          icon: "success"
        })
        form.reset()
      } else if (data.message?.toLowerCase().includes('spam')) {
        Swal.fire({
          title: "Warning!",
          text: "Your message was flagged as spam. Please try again with different content.",
          icon: "warning"
        })
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      Swal.fire({
        title: "Error!",
        text: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        icon: "error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-foreground text-sm mb-2" htmlFor="name">
            Name *
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full p-3 bg-background/5 placeholder:text-muted-foreground rounded-lg focus:ring-transparent focus-visible:outline-none text-foreground border border-input hover:border-accent focus:border-ring focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div>
          <label className="block text-foreground text-sm mb-2" htmlFor="email">
            Email *
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full p-3 bg-background/5 placeholder:text-muted-foreground rounded-lg focus:ring-transparent focus-visible:outline-none text-foreground border border-input hover:border-accent focus:border-ring focus:ring-2 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-foreground text-sm mb-2" htmlFor="phone">
            Phone *
          </label>
          <input
            name="phone"
            type="tel"
            id="phone"
            placeholder="+923123456789"
            className="w-full p-3 bg-background/5 placeholder:text-muted-foreground rounded-lg focus:ring-transparent focus-visible:outline-none text-foreground border border-input hover:border-accent focus:border-ring focus:ring-2 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-foreground text-sm mb-2" htmlFor="message">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          className="w-full p-3 bg-background/5 placeholder:text-muted-foreground rounded-lg focus:ring-transparent focus-visible:outline-none text-foreground border border-input hover:border-accent focus:border-ring focus:ring-2 focus:ring-ring h-32"
          required
        ></textarea>
      </div>
      <div className="mt-6">
        <div className="relative block mt-8 line">
          <button 
            type="submit"
            disabled={isLoading}
            className="relative inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <span>Sending...</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-primary-foreground animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <FaRegPaperPlane className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
