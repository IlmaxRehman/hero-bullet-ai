import ExampleCards from "./ExampleCards";

export default function InputCard({
  description,
  setDescription,
  role,
  setRole,
  generateBullets,
  loading
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-3">
        Describe your project
      </h2>

      <p className="text-slate-500 mb-5">
        Enter project details and generate ATS-friendly bullets.
      </p>

      <textarea
        className="w-full h-40 border border-pink-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Describe your project..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <ExampleCards setDescription={setDescription} />

      <select
        className="w-full border border-purple-200 rounded-2xl p-4 mt-5"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
        <option>AI/ML Engineer</option>
        <option>DevOps Engineer</option>
      </select>

      <button
        onClick={generateBullets}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl mt-5 font-semibold"
      >
        {loading
          ? "Generating AI-powered bullets..."
          : "Generate ATS Bullets"}
      </button>

    </div>
  );
}