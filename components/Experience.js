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
        "Stay informed about the company's products and industry trends to effectively communicate benefits to customers",
        "Conduct market analysis to identify new opportunities and potential clients",
        "Prepare sales reports and forecasts to track performance and inform management",
        "Work with marketing and product development teams to align sales efforts with company goals"
      ]
    },
    {
      title: "SALES EXECUTIVE",
      company: "PT SUKANDA DJAYAJ DIAMOND FOOD INDONESIA Tbk",
      period: "2024",
      icon: "🎯",
      responsibilities: [
        "Identify and understand customer needs",
        "Present, promote, and sell products or services",
        "Establish and maintain positive customer relationships",
        "Reach out to customer leads through cold calling",
        "Achieve sales targets and outcomes",
        "Greet customers and help them find items in the store",
        "Check stock availability and provide information about items",
        "Ring up purchases and elevate complaints to management",
        "Keep track of inventory"
      ]
    },
    {
      title: "CUSTOMER SERVICE & ADMIN SUPPORT SALES",
      company: "PT SUKANDA DJAYAJ DIAMOND FOOD INDONESIA Tbk",
      period: "2014-2024",
      icon: "🎯",
      responsibilities: [
        "Dealing with customers order by phone (call center), live chat or email from a contact center",
        "Finding relevant information on the system",
        "Arranging to post out information or goods to customers",
        "Create delivery document and invoice for customers"
      ]
    },
    {
      title: "HBD STAFF",
      company: "PT. OHSUNG ELECTRONIC INDONESIA",
      period: "2012-2013",
      icon: "🎯",
      responsibilities: [
        "Support the development and implementation of HR initiatives and systems",
        "Create and implement effective onboarding plans",
        "Be actively involved in recruitment by preparing job descriptions, and managing the hiring process"
      ]
    },
    {
      title: "COLLECTION ADMINISTRATOR SUPPORT",
      company: "SINARMAS MULTIFINANCE",
      period: "2011-2012",
      icon: "🎯",
      responsibilities: [
        "Organizing and keeping track of customer's outstanding debt accounts",
        "Contacting debtors to learn more about their payment status",
        "Negotiating payments and payment plans with customers"
      ]
    },
    {
      title: "FRONT LINER",
      company: "PRAMESTHI SURAKARTA HOTEL",
      period: "2011",
      icon: "🎯",
      responsibilities: [
        "Greet guests as they arrive at a hotel",
        "Check guests in and out, and give them their room keys",
        "Bookings (by telephone or email), prepare bills and take payments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 10 years of experience in sales and customer service across various industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
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
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}