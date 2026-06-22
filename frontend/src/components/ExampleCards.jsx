const examples = [
  {
    title: "Backend API",
    description:
      "Built a FastAPI backend using Redis and Celery for transaction processing."
  },
  {
    title: "AI Project",
    description:
      "Developed a Gemini-powered chatbot for answering customer support queries."
  },
  {
    title: "Chrome Extension",
    description:
      "Built a Chrome extension that detects misinformation using NLP techniques."
  },
  {
    title: "Travel Platform",
    description:
      "Created a travel platform for comparing and exploring tour packages."
  }
];

export default function ExampleCards({ setDescription }) {
  return (
    <div className="grid md:grid-cols-4 gap-3 mt-5">

      {examples.map((item, index) => (
        <button
          key={index}
          onClick={() => setDescription(item.description)}
          className="bg-pink-50 border border-pink-200 rounded-2xl p-3 text-left hover:bg-pink-100 transition"
        >
          <div className="font-semibold text-slate-700">
            {item.title}
          </div>

          <div className="text-xs text-slate-500 mt-1">
            Click to use
          </div>
        </button>
      ))}

    </div>
  );
}