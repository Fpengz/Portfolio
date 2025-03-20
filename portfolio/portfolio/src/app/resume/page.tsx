export default function Resume() {
  return (
    <section className="flex flex-col items-center  h-screen w-full text-center px-6">
      <h1 className="text-3xl font-bold">Résumé</h1>

      {/* Embedded PDF for in-browser viewing */}
      <iframe
        src="/resume.pdf"
        className="w-full max-w-3xl h-[70vh] mt-6 border rounded-md shadow-md"
      />

      {/* Download Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        className="mt-4 px-6 py-3 text-lg font-medium text-white bg-gray-900 dark:bg-blue-500 rounded-lg shadow-md 
        hover:opacity-80 transition-all duration-200 ease-in-out"
      >
        Here
      </a>
    </section>
  );
}
