import React, { useState } from 'react';

const PaymentInfo: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCVV] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptNumber, setAptNumber] = useState('');
  const [country, setCountry] = useState('Россия');
  const [zipCode, setZipCode] = useState('');

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Format expiry date MM/YY
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }

    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setCardExpiry(formattedValue);
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Информация об оплате</h2>

      <div className="max-w-2xl">
        <p className="text-sm text-neutral-500 mb-6">
          Этот сайт защищен reCAPTCHA, и применяются <a href="#" className="text-neutral-800 hover:text-gold">Политика Конфиденциальности</a> и <a href="#" className="text-neutral-800 hover:text-gold">Условия Использования</a> Google.
        </p>

        <p className="text-sm text-neutral-500 mb-6">
          По соображениям безопасности может потребоваться временная авторизация для подтверждения вашей личности и платежной информации.
        </p>

        <div className="mb-6">
          <label htmlFor="cardNumber" className="block mb-2 text-sm">
            Номер карты
          </label>
          <div className="flex">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
            />
            <div className="flex items-center ml-2">
              <img src="https://ext.same-assets.com/3975481293/2973481249.png" alt="Visa" className="h-6 mx-1" />
              <img src="https://ext.same-assets.com/4182437893/3284729128.png" alt="Mastercard" className="h-6 mx-1" />
              <img src="https://ext.same-assets.com/9273401583/4728491027.png" alt="Amex" className="h-6 mx-1" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="expiry" className="block mb-2 text-sm">
              Срок действия
            </label>
            <input
              type="text"
              id="expiry"
              value={cardExpiry}
              onChange={handleExpiryChange}
              placeholder="ММ/ГГ"
              maxLength={5}
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block mb-2 text-sm">
              Код безопасности
            </label>
            <div className="relative">
              <input
                type="text"
                id="cvv"
                value={cardCVV}
                onChange={(e) => setCVV(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="CVV"
                className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src="https://ext.same-assets.com/3958720193/4729481204.png" alt="Info" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="cardName" className="block mb-2 text-sm">
            Имя<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Имя"
            className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="lastName" className="block mb-2 text-sm">
            Фамилия<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Фамилия"
            className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 text-sm">
            Адрес<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Адрес"
            className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500 mb-4"
          />
          <input
            type="text"
            id="apt"
            value={aptNumber}
            onChange={(e) => setAptNumber(e.target.value)}
            placeholder="Квартира, этаж и т.д. (необязательно)"
            className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
          />
        </div>

        <div className="mb-4">
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
              <option value="Россия">Россия</option>
              <option value="США">США</option>
              <option value="Великобритания">Великобритания</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="zipcode" className="block mb-2 text-sm">
            Почтовый индекс<span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <input
              type="text"
              id="zipcode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-1/2 border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Почтовый индекс"
            />
            <div className="w-1/2 ml-4 flex items-center text-sm text-neutral-600">
              Введите почтовый индекс для города и области
            </div>
          </div>
        </div>

        <button
          className="bg-neutral-200 hover:bg-neutral-300 px-8 py-3 uppercase text-sm tracking-wide transition-colors"
        >
          СОХРАНИТЬ
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
