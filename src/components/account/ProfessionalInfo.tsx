import React, { useState } from 'react';

const ProfessionalInfo: React.FC = () => {
  const [isSeller, setIsSeller] = useState(false);
  const [isDesigner, setIsDesigner] = useState(false);

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Профессиональная информация</h2>

      <div className="max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="seller"
              checked={isSeller}
              onChange={() => setIsSeller(!isSeller)}
              className="mr-3 h-5 w-5 text-gold focus:ring-gold"
            />
            <label htmlFor="seller" className="text-lg">
              Продавец
            </label>
          </div>

          <div className="flex items-center mb-8">
            <input
              type="checkbox"
              id="designer"
              checked={isDesigner}
              onChange={() => setIsDesigner(!isDesigner)}
              className="mr-3 h-5 w-5 text-gold focus:ring-gold"
            />
            <label htmlFor="designer" className="text-lg">
              Профессионал в области дизайна
            </label>
          </div>

          <div className="mb-6">
            <label htmlFor="resaleNumber" className="block mb-2 text-sm">
              Номер перепродажи
            </label>
            <input
              type="text"
              id="resaleNumber"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Номер перепродажи"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="resaleState" className="block mb-2 text-sm">
              Область перепродажи
            </label>
            <div className="relative">
              <select
                id="resaleState"
                className="w-full border border-neutral-300 p-3 pr-10 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
              >
                <option value="">Выберите область</option>
                <option value="moscow">Москва</option>
                <option value="spb">Санкт-Петербург</option>
                <option value="other">Другая область</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="association" className="block mb-2 text-sm">
              Профессиональная ассоциация
            </label>
            <input
              type="text"
              id="association"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Профессиональная ассоциация"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="memberNumber" className="block mb-2 text-sm">
              Номер члена ассоциации
            </label>
            <input
              type="text"
              id="memberNumber"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Номер члена ассоциации"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="associationPhone" className="block mb-2 text-sm">
              Телефон ассоциации
            </label>
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                <img
                  src="https://ext.same-assets.com/4072395124/2923498546.png"
                  alt="Флаг России"
                  className="w-6 h-4 mr-2"
                />
                <span>+7</span>
              </div>
              <input
                type="tel"
                id="associationPhone"
                className="flex-1 border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Телефон ассоциации"
              />
            </div>
          </div>

          <button className="bg-neutral-800 text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-700 transition-colors">
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
