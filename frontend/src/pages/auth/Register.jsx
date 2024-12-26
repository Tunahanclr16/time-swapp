import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        fullName: ''
    });
    const [profileImage, setProfileImage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError('Dosya boyutu 5MB\'dan küçük olmalıdır');
                return;
            }
            if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
                setError('Sadece JPEG ve PNG dosyaları kabul edilir');
                return;
            }
            setProfileImage(file);
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (step < 4) {
            if (step === 1) {
                if (!formData.email || !formData.username) {
                    setError('Email ve kullanıcı adı zorunludur');
                    return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    setError('Geçerli bir email adresi girin');
                    return;
                }
            }
            else if (step === 2) {
                if (!formData.password || !formData.confirmPassword) {
                    setError('Şifre alanları zorunludur');
                    return;
                }
                if (formData.password !== formData.confirmPassword) {
                    setError('Şifreler eşleşmiyor');
                    return;
                }
                if (formData.password.length < 6) {
                    setError('Şifre en az 6 karakter olmalıdır');
                    return;
                }
            }
            else if (step === 3) {
                if (!formData.fullName || !formData.phoneNumber) {
                    setError('Ad Soyad ve telefon numarası zorunludur');
                    return;
                }
                const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
                if (!phoneRegex.test(formData.phoneNumber)) {
                    setError('Geçerli bir telefon numarası girin (5xxxxxxxxx)');
                    return;
                }
            }

            setStep(step + 1);
            setError('');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            if (profileImage) {
                formDataToSend.append('profileImage', profileImage);
            }

            const response = await axios.post(
                'http://localhost:3000/api/auth/register',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.data.success) {
                navigate('/login');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Kayıt işlemi başarısız');
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
        setError('');
    };

    const renderStepTitle = () => {
        switch (step) {
            case 1:
                return 'Hesap Bilgileri';
            case 2:
                return 'Şifre Oluştur';
            case 3:
                return 'Kişisel Bilgiler';
            case 4:
                return 'Profil Fotoğrafı';
            default:
                return '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {renderStepTitle()}
                    </h2>
                    <div className="mt-2 flex justify-center space-x-2">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className={`w-2 h-2 rounded-full ${
                                    step >= item ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Kullanıcı Adı
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Şifre
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Şifre Tekrar
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Ad Soyad
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                    Telefon Numarası
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    required
                                    placeholder="5xxxxxxxxx"
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                                    Profil Fotoğrafı
                                </label>
                                <input
                                    id="profileImage"
                                    name="profileImage"
                                    type="file"
                                    accept="image/jpeg,image/png"
                                    onChange={handleFileChange}
                                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Maksimum 5MB, sadece JPEG ve PNG
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between space-x-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="group relative flex-1 flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Geri
                            </button>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative flex-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {loading ? 'İşleniyor...' : step < 4 ? 'Devam Et' : 'Kayıt Ol'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}