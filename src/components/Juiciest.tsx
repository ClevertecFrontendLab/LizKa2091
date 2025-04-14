import './Juiciest.css';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { FavoriteIcon, MarkIcon, NationalIcon, SecondCourseIcon } from '~/customIcons/customIcons';
import userIcon1 from '~/images/blog-review1.png';
import userIcon2 from '~/images/blog-review2.png';
import juiciestImg1 from '~/images/juiciest1.png';
import juiciestImg2 from '~/images/juiciest2.png';
import juiciestImg3 from '~/images/juiciest3.png';
import juiciestImg4 from '~/images/juiciest4.png';

interface IRecipeItem {
    title: string;
    description: string;
    category: string;
    categoryImage: React.ElementType;
    marks?: number;
    favorites?: number;
    image: string;
    recommended?: string;
}

const Juiciest: FC = () => {
    const recipes: IRecipeItem[] = [
        {
            title: 'Кнели со спагетти',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            categoryImage: SecondCourseIcon,
            marks: 85,
            favorites: 152,
            image: juiciestImg1,
        },
        {
            title: 'Пряная ветчина по итальянски',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            categoryImage: SecondCourseIcon,
            marks: 159,
            favorites: 257,
            image: juiciestImg2,
            recommended: 'Елена Высоцкая',
        },
        {
            title: 'Лапша с курицей и шафраном',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Вторые блюда',
            categoryImage: SecondCourseIcon,
            marks: 258,
            favorites: 342,
            image: juiciestImg3,
            recommended: 'Alex Cook',
        },
        {
            title: 'Том-ям с капустой кимчи',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Национальные',
            categoryImage: NationalIcon,
            marks: 124,
            favorites: 324,
            image: juiciestImg4,
        },
    ];

    return (
        <div className='juiciest'>
            <div className='juiciest__top'>
                <h2 className='juiciest__title'>Самое сочное</h2>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    backgroundColor='#B1FF2E'
                    fontSize='1.125rem'
                    fontWeight={600}
                    color='#000'
                    h={12}
                    className='juiciest__button'
                >
                    Вся подборка
                </Button>
            </div>
            <ul className='juiciest__list'>
                {recipes.map((recipe: IRecipeItem, index: number) => (
                    <li key={index} className='juiciest__item'>
                        <img src={recipe.image} alt={recipe.title} className='juiciest__item-img' />
                        <div className='juiciest__item-container'>
                            <div className='juiciest__item-top'>
                                <span className='juiciest__item-category'>
                                    <recipe.categoryImage />
                                    {recipe.category}
                                </span>
                                <div className='juiciest__item-buttons'>
                                    {recipe.marks && (
                                        <Button
                                            leftIcon={<MarkIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            p='0 4px'
                                        >
                                            {recipe.marks}
                                        </Button>
                                    )}
                                    {recipe.favorites && (
                                        <Button
                                            leftIcon={<FavoriteIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            p='0 4px'
                                        >
                                            {recipe.favorites}
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className='juiciest__item-middle'>
                                <p className='juiciest__item-title'>{recipe.title}</p>
                                <p className='juiciest__item-description'>{recipe.description}</p>
                            </div>
                            <div className='juiciest__item-bottom'>
                                <Button
                                    leftIcon={<MarkIcon />}
                                    backgroundColor='#fff'
                                    border='1px solid #0000007A'
                                    color='#000'
                                    fontSize='0.875rem'
                                    w={122}
                                    h={8}
                                >
                                    Сохранить
                                </Button>
                                <Button
                                    backgroundColor='#000'
                                    color='#fff'
                                    fontSize='0.875rem'
                                    w={87}
                                    h={8}
                                >
                                    Готовить
                                </Button>
                            </div>
                        </div>
                        {recipe.recommended && (
                            <div className='juiciest-recommended'>
                                <Image
                                    src={
                                        recipe.recommended === 'Елена Высоцкая'
                                            ? userIcon1
                                            : userIcon2
                                    }
                                    w={4}
                                    h={4}
                                />
                                <p className='juiciest-recommended__text'>
                                    {recipe.recommended} рекомендует
                                </p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Juiciest;
