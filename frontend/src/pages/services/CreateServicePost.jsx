import React, { useState } from 'react';
import ServiceTypeSelector from '../../components/services/ServiceTypeSelector';
import BasicInfo from '../../components/services/BasicInfo';
import ImageUploader from '../../components/services/ImageUploader';
import RevisionPolicy from '../../components/services/RevisionPolicy';
import PackageDetails from '../../components/services/PackageDetails';
import TimeCreditForm from '../../components/services/TimeCreditForm';
import TermsAndSubmit from '../../components/services/TermsAndSubmit';

// Form state'i için başlangıç değerleri
const initialState = {
  type: 'timeCredit',
  title: '',
  description: '',
  category: '',
  workLocation: 'remote',
  skills: '',
  images: [],
  revisions: {
    count: '1',
    extraPrice: '100',
    policy: ''
  },
  timeCredit: {
    serviceOffered: '',
    hoursOffered: '',
    serviceNeeded: '',
    hoursNeeded: '',
    availabilityOffered: '',
    availabilityNeeded: ''
  },
  packages: {
    basic: {
      price: '',
      delivery: '',
      description: ''
    },
    standard: {
      price: '',
      delivery: '',
      description: ''
    },
    premium: {
      price: '',
      delivery: '',
      description: ''
    }
  },
  terms: false
};

export default function ServicePostForm() {
  const [formData, setFormData] = useState(initialState);

  // Form validasyonu
  const isFormValid = () => {
    const hasImages = formData.images.length > 0;
    const hasBasicInfo = formData.title && formData.description && formData.category;
    const hasTerms = formData.terms;

    if (formData.type === 'timeCredit') {
      const { serviceOffered, hoursOffered, serviceNeeded, hoursNeeded } = formData.timeCredit;
      return hasImages && hasBasicInfo && hasTerms && 
             serviceOffered && hoursOffered && serviceNeeded && hoursNeeded;
    }

    if (formData.type === 'freelance') {
      const hasValidPackages = Object.values(formData.packages).every(
        pkg => pkg.price && pkg.delivery && pkg.description
      );
      return hasImages && hasBasicInfo && hasTerms && hasValidPackages;
    }

    if (formData.type === 'hybrid') {
      const { serviceOffered, hoursOffered, serviceNeeded, hoursNeeded } = formData.timeCredit;
      const hasValidPackages = Object.values(formData.packages).every(
        pkg => pkg.price && pkg.delivery && pkg.description
      );
      return hasImages && hasBasicInfo && hasTerms && 
             serviceOffered && hoursOffered && serviceNeeded && hoursNeeded && hasValidPackages;
    }

    return false;
  };

  // Event handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTimeCredit = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      timeCredit: {
        ...prev.timeCredit,
        [name]: value
      }
    }));
  };

  const handlePackage = (packageType, field, value) => {
    setFormData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [packageType]: {
          ...prev.packages[packageType],
          [field]: value
        }
      }
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleRevisions = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      revisions: {
        ...prev.revisions,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Lütfen tüm zorunlu alanları doldurun');
      return;
    }
    console.log('Form gönderiliyor:', formData);
    // API çağrısı burada yapılacak
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Yeni Hizmet İlanı</h1>

        {/* İlan Türü Seçimi */}
        <ServiceTypeSelector
          selectedType={formData.type}
          onTypeSelect={(type) => setFormData(prev => ({ ...prev, type }))}
        />

        {/* Temel Bilgiler */}
        <BasicInfo formData={formData} onChange={handleChange} />

        {/* Görsel Yükleme */}
        <ImageUploader
          images={formData.images}
          onImageUpload={handleImageUpload}
          onRemoveImage={removeImage}
        />

        {/* Revizyon Politikası */}
        <RevisionPolicy
          revisions={formData.revisions}
          onRevisionsChange={handleRevisions}
        />

        {/* Zaman Takası Formu */}
        {(formData.type === 'timeCredit' || formData.type === 'hybrid') && (
          <TimeCreditForm
            timeCredit={formData.timeCredit}
            onChange={handleTimeCredit}
          />
        )}

        {/* Serbest Çalışma Formu */}
        {(formData.type === 'freelance' || formData.type === 'hybrid') && (
          <PackageDetails
            packages={formData.packages}
            onPackageChange={handlePackage}
          />
        )}

        {/* Şartlar ve Gönder Butonu */}
        <TermsAndSubmit
          terms={formData.terms}
          onTermsChange={handleChange}
          onSubmit={handleSubmit}
          isValid={isFormValid()}
        />
      </form>
    </div>
  );
}