interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)] ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)] hover:ring-[#BBF52D]">
      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>

      {/* Price */}
      <p className="mt-3 flex items-end gap-1 text-4xl font-extrabold text-[#9BF021]">
        {plan.price}
        <span className="text-sm font-medium text-slate-500">/month</span>
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {plan.description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-[#9BF021]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="mt-8 w-full rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-900 hover:shadow-lg">
        Get Started
      </button>

      {/* soft glow hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-hover:shadow-[0_0_0_1px_rgba(187,245,45,0.35)]"></div>
    </div>
  );
};
export default PricingCard;