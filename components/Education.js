"use client";
import { motion } from "framer-motion";

export default function EducationAndSkills() {
  const skills = [
    "Good communication and interpersonal skill",
    "Good Negotiate",
    "Fluent English and Indonesian",
    "Database",
    "Adobe",
    "ORACLE",
    "SAP",
    "Microsoft Office (Word, Excel, PowerPoint)"
  ];

  return (
    <section
      id="education-skills"
      className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-12 text-center tracking-wide"
        >
          EDUCATION & SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* === Education Section === */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
              🎓 Education
            </h3>

            <div className="relative pl-6 border-l-4 border-blue-500">
              <div className="mb-6">
                <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Muhammadiyah University of Surakarta
                </h4>
                <p className="text-gray-600 mt-1 italic">
                  Bachelor of English Department
                </p>
                <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  2006 – 2011
                </span>
              </div>
            </div>
          </motion.div>

          {/* === Skills Section === */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
              💡 Skills & Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center hover:scale-105 hover:shadow-md transition-all"
                >
                  <span className="text-blue-800 font-medium text-sm sm:text-base">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
