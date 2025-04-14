import './Searchbar.css';

import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import { FilterIcon } from '~/customIcons/customIcons';

interface ISearchbarProps {
    type: string;
}

const Searchbar: FC<ISearchbarProps> = ({ type }) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className='search'>
            <div className='search__inner'>
                {type === 'default' && <h2 className='search__title'>Приятного аппетита!</h2>}
                {type === 'vegan' && (
                    <>
                        <h2 className='search__title'>Веганская кухня</h2>
                        <h3 className='search__subtitle'>
                            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                            попробовать вегетарианскую диету и готовить вкусные вегетарианские
                            блюда.
                        </h3>
                    </>
                )}
                {type === 'juiciest' && <h2 className='search__title'>Самое сочное</h2>}
                <FormControl display='flex' flexDirection='column' alignItems='center' gap={4}>
                    <div className='search__form__row'>
                        <Button
                            className='search__form-button'
                            leftIcon={<FilterIcon w={24} h={24} boxSize={6} />}
                            backgroundColor='#fff'
                            border='1px solid #0000007A'
                            borderRadius={6}
                            p='7.5px 5.5px 7.5px 12.5px'
                        />
                        <InputGroup>
                            <InputRightElement pointerEvents='none' children={<SearchIcon />} />
                            <Input
                                onChange={handleSearchChange}
                                value={searchInput}
                                type='text'
                                placeholder='Название или ингредиент...'
                                fontSize='1.125rem'
                                backgroundColor='#fff'
                                width='100%'
                                border='1px solid #0000007A'
                                borderRadius={6}
                                color='#134B00'
                                padding='13px 16px'
                                _placeholder={{ color: '#134B00' }}
                            />
                        </InputGroup>
                    </div>
                    <div className='search__form__row'>
                        <Stack spacing={3} direction='row' alignItems='center' fontWeight={500}>
                            <p className='search__form__t'>Исключить мои аллергены</p>
                            <Switch />
                        </Stack>
                        <Select
                            placeholder='Выберите из списка...'
                            maxWidth={234}
                            borderColor='#00000014'
                            borderRadius='6px'
                            backgroundColor='#fff'
                            color='#134B00'
                            fontSize='1rem'
                            _placeholder={{ color: '#A0AEC0' }}
                        >
                            <option value='food'>Еда</option>
                        </Select>
                    </div>
                </FormControl>
            </div>
        </div>
    );
};

export default Searchbar;
