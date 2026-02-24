import type { FAQItem } from "@/lib/data";

interface FaqAccordionProps {
    items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <details
                    key={index}
                    className="group border border-border rounded-lg overflow-hidden"
                >
                    <summary className="flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors duration-200">
                        <span className="text-base sm:text-lg font-medium text-white pr-4">
                            {item.question}
                        </span>
                        <span className="faq-icon text-2xl text-muted transition-transform duration-200 shrink-0">
                            +
                        </span>
                    </summary>
                    <div className="px-6 pb-5">
                        <p className="text-muted text-sm sm:text-base leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
