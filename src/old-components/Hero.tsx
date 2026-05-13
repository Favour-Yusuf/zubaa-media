// components/Hero.tsx

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          We Are The Record Label
          <br />
          For <span className="text-brand">Creators</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
          We partner with creators to build profitable digital offers and scale them
          with our 3-step system designed to reduce acquisition costs,
          improve show rates, and turn cold traffic into buyers.
        </p>

        <div className="mt-10">
          <a
            href="#apply"
            className="inline-block bg-brand text-black px-8 py-4 rounded-xl font-semibold
            shadow-[0_0_40px_rgba(16,185,129,0.4)]
            hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]
            transition"
          >
            Yes, I’m Ready To Scale
          </a>

          <p className="text-gray-500 mt-3 text-sm">
            Only 1 Spot Available Each Month
          </p>
        </div>
      </div>
    </section>
  )
}