import './StatisticsPanel.css';

import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { FavoriteIcon, MarkIcon, NoteIcon, PeopleIcon } from '~/customIcons/customIcons';

const StatisticsPanel: FC = () => (
    <aside className='statistics-panel aside'>
        <div className='statistics-panel__statistics-buttons'>
            <Button
                leftIcon={<MarkIcon />}
                backgroundColor='#fff'
                color='#2DB100'
                width={85}
                height={10}
            >
                185
            </Button>
            <Button
                leftIcon={<PeopleIcon />}
                backgroundColor='#fff'
                color='#2DB100'
                width={85}
                height={10}
            >
                589
            </Button>
            <Button
                leftIcon={<FavoriteIcon />}
                backgroundColor='#fff'
                color='#2DB100'
                width={85}
                height={10}
            >
                587
            </Button>
        </div>
        <div className='statistics-panel__note'>
            <Button
                leftIcon={<NoteIcon width={12} height={12} />}
                p={0}
                background='radial-gradient(50.00% 50.00% at 50% 50%,rgba(196, 255, 97, 0.7),rgba(255, 255, 255, 0) 100%)'
                _hover={{ outline: 'none', border: 0 }}
                _active={{ outline: 'none', border: 0 }}
            />
            <p className='statistics-panel__note-text'>Записать рецепт</p>
        </div>
    </aside>
);

export default StatisticsPanel;
