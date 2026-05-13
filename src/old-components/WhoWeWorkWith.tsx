// components/WhoWeWorkWith.tsx

export default function WhoWeWorkWith() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Who We Work With
        </h2>

        <div className="grid md:grid-cols-2 border border-white/20">

          {/* LEFT SIDE */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-white/20 bg-white/[0.03]">

            <h3 className="text-2xl font-semibold mb-8">
              I Don’t Have an Offer
            </h3>

            <ul className="space-y-6 text-gray-300 leading-relaxed list-disc pl-6 marker:text-gray-500">
              <li>10K+ engaged followers or subscribers</li>
              <li>Love creating content and showing up consistently on camera</li>
              <li>Passionate about helping people and making an impact</li>
              <li>Ready to develop their first high-ticket program</li>
              <li>Willing to delegate marketing, sales, and funnels to focus on creation</li>
            </ul>

            <div className="mt-12">
              <a
                href="#apply"
                className="inline-block bg-brand text-black px-8 py-4 rounded-xl font-semibold
                shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition"
              >
                Yes, I’m Ready To Scale
              </a>

              <p className="text-gray-500 mt-3 text-sm">
                Only 1 Spot Available Each Month
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-12 bg-brand/[0.05]">

            <h3 className="text-2xl font-semibold mb-8 text-brand">
              I Have a High Ticket Offer
            </h3>

            <ul className="space-y-6 text-gray-200 leading-relaxed list-disc pl-6 marker:text-brand">
              <li>Proven $2K–$25K offer with real client results</li>
              <li>15–20%+ close rate on calls</li>
              <li>Already sold to most of your current audience</li>
              <li>Running ads, but CPA is too high and show rates are low</li>
              <li>Open to systems that turn cold traffic into buyers</li>
            </ul>

            <div className="mt-12">
              <a
                href="#apply"
                className="inline-block bg-brand text-black px-8 py-4 rounded-xl font-semibold
                shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition"
              >
                Yes, I’m Ready To Scale
              </a>

              <p className="text-gray-500 mt-3 text-sm">
                Only 1 Spot Available Each Month
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}