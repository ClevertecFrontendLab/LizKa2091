import './Searchbar.css';

import { Button, FormControl, Input, Select, Stack, Switch } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { FilterIcon } from '~/customIcons/customIcons';

const Searchbar: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className='search'>
            <div className='search__inner'>
                <h2 className='search__title'>Приятного аппетита!</h2>
                <FormControl display='flex' flexDirection='column' gap={16}>
                    <div className='search__form__row'>
                        <Button
                            className='search__form-button'
                            leftIcon={<FilterIcon w={24} h={24} />}
                            backgroundColor='#fff'
                            border='1px solid #0000007A'
                            borderRadius={6}
                            p='5px 12px 5px 17px'
                        />
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
                    </div>
                    <div className='search__form__row'>
                        <Stack spacing={3} direction='row' alignItems='center' fontWeight={500}>
                            <p className='search__form__t'>Исключить мои аллергены</p>
                            <Switch />
                        </Stack>
                        <Select
                            placeholder='Выберите из списка...'
                            maxWidth={234}
                            borderColor='#0000007A'
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
