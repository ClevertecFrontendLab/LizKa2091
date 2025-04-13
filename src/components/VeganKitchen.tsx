import './VeganKitchen.css';

import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

import {
    FavoriteIcon,
    FirstCourseIcon,
    MarkIcon,
    SecondCourseIcon,
} from '~/customIcons/customIcons';

interface IVeganItem {
    title: string;
    text: string;
    category: string;
    marks?: number;
    favorites?: number;
    image: React.ElementType;
}

interface IVeganRecommendation {
    title: string;
    image: React.ElementType;
}

const VeganKitchen: FC = () => {
    const items: IVeganItem[] = [
        {
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            category: 'Вторые блюда',
            marks: 1,
            favorites: 1,
            image: SecondCourseIcon,
        },
        {
            title: 'Капустные котлеты',
            text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
            category: 'Вторые блюда',
            marks: 2,
            favorites: 1,
            image: SecondCourseIcon,
        },
    ];

    const recommendationItems: IVeganRecommendation[] = [
        { title: 'Стейк для вегетарианцев', image: SecondCourseIcon },
        { title: 'Стейк для вегетарианцев', image: SecondCourseIcon },
        { title: 'Стейк для вегетарианцев', image: FirstCourseIcon },
    ];

    return (
        <div className='vegan-kitchen'>
            <div className='vegan-kitchen__left'>
                <h3 className='vegan-kitchen__title'>Веганская кухня</h3>
                <ul className='vegan-kitchen__list'>
                    {items.map((item: IVeganItem, index) => (
                        <li key={index} className='vegan-kitchen__item'>
                            <div className='vegan-kitchen__item-top'>
                                <p className='vegan-kitchen__item-title'>{item.title}</p>
                                <p className='vegan-kitchen__item-text'>{item.text}</p>
                            </div>
                            <div className='vegan-kitchen__item-bottom'>
                                <span className='vegan-kitchen__item-category'>
                                    <item.image className='vegan-kitchen__item-category-image' />
                                    {item.category}
                                </span>
                                <div className='vegan-kitchen__item-buttons'>
                                    {item.marks && (
                                        <Button
                                            leftIcon={<MarkIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            p='0 4px'
                                        >
                                            {item.marks}
                                        </Button>
                                    )}
                                    {item.favorites && (
                                        <Button
                                            leftIcon={<FavoriteIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            p='0 4px'
                                        >
                                            {item.favorites}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='vegan-kitchen__right'>
                <p className='vegan-kitchen__subtitle'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </p>
                <ul className='vegan-kitchen__rec-list'>
                    {recommendationItems.map((item: IVeganRecommendation, index) => (
                        <li key={index} className='vegan-kitchen__rec-item'>
                            <div className='vegan-kitchen__item-container'>
                                <item.image className='vegan-kitchen__item-img' />
                                <p className='vegan-kitchen__item-rec-title'>{item.title}</p>
                            </div>
                            <Button
                                backgroundColor='#fff'
                                border='1px solid #2DB100'
                                borderRadius={6}
                                fontSize='0.875rem'
                                fontWeight={600}
                                color='#2DB100'
                                w={87}
                                h={32}
                            >
                                Готовить
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VeganKitchen;
