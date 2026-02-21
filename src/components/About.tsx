// components/About.tsx

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Who We Are
        </h2>

        <div className="space-y-10 text-center">

          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            We are not an agency. We are not a funnel builder.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are a full-service virtual business partner for creators, coaches, consultants, and digital-first brands.
          </p>

          <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.03] max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              We architect, install, and optimize the systems that allow creators and experts to scale beyond:
            </p>

            <ul className="mt-6 space-y-4 text-lg font-medium">
              <li>Algorithms</li>
              <li>Launch dependency</li>
              <li>Audience saturation</li>
            </ul>
          </div>

          <p className="text-xl md:text-2xl font-semibold mt-10">
            Our mission is simple: Help creators build revenue systems they own and scale them profitably.
          </p>

        </div>

      </div>
    </section>
  )
}