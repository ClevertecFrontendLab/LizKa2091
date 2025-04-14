import { FC } from 'react';

import CategoryResults from '~/components/CategoryResults';
import Header from '~/components/Header';
import MenuArea from '~/components/MenuArea';
import Searchbar from '~/components/Searchbar';
import StatisticsPanel from '~/components/StatisticsPanel';

interface ICategoryPageProps {
    type: string;
}

const CategoryPage: FC<ICategoryPageProps> = ({ type }) => (
    <>
        <Header />
        <div className='layout'>
            <MenuArea />
            <main className='main'>
                <Searchbar type={type} />
                <CategoryResults type={type} />
            </main>
            <StatisticsPanel />
        </div>
    </>
);

export default CategoryPage;
