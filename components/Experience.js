'use client'
import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "AREA SALES PROMOTION REPRESENTATIVE",
      company: "PT SARI AGROTAMA PERSADA - WILMAR INDONESIA",
      period: "2025",
      icon: "🎯",
      responsibilities: [
        "Build and maintain relationships with clients",
        "Develop and implement sales strategies to meet or exceed sales targets",
        "Stay informed about the company’s products and industry trends to effectively communicate benefits to customers",
        "Conduct market analysis to identify new opportunities and potential clients",
        "Prepare sales reports and forecasts to track performance and inform management",
        "Work with marketing and product development teams to align sales efforts with company goals",
      ],
    },
    {
      title: "SALES EXECUTIVE",
      company: "(PT SUKANDA DJAYA/ DIAMOND FOOD INDONESIA Tbk",
      period: "2024",
      icon: "💼",
      responsibilities: [
        "Identify and understand customer needs.",
        "Present, promote, and sell products or services.",
        "Establish and maintain positive customer relationships.",
        "Reach out to customer leads through cold calling.",
        "Achieve sales targets and outcomes.",
        "Greet customers and help them find items in the store.",
        "Check stock availability and provide information about items.",
        "Ring up purchases and elevate complaints to management.",
        "Keep track of inventory.",
      ],
    },
    {
      title: "CUSTOMER SERVICE & ADMIN SUPPORT SALES",
      company: "PT SUKANDA DJAYA/ DIAMOND FOOD INDONESIA Tbk",
      period: "2014-2024",
      icon: "📞",
      responsibilities: [
        "Dealing with customers order by phone (call center), live chat or email from a contact center",
        "Finding relevant information on the system.",
        "Arranging to post out information or goods to customers.",
        "Create delivery document and invoice for customers.",
      ],
    },
    {
      title: "HRD STAFF",
      company: "PT. OHSUNG ELECTRONIC INDONESIA",
      period: "2012-2013",
      icon: "👩‍💼",
      responsibilities: [
        "Support the development and implementation of HR initiatives and systems",
        "Create and implement effective onboarding plans",
        "Be actively involved in recruitment by preparing job descriptions, and managing the hiring process",
      ],
    },
    {
      title: "COLLECTION ADMINISTRATOR SUPPORT",
      company: "SINARMAS MULTIFINANCE",
      period: "2011-2012",
      icon: "📊",
      responsibilities: [
        "Organizing and keeping track of customer's outstanding debt accounts, contacting debtors to learn more about",
        "their payment status and negotiating payments and payment plans with customers.",
      ],
    },
    {
      title: "FRONT LINER",
      company: "PRAMESTHI SURAKARTA HOTEL",
      period: "2011",
      icon: "🏨",
      responsibilities: [
        "Greet guests as they arrive at a hotel",
        "Check guests in and out, and give them their room keys.",
        "Bookings (by telephone or email), prepare bills and take payments.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 10 years of experience in sales and customer service
            across various company's
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="relative hidden lg:block max-w-6xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-blue-200 before:rounded-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row items-center mb-12 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Card */}
              <div
                className={`w-full lg:w-[45%] bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 ${
                  index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{exp.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
