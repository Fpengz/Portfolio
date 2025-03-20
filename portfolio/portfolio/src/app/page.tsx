export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full text-center px-6">
      
      {/* Name Header */}
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Hi, I'm Wang Zhoufu
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">
        Electrical & Electronic Engineering & Economics @ NTU Singapore
      </p>

      {/* About Section */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-2xl leading-relaxed">
        I'm passionate about <span className="font-semibold">Machine Learning</span> and <span className="font-semibold">Finance</span>.
        Currently seeking <span className="font-semibold">internship and research opportunities</span> 
        in these fields during the summer or the term period. 
      </p>

      {/* Contact Button */}
      <a 
        href="/contact"
        className="mt-6 px-6 py-3 text-lg font-medium text-white bg-gray-900 dark:bg-blue-500 rounded-lg shadow-md 
        hover:opacity-80 transition-all duration-200 ease-in-out"
      >
        Get in Touch
      </a>
      
    </section>
  );
}
