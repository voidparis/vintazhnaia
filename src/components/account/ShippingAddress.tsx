import React, { useState } from 'react';

const ShippingAddress: React.FC = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [useThisAddress, setUseThisAddress] = useState(true);
  const [hasAddress, setHasAddress] = useState(false);

  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl">Адрес доставки</h2>
        {hasAddress && (
          <button
            onClick={toggleAddressForm}
            className="border border-neutral-300 px-5 py-2 text-sm hover:border-neutral-500 transition-colors"
          >
            ДОБАВИТЬ НОВЫЙ АДРЕС
          </button>
        )}
      </div>

      {!hasAddress && !showAddressForm && (
        <div className="mb-6">
          <button
            onClick={toggleAddressForm}
            className="border border-neutral-300 px-5 py-2 text-sm hover:border-neutral-500 transition-colors"
          >
            ДОБАВИТЬ НОВЫЙ АДРЕС
          </button>
        </div>
      )}

      {hasAddress && !showAddressForm && (
        <div className="max-w-2xl border border-neutral-200 p-4 mb-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <input
                type="radio"
                id="defaultAddress"
                checked={useThisAddress}
                onChange={() => setUseThisAddress(true)}
                className="mr-3"
              />
              <label htmlFor="defaultAddress">Использовать этот адрес</label>
            </div>
            <div>
              <button className="text-neutral-700 hover:text-gold text-sm mr-4">
                Изменить
              </button>
              <button className="text-neutral-700 hover:text-gold text-sm">
                Удалить
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p>75000</p>
            <p>Россия</p>
          </div>
          <button
            className="bg-neutral-800 text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-700 transition-colors mt-8"
          >
            СОХРАНИТЬ ИЗМЕНЕНИЯ
          </button>
        </div>
      )}

      {showAddressForm && (
        <div className="max-w-2xl mb-6">
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="useAddress"
                checked={useThisAddress}
                onChange={() => setUseThisAddress(true)}
                className="mr-3"
              />
              <label htmlFor="useAddress">Использовать этот адрес</label>
            </div>
            {hasAddress && (
              <button
                onClick={() => setShowAddressForm(false)}
                className="text-neutral-700 hover:text-gold"
              >
                Отменить
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm">
                Имя<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Имя"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm">
                Фамилия<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Фамилия"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block mb-2 text-sm">
              Страна/регион
            </label>
            <div className="relative">
              <select
                id="country"
                className="w-full border border-neutral-300 p-3 pr-10 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
              >
                <option value="russia">Россия</option>
                <option value="usa">США</option>
                <option value="uk">Великобритания</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 text-sm">
              Адрес<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500 mb-4"
              placeholder="Адрес"
            />
            <input
              type="text"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Квартира, этаж и т.д. (необязательно)"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block mb-2 text-sm">
                Город<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Город"
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-2 text-sm">
                Регион/область (необязательно)
              </label>
              <input
                type="text"
                id="state"
                className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Регион/область"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="zipcode" className="block mb-2 text-sm">
              Почтовый индекс<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipcode"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Почтовый индекс"
              defaultValue="75000"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm">
              Номер телефона<span className="text-red-500">*</span>
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
                id="phone"
                className="flex-1 border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
                placeholder="Номер телефона"
              />
            </div>
            <p className="text-sm text-neutral-500 mt-2">
              Только для вопросов по доставке
            </p>
          </div>

          <button
            className="bg-neutral-200 hover:bg-neutral-300 px-8 py-3 uppercase text-sm tracking-wide transition-colors w-full"
          >
            СОХРАНИТЬ
          </button>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;
