export default function OutputCard({
  output,
  copied,
  copyOutput
}) {
  if (output.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-slate-800">
          Generated Resume Bullets
        </h2>

        <button
          onClick={copyOutput}
          className="bg-green-500 text-white px-5 py-2 rounded-xl"
        >
          {copied ? "✓ Copied" : "Copy All"}
        </button>

      </div>

      <div className="space-y-4">

        {output.map((bullet, index) => (
          <div
            key={index}
            className="bg-pink-50 border border-pink-200 rounded-2xl p-4"
          >
            <div className="flex gap-3">

              <span className="text-green-600 font-bold">
                ✓
              </span>

              <p className="text-slate-700">
                {bullet}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}