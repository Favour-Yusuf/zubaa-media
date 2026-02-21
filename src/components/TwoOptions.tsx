// components/TwoOptions.tsx

export default function TwoOptions() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          You Have Two Option...
        </h2>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 border border-white/20">

          {/* OPTION 1 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-white/20 bg-white/[0.03]">
            
            <h3 className="text-2xl font-semibold mb-10">
              Option 1: Stay Where You Are
            </h3>

            <ul className="space-y-8 text-gray-400 text-lg leading-relaxed list-disc pl-6 marker:text-gray-500">
              <li>
                Grind on the content hamster wheel—posting, filming, editing—hoping ad revenue, brand deals, or sponsorships show up.
              </li>
              <li>
                Chase organic reach, run webinars, send emails, tweak launches—always guessing, always stressed, always leaving money on the table.
              </li>
              <li>
                Pay for ads that bring leads who rarely show up or convert.
              </li>
              <li>
                Keep running your business on luck and hope, wondering if your audience, your product, and your effort will ever pay off.
              </li>
            </ul>
          </div>

          {/* OPTION 2 */}
          <div className="p-12 bg-gradient-to-br from-brand/20 to-transparent border-white/20">
            
            <h3 className="text-2xl font-semibold mb-10 text-brand">
              Option 2: Install Our Systems
            </h3>

            <ul className="space-y-8 text-gray-200 text-lg leading-relaxed list-disc pl-6 marker:text-brand">
              <li>
                Let us build your profitable digital offer and set up a system that lowers acquisition costs and turns cold traffic into buyers.
              </li>
              <li>
                Focus on creating, strategizing, and serving your audience—while every lead has a chance to convert.
              </li>
              <li>
                Double show rates, liquidate ad spend upfront, and finally get predictable revenue.
              </li>
              <li>
                Stop guessing, stop tweaking endlessly, and grow your business without burning out.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}