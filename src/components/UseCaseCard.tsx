interface UseCaseCardProps {
  title: string;
  description: string;
  items: string[];
}

const UseCaseCard = ({ title, description, items }: UseCaseCardProps) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseCaseCard;