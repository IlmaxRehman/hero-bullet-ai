import { useState } from "react";
import axios from "axios";

function App() {
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("Backend Developer");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const examples = [
    "Built a FastAPI backend using Redis and Celery for transaction processing.",
    "Developed a fake news detection Chrome extension using NLP.",
    "Created a travel platform to compare and explore tour packages.",
    "Built an AI chatbot using Gemini API and React."
  ];

  const generateBullets = async () => {
    if (!description.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
          project_description: description,
          role: role,
        }
      );

      setOutput(res.data.bullets);
    } catch (error) {
      setOutput("Failed to generate bullets.");
    }

    setLoading(false);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <div className="text-center">

          <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-4">
            Powered by Gemini AI
          </span>

          <h1 className="text-5xl font-bold text-white">
            HeroBullet AI
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Transform project descriptions into ATS-optimized resume bullets
          </p>

        </div>

        <div className="mt-8">

          <textarea
            className="w-full h-44 rounded-2xl bg-slate-900 text-white border border-slate-700 p-5 outline-none focus:border-blue-500"
            placeholder="Describe your project..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex flex-wrap gap-2 mt-4">

            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setDescription(example)}
                className="px-3 py-2 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-slate-700"
              >
                Example {index + 1}
              </button>
            ))}

          </div>

          <select
            className="w-full mt-5 bg-slate-900 text-white border border-slate-700 rounded-xl p-4"
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
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            {loading
              ? "Generating AI-powered bullets..."
              : "Generate ATS Bullets"}
          </button>

        </div>

        {output && (
          <div className="mt-8">

            <h2 className="text-white text-xl font-semibold mb-4">
              Generated Resume Bullets
            </h2>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-gray-200 whitespace-pre-wrap">
              {output}
            </div>

            <button
              onClick={copyOutput}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              {copied ? "✓ Copied" : "Copy Output"}
            </button>

          </div>
        )}

        <div className="border-t border-slate-700 mt-10 pt-6 text-center">

          <p className="text-white font-semibold">
            Ilma Rehman
          </p>

          <p className="text-gray-400">
            ilmarehman022@gmail.com
          </p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
          >
            Built for Digital Heroes
          </a>

        </div>

      </div>

    </div>
  );
}

export default App;