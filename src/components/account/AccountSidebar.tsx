import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AccountSidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="border border-neutral-200 rounded-sm">
      <ul className="divide-y divide-neutral-200">
        <li className={isActive('/account') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account" className="block px-4 py-3 hover:bg-neutral-50">
            ЛИЧНАЯ ИНФОРМАЦИЯ
          </Link>
        </li>
        <li className={isActive('/account/professional') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/professional" className="block px-4 py-3 hover:bg-neutral-50">
            ПРОФЕССИОНАЛЬНАЯ ИНФОРМАЦИЯ
          </Link>
        </li>
        <li className={isActive('/account/shipping') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/shipping" className="block px-4 py-3 hover:bg-neutral-50">
            ИНФОРМАЦИЯ О ДОСТАВКЕ
          </Link>
        </li>
        <li className={isActive('/account/payment') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/payment" className="block px-4 py-3 hover:bg-neutral-50">
            ИНФОРМАЦИЯ ОБ ОПЛАТЕ
          </Link>
        </li>
        <li className={isActive('/account/tax') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/tax" className="block px-4 py-3 hover:bg-neutral-50">
            СЕРТИФИКАТЫ ОСВОБОЖДЕНИЯ ОТ НАЛОГОВ
          </Link>
        </li>
        <li className={isActive('/account/profile') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/profile" className="block px-4 py-3 hover:bg-neutral-50">
            НАСТРОЙКИ ПРОФИЛЯ
          </Link>
        </li>
        <li className={isActive('/account/communication') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/communication" className="block px-4 py-3 hover:bg-neutral-50">
            НАСТРОЙКИ СВЯЗИ
          </Link>
        </li>
        <li className={isActive('/account/social') ? "bg-neutral-100 font-bold" : ""}>
          <Link to="/account/social" className="block px-4 py-3 hover:bg-neutral-50">
            СОЦИАЛЬНЫЕ СЕТИ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
