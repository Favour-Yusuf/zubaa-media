"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      q: "How much does this cost? Do I take any risk?",
      a: "You pay nothing upfront. We only profit if you do. All risk is on us—we invest our time, resources, and expertise, so you have zero financial exposure."
    },
    {
      q: "Does this only work for creators?",
      a: "Not at all. We work with creators, coaches, consultants, local businesses—anyone with a high-ticket offer or an audience ready to buy, whether that audience comes from organic reach, paid ads, or both."
    },
    {
      q: "How is this different from other programs or agencies?",
      a: "We build full systems, not just teach tactics. Your low-ticket offer, funnel, and backend are engineered to convert cold traffic into buyers, validated before launch."
    },
    {
      q: "I already have a funnel—can I still work with you?",
      a: "Yes. We can optimize and integrate your existing funnel or help map out a new one using our proven system."
    },
    {
      q: "How many done-for-you spots are available?",
      a: "Only one per month. We pick partners, not clients. If this month is full, you can apply for the next."
    },
    {
      q: "What’s included in the done-for-you buildout?",
      a: "We handle everything: low-ticket offer creation, funnel design, copy, email & SMS flows, call booking system, and ad strategy—so you focus on creating content."
    },
    {
      q: "What results can I expect?",
      a: "For creators without an offer, our done for you system helps monetize your audience while you focus on content. For established high-ticket programs, 5–10% of cold traffic typically buys the front-end offer, 50% of those book a call, and 3–5% ascend to your high-ticket program."
    },
    {
      q: "How do you make sure the right buyers come in?",
      a: "We work backward from your high-ticket offer. Using five proven front-end formats, we craft a low-ticket offer that attracts buyers most likely to ascend. No more chasing the wrong leads."
    },
    {
      q: "How fast can I launch?",
      a: "Your system goes live in 30 days—taking orders and booking calls within four weeks."
    },
    {
      q: "What if I want to do it myself or with my team?",
      a: "We can map out your funnel, bonuses, bumps, upsells, and flows using the same system our DFY clients get, so you implement it with your team."
    },
    {
      q: "Will this work for my audience or niche?",
      a: "Everything we deliver is done-for-you and personalized to your offer. Not generic, not templated, not “DIY with a checklist” - we do the thinking, writing, and mapping for you."
    },
    {
      q: "I don’t want to deal with marketing or funnels—will I have to?",
      a: "Not at all. We manage everything—from building your list to ads, copy, and funnels. You focus on content and your product."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Wait, I’ve Got Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/[0.03]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="font-semibold text-lg">
                  Q: {faq.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 leading-relaxed">
                  A: {faq.a}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#apply"
            className="inline-block bg-brand text-black px-10 py-5 rounded-xl font-semibold
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