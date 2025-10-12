'use client'
import { useState } from 'react'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'setyaningrumardhita@gmail.com',
      link: 'mailto:setyaningrumardhita@gmail.com',
      description: 'Email saya kapan saja'
    },
    {
      icon: '📞',
      title: 'WhatsApp',
      value: '+62 812-8188-2188',
      link: 'https://wa.me/6281281882188',
      description: 'Hubungi via WhatsApp'
    }
  ]

  const sendEmail = () => {
    const mailtoLink = `mailto:setyaningrumardhita@gmail.com?subject=${encodeURIComponent(subject || 'Message from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`
    window.location.href = mailtoLink
  }

  const sendWhatsApp = () => {
    const whatsappMessage = `Halo, saya ${name}${email ? ` (${email})` : ''}. ${subject ? `\nSubject: ${subject}` : ''}\n\n${message}`
    const whatsappLink = `https://wa.me/6281281882188?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tertarik bekerja sama? Mari berdiskusi tentang bagaimana saya bisa membantu mencapai target penjualan Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
              
              <div className="space-y-6">
                {contactInfo.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group hover:shadow-lg"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{method.title}</h4>
                      <p className="text-gray-300 text-lg mt-1">{method.value}</p>
                      <p className="text-sm text-gray-400 mt-2">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Response Info */}
              <div className="mt-8 p-6 bg-blue-600/20 rounded-xl border border-blue-500/30">
                <h4 className="font-semibold text-lg mb-2">⚡ Quick Response</h4>
                <p className="text-blue-200 text-sm">
                  Biasanya merespons dalam 1-2 jam selama jam kerja. Jangan ragu untuk menghubungi!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="Pembicaraan project"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none transition-colors"
                    placeholder="Ceritakan tentang project atau kebutuhan Anda..."
                  ></textarea>
                </div>

                {/* Send Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={sendEmail}
                    disabled={!message}
                    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg disabled:hover:shadow-none"
                  >
                    <span>📧</span>
                    Send via Email
                  </button>
                  
                  <button 
                    onClick={sendWhatsApp}
                    disabled={!message}
                    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg disabled:hover:shadow-none"
                  >
                    <span>💬</span>
                    Send via WhatsApp
                  </button>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-3 text-center">Atau hubungi langsung:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="mailto:setyaningrumardhita@gmail.com"
                      className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-all duration-300 text-center font-medium text-sm"
                    >
                      📧 Email Now
                    </a>
                    <a
                      href="https://wa.me/6281281882188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-all duration-300 text-center font-medium text-sm"
                    >
                      💬 WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ardhita Setyaningrum. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}