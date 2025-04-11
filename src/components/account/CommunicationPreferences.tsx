import React, { useState } from 'react';

const CommunicationPreferences: React.FC = () => {
  const [commercialEmails, setCommercialEmails] = useState(true);
  const [personalOffers, setPersonalOffers] = useState(false);
  const [feedbackEmails, setFeedbackEmails] = useState(true);
  const [searchAlerts, setSearchAlerts] = useState(true);
  const [weeklyEmails, setWeeklyEmails] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [smsInteractions, setSmsInteractions] = useState(false);
  const [email, setEmail] = useState('alexey.shumeyko@gmail.com');

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Настройки связи</h2>

      <div className="max-w-2xl">
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">E-mail</h3>
          <p className="mb-2">
            Параметры для <span className="font-medium">{email}</span> в отношении e-mail сообщений
          </p>
          <button className="text-sm text-neutral-700 hover:text-gold mb-6">
            Изменить адрес e-mail
          </button>

          <div className="bg-neutral-50 p-4 rounded text-sm text-neutral-600 mb-8">
            Примечание: изменение ваших настроек электронной почты может занять до 48 часов. Возможно, вы будете получать другие электронные письма в течение этого времени. Вы продолжите получать электронные письма от Винтажная относительно ваших транзакций.
          </div>

          <div className="border-b border-neutral-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">E-mail коммерческого и информационного характера</h4>
                <p className="text-sm text-neutral-600">
                  Будьте в курсе последних предложений, коллекций от дизайнеров, акций и мероприятий.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={commercialEmails}
                  onChange={() => setCommercialEmails(!commercialEmails)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${commercialEmails ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${commercialEmails ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className="border-b border-neutral-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">E-mail с персональными предложениями</h4>
                <p className="text-sm text-neutral-600">
                  Получайте эксклюзивные предложения от продавцов, товары которых вы просматривали, сохраняли или добавляли в корзину.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={personalOffers}
                  onChange={() => setPersonalOffers(!personalOffers)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${personalOffers ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${personalOffers ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className="border-b border-neutral-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">E-mail с запросом отзыва</h4>
                <p className="text-sm text-neutral-600">
                  Помогите Винтажная и продавцам улучшить сервис.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={feedbackEmails}
                  onChange={() => setFeedbackEmails(!feedbackEmails)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${feedbackEmails ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${feedbackEmails ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className="border-b border-neutral-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">Оповещения о поиске</h4>
                <p className="text-sm text-neutral-600">
                  Получайте уведомления, когда поисковый запрос, продавец или галерея, за которыми вы следите, предлагают новинки.
                </p>
                <button className="text-sm text-neutral-700 hover:text-gold mt-2">
                  Управление поисковыми запросами
                </button>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={searchAlerts}
                  onChange={() => setSearchAlerts(!searchAlerts)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${searchAlerts ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${searchAlerts ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>

          <div className="py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">Еженедельная рассылка</h4>
                <p className="text-sm text-neutral-600">
                  Получайте еженедельную рассылку о новинках в области шоппинга, контента и поиска.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={weeklyEmails}
                  onChange={() => setWeeklyEmails(!weeklyEmails)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${weeklyEmails ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${weeklyEmails ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Оповещения по SMS</h3>
          <p className="mb-6">
            Подпишитесь для получения оповещений по SMS.
          </p>

          <div className="border-b border-neutral-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium mb-1">SMS-сообщения при взаимодействии</h4>
                <p className="text-sm text-neutral-600">
                  Укажите свой номер чтобы получать оповещения по SMS. Мы сообщим вам, когда продавцы ответят на ваши сообщения.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={smsInteractions}
                  onChange={() => setSmsInteractions(!smsInteractions)}
                />
                <div className={`relative w-14 h-7 rounded-full peer transition-colors ${smsInteractions ? 'bg-green-500' : 'bg-gray-200'}`}>
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${smsInteractions ? 'right-1' : 'left-1'}`}></div>
                </div>
              </label>
            </div>
          </div>
        </section>

        <button className="bg-neutral-200 hover:bg-neutral-300 px-8 py-3 uppercase text-sm tracking-wide transition-colors mb-4">
          ОТМЕНИТЬ
        </button>
      </div>
    </div>
  );
};

export default CommunicationPreferences;
