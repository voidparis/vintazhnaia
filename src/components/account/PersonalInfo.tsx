import React, { useState } from 'react';

const PersonalInfo: React.FC = () => {
  const [email, setEmail] = useState('alexey.shumeyko@gmail.com');
  const [password, setPassword] = useState('xxxxxxxxxx');
  const [phone, setPhone] = useState('');

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Личная информация</h2>

      <div className="max-w-2xl">
        {/* Personal Info Form */}
        <div className="mb-8">
          <div className="mb-6">
            <label htmlFor="firstName" className="block mb-2 text-sm">
              Имя
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Имя"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="lastName" className="block mb-2 text-sm">
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Фамилия"
            />
          </div>

          <button className="btn-primary">
            СОХРАНИТЬ
          </button>
        </div>

        {/* Login Information */}
        <h3 className="text-lg font-bold mb-4">Информация для входа</h3>

        <div className="mb-8">
          <div className="flex justify-between border-b border-neutral-200 py-4">
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p>{email}</p>
            </div>
            <button className="text-sm text-neutral-700 hover:text-gold">
              Изменить
            </button>
          </div>

          <div className="flex justify-between border-b border-neutral-200 py-4">
            <div>
              <p className="text-sm text-neutral-500">Пароль</p>
              <p>{password}</p>
            </div>
            <button className="text-sm text-neutral-700 hover:text-gold">
              Изменить
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <h3 className="text-lg font-bold mb-4">Координаты</h3>

        <div className="flex items-center mb-4">
          <img
            src="https://ext.same-assets.com/4072395124/2923498546.png"
            alt="Russia flag"
            className="w-6 h-4 mr-2"
          />
          <span>+7</span>
        </div>

        <div className="flex gap-4 items-end mb-6">
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-2 text-sm">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-neutral-300 p-3 focus:outline-none focus:border-neutral-500"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className="btn-primary">
            СОХРАНИТЬ
          </button>
        </div>

        <p className="text-sm text-neutral-500 mb-8">
          Регистрируя этот номер, вы соглашаетесь получать SMS-уведомления (промоакции, предложения по публикациям) от Винтажная. Тарифы SMS оператора применяются, без обязательств покупки, отправьте СТОП в любой момент для отписки/отмены или отозвать согласие на SMS по подтверждению.
        </p>

        {/* Preferences */}
        <h3 className="text-lg font-bold mb-4">Предпочтения покупок</h3>

        <p className="mb-6">
          Чтобы персонализировать ваш опыт, определите или установите ваши предпочтения покупок.
        </p>

        <button className="border border-neutral-300 px-6 py-3 hover:border-neutral-500 transition-colors">
          ОТКРЫТЬ ОПРОСНИК
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
