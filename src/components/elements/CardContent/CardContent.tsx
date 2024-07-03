import { Link } from 'react-router-dom';
import { CardContent as CardContentType } from '../../../types/card';
import { Label, Text, Title } from '../../ui';

type Props = {
    content: CardContentType;
    className?: string;
};

export const CardContent: React.FC<Props> = ({ content, className = '' }) => {
    const { title, text, quantity, time } = content;

    return (
        <div className={`relative w-full ${className}`}>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>
                    <Link to='/' className='transition-colors duration-500 hover:text-cyan'>
                        {title}
                    </Link>
                </Title>

                <Text>{text}</Text>
            </div>

            <div className='flex items-center justify-between w-full'>
                <Label>
                    <img src='icon_ethereum.svg' alt='icon_ethereum' className='w-3' />
                    <span className='text-cyan'>{quantity} ETH</span>
                </Label>

                <Label>
                    <img src='icon_time.svg' alt='icon_time' className='w-4' />
                    <span>{time}</span>
                </Label>
            </div>
        </div>
    );
};
