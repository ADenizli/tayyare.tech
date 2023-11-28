import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

// FontAwesome ikon tiplerini bir tür olarak belirleyin
export type IconType = keyof typeof SolidIcons | keyof typeof BrandIcons;
export const FAIcons = { ...SolidIcons, ...BrandIcons };

interface IProps {
     icon: IconProp; // IconType türünü kullanın
     className?: string;
}

export default function TYRIcon({ icon, className }: IProps) {
     return <FontAwesomeIcon className={className} icon={icon} />;
}
