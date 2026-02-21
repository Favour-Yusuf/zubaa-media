// components/Problem.tsx

export default function Problem() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Does This Feel Familiar?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 border border-white/20">

          {/* Box 1 */}
          <div className="p-10 border-b md:border-b border-white/20 md:border-r">
            <h3 className="text-xl font-semibold mb-6">
              You love creating content… but your income depends on it…
            </h3>
            <p className="text-gray-400 leading-relaxed">
              You pour hours into videos, posts, and live streams—but every week feels like a race. Skip a few days, and revenue drops. You rely on YouTube ads, brand deals, and sponsorships—but they’re inconsistent, unpredictable, and never enough. You know your audience loves your content, yet all your effort doesn’t guarantee steady income, leaving you stuck on the content hamster wheel.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-10 border-b border-white/20">
            <h3 className="text-xl font-semibold mb-6">
              Social platforms control your reach…
            </h3>
            <p className="text-gray-400 leading-relaxed">
              You have followers and subscribers—but the platforms own your visibility. One algorithm change, one shadow ban, or one flagged post, and your content, your reach, and your revenue could vanish overnight. You keep posting, engaging, and creating—but no matter how much you work, the business isn’t fully yours, and every month feels like a constant fight to stay visible and profitable.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-10 border-white/20 md:border-r">
            <h3 className="text-xl font-semibold mb-6">
              Your high-ticket offer is leaving money on the table…
            </h3>
            <p className="text-gray-400 leading-relaxed">
              You’ve maxed out your email list, pitched followers, run webinars, and launched challenges—but each time, returns shrink. Running ads to get new leads cost a lot more, show rates are low, and most prospects slip away. You close 30% on calls—but the other 70%? Gone. You’re covering ad spend, tools, and your team, leaving money on the table while your product’s potential goes untapped.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-10">
            <h3 className="text-xl font-semibold mb-6">
              You need predictable results… not luck…
            </h3>
            <p className="text-gray-400 leading-relaxed">
              You’ve tried every tactic—emails, ads, webinars, launches—but nothing is consistent. Leads show up, calls happen, but revenue is unpredictable. One week it works, the next week you’re scrambling to cover ad spend and team costs. You know your product can help people, yet without a system that reliably turns interest into buyers, growth feels like a gamble. You need a blueprint that actually works—so you can stop guessing, stop tweaking endlessly, and finally focus on creating while the system brings in paying customers.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}