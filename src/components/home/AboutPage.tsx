import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-6 pb-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4 text-neutral-500">
          <ol className="flex flex-wrap">
            <li className="after:content-['/'] after:mx-2">
              <Link to="/" className="hover:text-gold">Главная</Link>
            </li>
            <li>
              <span className="text-neutral-900">Мир Винтажная</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-cardinal mb-2">Мир Винтажная</h1>
          <p className="text-neutral-600 max-w-4xl">
            Добро пожаловать в Мир Винтажная - уникальное пространство, где история встречается с искусством, а классический стиль обретает новую жизнь.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-cardinal mb-4">О Нас</h2>
            <p className="mb-4">
              Винтажная.ру — это премиальная площадка для коллекционеров, дизайнеров и ценителей искусства, где собраны уникальные предметы мебели, декора, искусства и ювелирных изделий от ведущих галерей и независимых продавцов со всего мира.
            </p>
            <p className="mb-4">
              Наша миссия — открывать перед вами лучшие винтажные находки и коллекционные предметы, которые могут стать жемчужиной вашего интерьера или личной коллекции. Мы тщательно отбираем каждый предмет, чтобы гарантировать его подлинность, качество и культурную ценность.
            </p>
            <p>
              Основанная с любовью к истории дизайна и искусства, Винтажная.ру стремится сохранить культурное наследие и сделать его доступным для широкого круга ценителей качества и уникальности.
            </p>
          </div>
          <div className="bg-neutral-100 p-8">
            <h2 className="text-2xl font-cardinal mb-4">Наши Ценности</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <div>
                  <strong className="block mb-1">Аутентичность</strong>
                  <p className="text-sm">Мы гарантируем подлинность и происхождение каждого предмета в нашем каталоге.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <div>
                  <strong className="block mb-1">Кураторский подход</strong>
                  <p className="text-sm">Наша команда экспертов тщательно отбирает предметы, представляющие художественную и историческую ценность.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <div>
                  <strong className="block mb-1">Качество обслуживания</strong>
                  <p className="text-sm">Мы обеспечиваем первоклассный сервис на каждом этапе взаимодействия с нашими клиентами.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✦</span>
                <div>
                  <strong className="block mb-1">Устойчивое развитие</strong>
                  <p className="text-sm">Поддерживая вторичный рынок, мы вносим вклад в устойчивое потребление и сохранение культурного наследия.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-cardinal mb-6">Журнал Винтажная</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 hover:border-gold transition-colors">
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2411483839/878713496.jpeg"
                  alt="Датский модернизм"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Датский модернизм: Наследие Финн Юля</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Исследуем влияние датского дизайнера на современную мебельную эстетику.
                </p>
                <Link to="#" className="text-xs uppercase tracking-wider text-gold hover:underline">Читать статью</Link>
              </div>
            </div>

            <div className="border border-neutral-200 hover:border-gold transition-colors">
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2411483839/1808370198.jpeg"
                  alt="Ювелирное искусство"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Ювелирное искусство: От ар-деко до наших дней</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Как менялись стили и техники в ювелирном искусстве на протяжении XX века.
                </p>
                <Link to="#" className="text-xs uppercase tracking-wider text-gold hover:underline">Читать статью</Link>
              </div>
            </div>

            <div className="border border-neutral-200 hover:border-gold transition-colors">
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2411483839/3604620263.jpeg"
                  alt="Коллекционирование искусства"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Коллекционирование искусства: Руководство для начинающих</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Советы и рекомендации от экспертов по созданию собственной коллекции искусства.
                </p>
                <Link to="#" className="text-xs uppercase tracking-wider text-gold hover:underline">Читать статью</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-cardinal mb-6">Наша Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4"></div>
              <h3 className="font-medium">Анна Петрова</h3>
              <p className="text-sm text-neutral-600">Основатель и Куратор</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4"></div>
              <h3 className="font-medium">Александр Иванов</h3>
              <p className="text-sm text-neutral-600">Главный Редактор</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4"></div>
              <h3 className="font-medium">Екатерина Смирнова</h3>
              <p className="text-sm text-neutral-600">Эксперт по Искусству</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-neutral-200 mx-auto mb-4"></div>
              <h3 className="font-medium">Михаил Соколов</h3>
              <p className="text-sm text-neutral-600">Специалист по Винтажной Мебели</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-neutral-100 p-8">
          <h2 className="text-2xl font-cardinal mb-6 text-center">Свяжитесь с Нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="mb-4">
                Если у вас есть вопросы о наших предметах, услугах или вы хотите получить консультацию эксперта, наша команда всегда готова помочь.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gold mr-2">✉</span>
                  <span>info@vintazhnaya.ru</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">☏</span>
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-2">⌂</span>
                  <span>Москва, ул. Пушкинская, д. 10</span>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="font-medium mb-2">Часы работы:</h3>
                <p className="text-sm">
                  Пн-Пт: 10:00 - 19:00<br />
                  Сб: 11:00 - 18:00<br />
                  Вс: Выходной
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-gold"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-gold"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-gold"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="bg-gold text-white py-2 px-6 hover:bg-gold/90 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
