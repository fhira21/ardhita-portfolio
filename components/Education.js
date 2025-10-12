export default function Education() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">EDUCATION</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-800">
                  Muhammadiyah University of Surakarta
                </h3>
                <p className="text-gray-600 mt-1">Bachelor of English Department</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                2006 – 2011
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}