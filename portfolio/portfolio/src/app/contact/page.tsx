export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-lg leading-relaxed">
        Feel free to reach out to me via email for {""}
        <span className="font-bold">internship or research opportunities</span>
      </p>

      {/* Email Links */}
      <div className="mt-6 space-y-3">
        <a 
          href="mailto:wzf5350@gmail.com" 
          className="block text-lg font-medium text-blue-500 dark:text-blue-400 hover:underline"
        >
          wzf5350@gmail.com
        </a>
        <a 
          href="mailto:wa0001fu@e.ntu.edu.sg" 
          className="block text-lg font-medium text-blue-500 dark:text-blue-400 hover:underline"
        >
          wa0001fu@e.ntu.edu.sg
        </a>
      </div>
    </section>
  );
}
