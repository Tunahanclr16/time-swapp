import React from 'react';
import { Clock, DollarSign, Users } from 'lucide-react';

const serviceTypes = [
  {
    id: 'timeCredit',
    icon: Clock,
    title: 'Zaman Takası',
    description: 'Yeteneklerinizi başkalarının yetenekleriyle takas edin'
  },
  {
    id: 'freelance',
    icon: DollarSign,
    title: 'Serbest Çalışma',
    description: 'Hizmetlerinizi ücret karşılığı sunun'
  },
  {
    id: 'hybrid',
    icon: Users,
    title: 'Karma Model',
    description: 'Hem takas hem ücretli çalışın'
  }
];

export default function ServiceTypeSelector({ selectedType, onTypeSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {serviceTypes.map(({ id, icon: Icon, title, description }) => (
        <button
          key={id}
          type="button"
          onClick={() => onTypeSelect(id)}
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedType === id
              ? 'border-blue-500 text-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Icon className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </button>
      ))}
    </div>
  );
}
