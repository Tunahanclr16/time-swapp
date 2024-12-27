import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Clock, Award } from 'lucide-react';

export default function Profile() {
  const [user, setUser] = useState(null); // Kullanıcı verisini tutacak state
  const [loading, setLoading] = useState(true); // Yüklenme durumu için state
  const [error, setError] = useState(null); // Hata mesajını tutacak state

  useEffect(() => {
    // Backend'den veriyi çekmek için API çağrısı
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Token'ı localStorage'dan al
        if (!token) {
          throw new Error('Token bulunamadı, lütfen giriş yapın.');
        }

        const response = await axios.get('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Token'ı Authorization başlığına ekle
          },
        });

        setUser(response.data.data); // Backend'den dönen kullanıcı verisini state'e atıyoruz
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Veri alınamadı.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={`http://localhost:3000${user.profileImage}`}
              alt={user.fullName}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.fullName}</h1>
              <p className="text-gray-500">{user.email}</p>
              <div className="mt-4 flex space-x-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{user.timeCredits} saat</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  <span>Aktif mi: {user.isActive ? "Evet" : "Hayır"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Yetenekler</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {user.skills.length > 0 ? (
                user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p>Yetenek eklenmemiş.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
