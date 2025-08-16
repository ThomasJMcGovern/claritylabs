import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Can I take this with a multivitamin that has folic acid?",
      answer:
        "Yes, you can take Methyl•15™ alongside a multivitamin containing folic acid. This supplement provides the active form (5-MTHF) that your body can use immediately, while folic acid requires conversion. The active form may be especially beneficial for those with MTHFR variants who have difficulty with this conversion process.",
    },
    {
      question: "I'm sensitive to methyl donors—how should I start?",
      answer:
        "If you're sensitive to methyl donors, we recommend starting with ½ capsule of Methyl•15™ or considering our StartLow™ 1mg formula. Gradually titrate your dose over 3–5 days, monitoring how you feel. Some individuals may experience temporary overstimulation when starting methylated supplements, so a slower approach is often beneficial.",
    },
    {
      question: "Is this FDA approved?",
      answer:
        "Dietary supplements are not FDA-approved, as they are regulated differently than medications. However, Methyl•15™ is manufactured in an FDA-registered, cGMP-certified facility and undergoes rigorous third-party testing for potency, purity, and safety to ensure the highest quality standards.",
    },
    {
      question: "Any safety notes I should know about?",
      answer:
        "Ensure you have adequate vitamin B12 levels when taking L-Methylfolate, as they work together in methylation processes. Consult your healthcare provider before use if you are pregnant, nursing, taking medications, or have a history of bipolar spectrum disorders. Some individuals may experience mood changes with high-dose methylated supplements.",
    },
    {
      question: "How is this different from folic acid?",
      answer:
        "Folic acid is a synthetic form that must be converted to 5-MTHF (the active form) through several enzymatic steps. Many people, especially those with MTHFR genetic variants, have reduced ability to make this conversion efficiently. Methyl•15™ provides 5-MTHF directly, bypassing the conversion process entirely.",
    },
    {
      question: "When should I take this supplement?",
      answer:
        "Methyl•15™ can be taken with or without food, though some people prefer taking it with a meal to minimize any potential stomach sensitivity. Many find it best to take in the morning, as methylated supplements can be energizing for some individuals.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600">Everything you need to know about Methyl•15™</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium text-stone-900 hover:text-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
