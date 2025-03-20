const projects = [
  { title: "Obesity Risk Prediction", description: "A machine learning project using LightGBM." },
  { title: "Design/Printing Web App", description: "Built with React, Tailwind, and Flask for Epson." },
];

export default function Projects() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="p-4 border-b dark:border-gray-600">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>
      ))}
    </section>
  );
}
