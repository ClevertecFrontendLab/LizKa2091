import './NewRecipes.css';

import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { FavoriteIcon } from '~/customIcons/customIcons';
import { MarkIcon } from '~/customIcons/customIcons';
import {
    DessertsNBakeryIcon,
    FirstCourseIcon,
    SaladsIcon,
    VeganIcon,
} from '~/customIcons/customIcons';
import recipeImg1 from '~/images/recipe1.png';
import recipeImg2 from '~/images/recipe2.png';
import recipeImg3 from '~/images/recipe3.png';
import recipeImg4 from '~/images/recipe4.png';

interface IRecipeItem {
    title: string;
    description: string;
    category: string;
    categoryImage: React.ElementType;
    marks?: number;
    favorites?: number;
    image: string;
}

const NewRecipes: FC = () => {
    const recipes: IRecipeItem[] = [
        {
            title: 'Солянка с грибами',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Первые блюда',
            categoryImage: FirstCourseIcon,
            marks: 1,
            image: recipeImg1,
        },
        {
            title: 'Капустные котлеты',
            description:
                'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
            category: 'Веганские блюда',
            categoryImage: VeganIcon,
            marks: 2,
            favorites: 1,
            image: recipeImg2,
        },
        {
            title: 'Оладьи на кефире "Пышные"',
            description:
                'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
            category: 'Десерты, выпечка',
            categoryImage: DessertsNBakeryIcon,
            favorites: 1,
            image: recipeImg3,
        },
        {
            title: 'Салат "Здоровье"',
            description:
                'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
            category: 'Салаты',
            categoryImage: SaladsIcon,
            image: recipeImg4,
        },
    ];

    return (
        <div className='new-recipes'>
            <h2 className='new-recipes__title'>Новые рецепты</h2>
            <ul className='new-recipes__list'>
                {recipes.map((recipe: IRecipeItem, index: number) => (
                    <li key={index} className='new-recipes__item'>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className='new-recipes__item-img'
                        />
                        <div className='new-recipes__item-container'>
                            <p className='new-recipes__item-title'>{recipe.title}</p>
                            <p className='new-recipes__item-description'>{recipe.description}</p>
                            <div className='new-recipes__item-bottom'>
                                <span className='new-recipes__item-category'>
                                    <recipe.categoryImage />
                                    {recipe.category}
                                </span>
                                <div className='new-recipes__item-buttons'>
                                    {recipe.marks && (
                                        <Button
                                            leftIcon={<MarkIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            width='34px'
                                            height='24px'
                                        >
                                            {recipe.marks}
                                        </Button>
                                    )}
                                    {recipe.favorites && (
                                        <Button
                                            leftIcon={<FavoriteIcon />}
                                            backgroundColor='#fff'
                                            color='#2DB100'
                                            width='32px'
                                            height='24px'
                                        >
                                            {recipe.favorites}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewRecipes;
