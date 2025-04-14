import './CategoryResults.css';

import { Button, Image, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { FC } from 'react';

// eslint-disable-next-line import/order
import {
    FavoriteIcon,
    FirstCourseIcon,
    GrillIcon,
    KidsIcon,
    MarkIcon,
    NationalIcon,
    SecondCourseIcon,
    VeganIcon,
} from '~/customIcons/customIcons';

interface ICategoryItem {
    title: string;
    description: string;
    category: string;
    categoryIcon: React.ElementType;
    marks?: number;
    favorites?: number;
    image: string;
    recommended?: string;
}

interface ICategoryList {
    title: string;
    items: ICategoryItem[];
}

interface ICategoryResultsProps {
    type: string;
}

import juiciestImg1 from '~/images/juiciestImg1.png';
import juiciestImg3 from '~/images/juiciestImg3.png';
import juiciestImg4 from '~/images/juiciestImg4.png';
import secondCourseImg1 from '~/images/secondCourseImg1.png';
import secondCourseImg2 from '~/images/secondCourseImg2.png';
import secondCourseImg3 from '~/images/secondCourseImg3.png';
import secondCourseImg4 from '~/images/secondCourseImg4.png';
import secondCourseImg6 from '~/images/secondCourseImg6.png';
import secondCourseImg7 from '~/images/secondCourseImg7.png';
import secondCourseImg8 from '~/images/secondCourseImg8.png';

const CategoryResults: FC<ICategoryResultsProps> = ({ type }) => {
    let categoryItems: ICategoryList[] | ICategoryItem[] = [];

    if (type === 'vegan') {
        categoryItems = [
            { title: 'Закуски', items: [] },
            { title: 'Первые блюда', items: [] },
            {
                title: 'Вторые блюда',
                items: [
                    {
                        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                        description:
                            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                        category: 'Национальные',
                        categoryIcon: NationalIcon,
                        marks: 85,
                        favorites: 152,
                        image: secondCourseImg1,
                    },
                    {
                        title: 'Картофельные рулетики с грибами',
                        description:
                            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
                        category: 'Детские блюда',
                        categoryIcon: KidsIcon,
                        marks: 85,
                        favorites: 152,
                        image: secondCourseImg2,
                    },
                    {
                        title: 'Том-ям с капустой кимчи',
                        description:
                            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        category: 'Национальные',
                        categoryIcon: NationalIcon,
                        marks: 124,
                        favorites: 324,
                        image: secondCourseImg3,
                    },
                    {
                        title: 'Овощная лазанья из лаваша',
                        description:
                            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
                        category: 'Блюда на гриле',
                        categoryIcon: GrillIcon,
                        marks: 85,
                        favorites: 152,
                        image: secondCourseImg4,
                    },
                    {
                        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
                        description:
                            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
                        category: 'Вторые блюда',
                        categoryIcon: SecondCourseIcon,
                        marks: 85,
                        favorites: 152,
                        image: secondCourseImg6,
                    },
                    {
                        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
                        description:
                            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
                        category: 'Вторые блюда',
                        categoryIcon: SecondCourseIcon,
                        marks: 85,
                        favorites: 152,
                        image: secondCourseImg6,
                    },
                    {
                        title: 'Чесночная картошка',
                        description:
                            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
                        category: 'Национальные',
                        categoryIcon: NationalIcon,
                        marks: 124,
                        favorites: 324,
                        image: secondCourseImg7,
                    },
                    {
                        title: 'Пури',
                        description:
                            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
                        category: 'Национальные',
                        categoryIcon: NationalIcon,
                        marks: 124,
                        favorites: 324,
                        image: secondCourseImg8,
                    },
                ],
            },
            { title: 'Гарниры', items: [] },
            { title: 'Десерты', items: [] },
            { title: 'Сыроедческие блюда', items: [] },
            { title: 'Напитки', items: [] },
        ];
    } else if (type === 'juiciest') {
        categoryItems = [
            {
                title: 'Лапша с курицей и шафраном',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: 'Вторые блюда',
                categoryIcon: SecondCourseIcon,
                marks: 258,
                favorites: 342,
                image: juiciestImg1,
                recommended: 'Alex Cook',
            },
            {
                title: 'Том-ям с капустой кимчи',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: 'Национальные',
                categoryIcon: NationalIcon,
                marks: 124,
                favorites: 324,
                image: secondCourseImg3,
            },
            {
                title: 'Пряная ветчина по итальянски',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: 'Вторые блюда',
                categoryIcon: SecondCourseIcon,
                marks: 159,
                favorites: 257,
                image: juiciestImg3,
                recommended: 'Елена Высоцкая',
            },
            {
                title: 'Кнели со спагетти',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: 'Вторые блюда',
                categoryIcon: SecondCourseIcon,
                marks: 124,
                favorites: 231,
                image: juiciestImg4,
            },
            {
                title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                description:
                    'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                category: 'Вторые блюда',
                categoryIcon: SecondCourseIcon,
                marks: 120,
                favorites: 180,
                image: secondCourseImg1,
            },
            {
                title: 'Картофельные рулетики с грибами',
                description:
                    'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
                category: 'Детские блюда',
                categoryIcon: KidsIcon,
                marks: 85,
                favorites: 180,
                image: secondCourseImg2,
            },
            {
                title: 'Овощная лазанья из лаваша',
                description:
                    'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
                category: 'Блюда на гриле',
                categoryIcon: GrillIcon,
                marks: 85,
                favorites: 152,
                image: secondCourseImg4,
            },
            {
                title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
                description:
                    'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
                category: 'Вторые блюда',
                categoryIcon: SecondCourseIcon,
                marks: 85,
                favorites: 150,
                image: secondCourseImg6,
            },
        ];
    }

    const getAllItems = (items: ICategoryList[] | ICategoryItem[]): ICategoryItem[] => {
        if (items.length === 0) return [];

        if ('items' in items[0]) {
            return (items as ICategoryList[]).flatMap((list) => list.items);
        }
        return items as ICategoryItem[];
    };

    const itemsToRender = getAllItems(categoryItems);

    return (
        <div className='category'>
            {type === 'vegan' && (
                <Tabs position='relative'>
                    <TabList display='flex' justifyContent='center' alignItems='center'>
                        {categoryItems.map((item) => (
                            <Tab
                                fontWeight={500}
                                color='#134B00'
                                border='0'
                                _focus={{ outline: 'none' }}
                                _selected={{ color: '#2DB100' }}
                            >
                                {item.title}
                            </Tab>
                        ))}
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='#2DB100' borderRadius='1px' />
                </Tabs>
            )}
            <ul className='category__list'>
                {itemsToRender.map((item: ICategoryItem, index) => (
                    <li key={index} className='category__item'>
                        <Image src={item.image} alt={item.title} className='category__item-image' />
                        <div className='category__item-container'>
                            <div className='category__item-top'>
                                <span className='category__item-category'>
                                    <item.categoryIcon />
                                    {item.category}
                                </span>
                                <div className='category__item-buttons'>
                                    {item.marks && (
                                        <Button
                                            leftIcon={<MarkIcon />}
                                            backgroundColor='#fff'
                                            fontSize='0.75rem'
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
                                            fontSize='0.75rem'
                                            color='#2DB100'
                                            p='0 4px'
                                        >
                                            {item.favorites}
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className='category__item-middle'>
                                <p className='category__item-title'>{item.title}</p>
                                <p className='category__item-description'>{item.description}</p>
                            </div>
                            <div className='category__item-bottom'>
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
                    </li>
                ))}
            </ul>
            <Button backgroundColor='#B1FF2E' borderRadius={6} fontWeight='600' w={152} h={10}>
                Загрузить еще
            </Button>
            <div className='category__extra'>
                {type === 'vegan' && (
                    <>
                        <div className='category__extra-top'>
                            <h3 className='category__extra-title'>Десерты, выпечка</h3>
                            <p className='category__extra-subtitle'>
                                Без них невозможно представить себе ни современную, ни традиционную
                                кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно,
                                хлеб - рецепты изделий из теста многообразны и невероятно популярны.
                            </p>
                        </div>
                        <div className='category__extra-bottom'>
                            <ul className='category__extra-list'>
                                <li className='category__extra-item'>
                                    <p className='category__extra-item-title'>
                                        Бананово-молочное желе
                                    </p>
                                    <p className='category__extra-item-text'>
                                        Молочное желе – это просто, вкусно и полезно, ведь для его
                                        приготовления в качестве основы используется молоко.
                                    </p>
                                    <div className='category__extra-item-bottom'>
                                        <span className='category__extra-item-category'>
                                            <KidsIcon />
                                            Детские блюда
                                        </span>
                                        <div className='category__item-bottom'>
                                            <Button
                                                leftIcon={<MarkIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                            <Button
                                                leftIcon={<FavoriteIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                                <li className='category__extra-item'>
                                    <p className='category__extra-item-title'>
                                        Нежный сливочно-сырный крем для кексов
                                    </p>
                                    <p className='category__extra-item-text'>
                                        Сливочно-сырным кремом можно украсить кексы, либо другую
                                        выпечку, а также этим кремом можно наполнить заварные
                                        пирожные.
                                    </p>
                                    <div className='category__extra-item-bottom'>
                                        <span className='category__extra-item-category'>
                                            <KidsIcon />
                                            Детские блюда
                                        </span>
                                        <div className='category__item-bottom'>
                                            <Button
                                                leftIcon={<MarkIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                2
                                            </Button>
                                            <Button
                                                leftIcon={<FavoriteIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className='category__extra-list--more'>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <SecondCourseIcon />
                                        Стейк для вегетарианцев
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <SecondCourseIcon />
                                        Котлеты из гречки и фасоли
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <FirstCourseIcon />
                                        Сырный суп с лапшой и брокколи
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
                {type === 'juiciest' && (
                    <>
                        <div className='category__extra-top'>
                            <h3 className='category__extra-title'>Веганская кухня</h3>
                            <p className='category__extra-subtitle'>
                                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                                попробовать вегетарианскую диету и готовить вкусные вегетарианские
                                блюда.
                            </p>
                        </div>
                        <div className='category__extra-bottom'>
                            <ul className='category__extra-list'>
                                <li className='category__extra-item'>
                                    <p className='category__extra-item-title'>
                                        Картошка, тушенная с болгарским перцем и фасолью в томатном
                                        соусе
                                    </p>
                                    <p className='category__extra-item-text'>
                                        Картошка, тушенная с болгарским перцем, фасолью, морковью и
                                        луком, - вариант сытного блюда на каждый день. Фасоль в
                                        данном случае заменяет мясо, делая рагу сытным и
                                        питательным. Чтобы сократить время приготовления, возьмём
                                        консервированную фасоль. Блюдо хоть и простое, но в полной
                                        мере наполнено ароматами и имеет выразительный вкус за счёт
                                        добавления томатной пасты.
                                    </p>
                                    <div className='category__extra-item-bottom'>
                                        <span className='category__extra-item-category'>
                                            <SecondCourseIcon />
                                            Вторые блюда
                                        </span>
                                        <div className='category__item-bottom'>
                                            <Button
                                                leftIcon={<MarkIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                            <Button
                                                leftIcon={<FavoriteIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                                <li className='category__extra-item'>
                                    <p className='category__extra-item-title'>Капустные котлеты</p>
                                    <p className='category__extra-item-text'>
                                        Капустные котлеты по этому рецепту получаются необычайно
                                        пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная
                                        нотка наверняка помогут сделать эти чудесные котлеты из
                                        капусты одним из ваших любимых овощных блюд.
                                    </p>
                                    <div className='category__extra-item-bottom'>
                                        <span className='category__extra-item-category'>
                                            <SecondCourseIcon />
                                            Вторые блюда
                                        </span>
                                        <div className='category__item-bottom'>
                                            <Button
                                                leftIcon={<MarkIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                2
                                            </Button>
                                            <Button
                                                leftIcon={<FavoriteIcon />}
                                                backgroundColor='#fff'
                                                fontSize='0.75rem'
                                                color='#2DB100'
                                                p='0 4px'
                                            >
                                                1
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className='category__extra-list--more'>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <KidsIcon />
                                        Домашние сырные палочки
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <NationalIcon />
                                        Панкейки
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                                <li className='category__extra-item--more'>
                                    <div className='category__extra-item-left'>
                                        <VeganIcon />
                                        Воздушное банановое печенье на сковороде
                                    </div>
                                    <Button
                                        backgroundColor='#fff'
                                        border='1px solid #2DB100'
                                        borderRadius={6}
                                        fontSize='0.875rem'
                                        fontWeight={600}
                                        color='#2DB100'
                                        w={87}
                                        h={8}
                                    >
                                        Готовить
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CategoryResults;
