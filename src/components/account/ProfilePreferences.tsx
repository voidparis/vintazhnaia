import React, { useState } from 'react';

const ProfilePreferences: React.FC = () => {
  const [country, setCountry] = useState('russia');
  const [language, setLanguage] = useState('russian');
  const [currency, setCurrency] = useState('rub');
  const [measurementSystem, setMeasurementSystem] = useState('metric');
  const [shareActivity, setShareActivity] = useState(false);

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Параметры отображения</h2>

      <div className="max-w-2xl">
        <p className="mb-6">
          Выберите предпочитаемый адрес доставки, язык и валюту.
        </p>

        <div className="mb-6">
          <label htmlFor="country" className="block mb-2 text-sm">
            Страна/регион
          </label>
          <div className="relative">
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-neutral-300 p-3 pr-10 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
            >
              <option value="russia">Россия</option>
              <option value="usa">США</option>
              <option value="uk">Великобритания</option>
              <option value="france">Франция</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="language" className="block mb-2 text-sm">
            Язык
          </label>
          <div className="relative">
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-neutral-300 p-3 pr-10 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
            >
              <option value="russian">Русский</option>
              <option value="english">English (US)</option>
              <option value="french">Français</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="currency" className="block mb-2 text-sm">
            Валюта
          </label>
          <div className="relative">
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border border-neutral-300 p-3 pr-10 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
            >
              <option value="rub">₽ RUB</option>
              <option value="eur">€ EUR</option>
              <option value="usd">$ USD</option>
              <option value="gbp">£ GBP</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-2">
            Выбранная валюта будет использоваться для отображения цен на товары. Однако, при покупке товаров, ваша банковская карта будет дебетирована в евро (EUR), в долларах США (USD) или в фунтах стерлингов (GBP). Сборы за международные транзакции могут применяться.
          </p>
        </div>

        <h2 className="text-xl mt-10 mb-6">Единицы измерения</h2>
        <p className="mb-6">
          Выберите предпочитаемую единицу измерения.
        </p>

        <div className="mb-10">
          <div className="flex items-center mb-3">
            <input
              type="radio"
              id="metric"
              name="measurement"
              value="metric"
              checked={measurementSystem === 'metric'}
              onChange={() => setMeasurementSystem('metric')}
              className="mr-3"
            />
            <label htmlFor="metric">Метрическая (см)</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="imperial"
              name="measurement"
              value="imperial"
              checked={measurementSystem === 'imperial'}
              onChange={() => setMeasurementSystem('imperial')}
              className="mr-3"
            />
            <label htmlFor="imperial">Имперская (дюймы)</label>
          </div>
        </div>

        <h2 className="text-xl mt-10 mb-6">Активность профиля</h2>
        <div className="flex items-center justify-between mb-10">
          <p>
            Персонализируйте свой опыт, делясь товарами, которые вас заинтересовали, с продавцами, с которыми вы контактировали.
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shareActivity}
              onChange={() => setShareActivity(!shareActivity)}
            />
            <div className={`relative w-14 h-7 rounded-full peer transition-colors ${shareActivity ? 'bg-green-500' : 'bg-gray-200'}`}>
              <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${shareActivity ? 'right-1' : 'left-1'}`}></div>
            </div>
          </label>
        </div>

        <button
          className="bg-neutral-200 hover:bg-neutral-300 px-8 py-3 uppercase text-sm tracking-wide transition-colors"
        >
          СОХРАНИТЬ ИЗМЕНЕНИЯ
        </button>
      </div>
    </div>
  );
};

export default ProfilePreferences;
