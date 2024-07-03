import { Link } from 'react-router-dom';
import { CardImg as CardImgType } from '../../../types/card';

type Props = {
    img: CardImgType;
    className?: string;
};

export const CardImg: React.FC<Props> = ({ img, className = '' }) => {
    const { src, alt } = img;

    return (
        <Link
            to='/'
            className={`relative block w-full h-0 pb-[90%] rounded-lg overflow-hidden bg-darkBlueBg transition-opacity duration-500 hover:opacity-70 ${className}`}
        >
            <img src={src} alt={alt} className='absolute top-0 left-0 w-full h-full object-cover object-center' />
        </Link>
    );
};
