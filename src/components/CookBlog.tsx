import './CookBlog.css';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Image } from '@chakra-ui/react';
import { FC } from 'react';

import userIcon1 from '~/images/blog-review1.png';
import userIcon2 from '~/images/blog-review2.png';
import userIcon3 from '~/images/blog-review3.png';

interface IBlogReview {
    name: string;
    username: string;
    text: string;
    profileIcon: string;
}

const CookBlog: FC = () => {
    const blogPeople: IBlogReview[] = [
        {
            name: 'Елена высоцкая',
            username: '@elenapovar',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            profileIcon: userIcon1,
        },
        {
            name: 'Alex Cook',
            username: '@funtasticooking',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            profileIcon: userIcon2,
        },
        {
            name: 'Екатерина Константинопольская',
            username: '@bake_and_pie',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            profileIcon: userIcon3,
        },
    ];

    return (
        <div className='cook-blog'>
            <div className='cook-blog__top'>
                <h3 className='cook-blog__title'>Кулинарные блоги</h3>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    backgroundColor='inherit'
                    fontSize='1.125rem'
                    fontWeight={600}
                    color='#000'
                    p='10px 24px'
                >
                    Все авторы
                </Button>
            </div>
            <ul className='cook-blog__list'>
                {blogPeople.map((review: IBlogReview, index: number) => (
                    <li className='cook-blog__item' key={index}>
                        <div className='cook-blog__item-top'>
                            <Image
                                src={review.profileIcon}
                                alt={review.name}
                                boxSize={48}
                                borderRadius='full'
                            />
                            <div className='cook-blog__item-column'>
                                <p className='cook-blog__item-title'>{review.name}</p>
                                <p className='cook-blog__item-subtitle'>{review.username}</p>
                            </div>
                        </div>
                        <p className='cook-blog__item-text'>{review.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CookBlog;
