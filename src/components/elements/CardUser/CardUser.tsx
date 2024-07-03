import { Link } from 'react-router-dom';
import { CardUser as CardUserType } from '../../../types/card';
import { Label } from '../../ui';

type Props = {
    user: CardUserType;
    className?: string;
};

export const CardUser: React.FC<Props> = ({ user, className = '' }) => {
    const { name, img } = user;

    return (
        <div className={`flex items-center gap-2.5 w-full border-t border-darkBlueLine pt-5 ${className}`}>
            <div className='relative w-7 h-7 rounded-full overflow-hidden border border-white'>
                <img src={img.src} alt={img.alt} className='' />
            </div>

            <Label className='text-sm'>
                <span>Creation of</span>

                <Link to='/' className='text-white transition-colors duration-500 hover:text-cyan'>
                    {name}
                </Link>
            </Label>
        </div>
    );
};
