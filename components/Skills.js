export default function Skills() {
  const skills = [
    "Good communication and interpersonal skill",
    "Good Negotiate", 
    "Fluent English and Indonesian",
    "Database Management",
    "Adobe Creative Suite",
    "ORACLE Database",
    "SAP ERP System",
    "Microsoft Office (Word, Excel, PowerPoint)"
  ];

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SKILLS & COMPETENCIES</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-blue-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}