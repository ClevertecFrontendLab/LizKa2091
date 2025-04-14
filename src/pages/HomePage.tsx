import './HomePage.css';

import { FC } from 'react';

import CookBlog from '~/components/CookBlog';
import Header from '~/components/Header';
import Juiciest from '~/components/Juiciest';
import MenuArea from '~/components/MenuArea';
import NewRecipes from '~/components/NewRecipes';
import Searchbar from '~/components/Searchbar';
import StatisticsPanel from '~/components/StatisticsPanel';
import VeganKitchen from '~/components/VeganKitchen';

const HomePage: FC = () => (
    <>
        <Header />
        <div className='layout'>
            <MenuArea />
            <main className='main'>
                <Searchbar type='default' />
                <NewRecipes />
                <Juiciest />
                <CookBlog />
                <VeganKitchen />
            </main>
            <StatisticsPanel />
        </div>
    </>
);

export default HomePage;
