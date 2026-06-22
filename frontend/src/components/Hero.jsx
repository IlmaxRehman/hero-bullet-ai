export default function Hero() {
  return (
    <div className="text-center mb-10">

      <h1 className="text-6xl font-bold text-slate-900">
        HeroBullet
        <span className="text-pink-500"> AI</span>
      </h1>

      <h2 className="mt-6 text-5xl font-bold leading-tight">
        Turn your project ideas into
        <br />
        <span className="text-pink-500">
          ATS-friendly
        </span>{" "}
        resume bullets
      </h2>

      <p className="mt-5 text-xl text-slate-600">
        AI-powered bullets that highlight impact,
        not just tasks.
      </p>

      <div className="inline-block mt-5 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
        Powered by Gemini AI
      </div>

    </div>
  );
}