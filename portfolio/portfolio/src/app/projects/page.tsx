const projects = [
  {
    title: "Obesity Risk Prediction",
    description: "A machine learning project using LightGBM.",
  },
  {
    title: "Design/Printing Web App",
    description: "Built with React, Tailwind, and Flask for Epson.",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>

      {/* Project Cards */}
      <div className="mt-8 grid gap-6 max-w-2xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm 
            hover:shadow-md transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
