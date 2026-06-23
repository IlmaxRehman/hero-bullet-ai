export default function Benefits() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-bold text-lg">
          ATS Optimized
        </h3>
        <p className="text-slate-500 mt-2">
          Generate recruiter-friendly bullet points.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-bold text-lg">
          AI Powered
        </h3>
        <p className="text-slate-500 mt-2">
          Uses AI to convert project descriptions into ATS-friendly resume bullet points.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-bold text-lg">
          One Click Copy
        </h3>
        <p className="text-slate-500 mt-2">
          Instantly copy generated bullets.
        </p>
      </div>

    </div>
  );
}