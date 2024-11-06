interface FeatureTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureTab = ({ icon, title, description }: FeatureTabProps) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureTab;