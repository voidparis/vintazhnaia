import React from 'react';

const SocialConnections: React.FC = () => {
  const email = 'alexey.shumeyko@gmail.com';

  return (
    <div className="bg-white p-6">
      <h2 className="text-xl mb-6">Доступные социальные сети</h2>

      <div className="max-w-2xl">
        <div className="border-b border-neutral-200 py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="mr-4">
                <img
                  src="https://ext.same-assets.com/4142097584/3975481293.png"
                  alt="Pinterest"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Pinterest</h3>
                <p className="text-neutral-600 mb-1">
                  Мгновенно сохраняйте свои любимые товары на Pinterest.
                </p>
              </div>
            </div>
            <button className="text-neutral-700 hover:text-gold">
              Подключить к Pinterest
            </button>
          </div>
        </div>

        <div className="border-b border-neutral-200 py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="mr-4">
                <img
                  src="https://ext.same-assets.com/3428453758/1059329432.png"
                  alt="Facebook"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Facebook</h3>
                <p className="text-neutral-600 mb-1">
                  Подключите свой аккаунт Винтажная к вашему аккаунту Facebook.
                </p>
              </div>
            </div>
            <button className="text-neutral-700 hover:text-gold">
              Подключить к Facebook
            </button>
          </div>
        </div>

        <div className="py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="mr-4">
                <img
                  src="https://ext.same-assets.com/3258092932/2304826183.png"
                  alt="Google"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Google</h3>
                <p className="text-neutral-600 mb-1">
                  {email}
                </p>
              </div>
            </div>
            <button className="text-neutral-700 hover:text-gold">
              Отключить аккаунт
            </button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-neutral-600 mb-6">
            Хотите подключить свой аккаунт Винтажная к другому социальному аккаунту?
            <a href="#" className="text-neutral-800 hover:text-gold ml-1">
              Узнать, как это сделать
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;
