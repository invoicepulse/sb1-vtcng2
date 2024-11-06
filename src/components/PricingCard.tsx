interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted,
}: PricingCardProps) => {
  return (
    <div
      className={`p-8 rounded-xl ${
        highlighted
          ? 'bg-primary-50 border-2 border-primary-600 transform scale-105'
          : 'bg-white border border-gray-200'
      }`}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">
          {price === 'Custom' ? price : `$${price}`}
        </span>
        {price !== 'Custom' && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="h-5 w-5 text-primary-600 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-4 rounded-lg ${
          highlighted
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;