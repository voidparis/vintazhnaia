import React from 'react';

interface PromoCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageSrc: string;
  imageAlt: string;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="promo-card">
      <div className="promo-card-content">
        <h2 className="text-2xl font-cardinal mb-2">{title}</h2>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="mt-auto">
          <a href={linkUrl} className="text-sm uppercase tracking-wide hover:text-gold">
            {linkText}
          </a>
        </div>
      </div>
      <div className="promo-card-image">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PromoCard;
