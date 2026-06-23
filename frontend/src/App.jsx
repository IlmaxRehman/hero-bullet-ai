import { useState } from "react";
import axios from "axios";

import Hero from "./components/Hero";
import InputCard from "./components/InputCard";
import OutputCard from "./components/OutputCard";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

function App() {
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("Backend Developer");
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateBullets = async () => {
    if (!description.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://hero-bullet-ai.onrender.com/generate",
        {
          project_description: description,
          role,
        }
      );

      const bullets = response.data.bullets
        .split("\n")
        .filter((line) => line.trim() !== "");

      setOutput(bullets);
    } catch (error) {
      console.error(error);

      setOutput([
        "Failed to generate resume bullets. Please try again.",
      ]);
    }

    setLoading(false);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output.join("\n"));

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-6">

      <div className="max-w-6xl mx-auto">

        <Hero />

        <InputCard
          description={description}
          setDescription={setDescription}
          role={role}
          setRole={setRole}
          generateBullets={generateBullets}
          loading={loading}
        />

        <OutputCard
          output={output}
          copied={copied}
          copyOutput={copyOutput}
        />

        <Benefits />

        <Footer />

      </div>

    </div>
  );
}

export default App;