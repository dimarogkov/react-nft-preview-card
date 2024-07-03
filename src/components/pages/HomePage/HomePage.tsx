import { data } from '../../../data/data';
import { Card } from '../../elements/Card';
import { CardContent } from '../../elements/CardContent';
import { CardImg } from '../../elements/CardImg';
import { CardUser } from '../../elements/CardUser';

export const HomePage = () => {
    const { img, content, user } = data;

    return (
        <Card>
            <CardImg img={img} className='mb-5 last:mb-0' />
            <CardContent content={content} className='mb-5 last:mb-0' />
            <CardUser user={user} />
        </Card>
    );
};
