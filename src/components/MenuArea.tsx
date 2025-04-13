import './MenuArea.css';

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Icon,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import {
    BlanksIcon,
    DessertsNBakeryIcon,
    DrinksIcon,
    ExitIcon,
    FirstCourseIcon,
    GrillIcon,
    KidsIcon,
    NationalIcon,
    NutritionIcon,
    SaladsIcon,
    SauceIcon,
    SecondCourseIcon,
    SnacksIcon,
    VeganIcon,
} from '~/customIcons/customIcons';

const MenuArea: FC = () => {
    const [selectedSubitem, setSelectedSubitem] = useState<string | null>(null);

    const menuItems = [
        {
            name: 'Салаты',
            icon: SaladsIcon,
            subcategories: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
        },
        {
            name: 'Закуски',
            icon: SnacksIcon,
            subcategories: [
                'Мясные закуски',
                'Рыбные закуски',
                'Овощные закуски',
                'Теплые закуски',
                'Бутерброды',
                'Фастфуд',
            ],
        },
        {
            name: 'Первые блюда',
            icon: FirstCourseIcon,
            subcategories: [
                'Мясные супы',
                'Овощные супы',
                'Бульоны',
                'Холодные супы',
                'Диетические супы',
            ],
        },
        {
            name: 'Вторые блюда',
            icon: SecondCourseIcon,
            subcategories: [
                'Мясные',
                'Рыбные',
                'Овощные',
                'Из птицы',
                'Из грибов',
                'Из субпродуктов',
                'На пару',
                'Пельмени, вареники',
                'Мучные гарниры',
                'Овощные гарниры',
                'Пицца',
                'Суши',
            ],
        },
        {
            name: 'Десерты, выпечка',
            icon: DessertsNBakeryIcon,
            subcategories: [
                'Блины и оладьи',
                'Пироги и пончики',
                'Торты',
                'Рулеты',
                'Кексы и маффины',
                'Сырники и ватрушки',
                'Из слоёного теста',
                'Из заварного теста',
                'Из дрожжевого теста',
                'Булочки и сдоба',
                'Хлеб',
                'Тесто на пиццу',
                'Кремы',
            ],
        },
        {
            name: 'Блюда на гриле',
            icon: GrillIcon,
            subcategories: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
        },
        {
            name: 'Веганская кухня',
            icon: VeganIcon,
            subcategories: [
                'Закуски',
                'Первые блюда',
                'Вторые блюда',
                'Гарниры',
                'Десерты',
                'Выпечка',
                'Сыроедческие блюда',
                'Напитки',
            ],
        },
        {
            name: 'Детские блюда',
            icon: KidsIcon,
            subcategories: [
                'Первые блюда',
                'Вторые блюда',
                'Гарниры',
                'Выпечка',
                'Без глютена',
                'Без сахара',
                'Без аллергенов',
                'Блюда для прикорма',
            ],
        },
        {
            name: 'Лечебное питание',
            icon: NutritionIcon,
            subcategories: [
                'Детская диета',
                'Диета №1',
                'Диета №2',
                'Диета №3',
                'Диета №4',
                'Диета №5',
                'Диета №6',
                'Диета №7',
                'Диета №8',
                'Диета №9',
                'Диета №10',
                'Диета №11',
                'Диета №12',
                'Диета №13',
                'Диета №14',
                'Без глютена',
                'Без аллергенов',
            ],
        },
        {
            name: 'Национальные',
            icon: NationalIcon,
            subcategories: [
                'Американская кухня',
                'Армянская кухня',
                'Греческая кухня',
                'Грузинская кухня',
                'Итальянская кухня',
                'Испанская кухня',
                'Китайская кухня',
                'Мексиканская кухня',
                'Паназиатская кухня',
                'Русская кухня',
                'Турецкая кухня',
                'Французская кухня',
                'Шведская кухня',
                'Японская кухня',
                'Другая кухня',
            ],
        },
        {
            name: 'Соусы',
            icon: SauceIcon,
            subcategories: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
        },
        {
            name: 'Напитки',
            icon: DrinksIcon,
            subcategories: [
                'Мясные заготовки',
                'Рыбные заготовки',
                'Из огурцов',
                'Из томатов',
                'Из грибов',
                'Овощные заготовки',
                'Салаты, икра',
                'Из фруктов и ягод',
            ],
        },
        {
            name: 'Заготовки',
            icon: BlanksIcon,
            subcategories: [
                'Соки и фреши',
                'Смузи',
                'Компоты',
                'Кисели',
                'Кофе',
                'Лечебный чай',
                'Квас',
                'Коктейли',
                'Алкогольные',
            ],
        },
    ];

    return (
        <aside className='menu-area aside'>
            <Accordion allowToggle p={10} className='accordion'>
                {menuItems.map((item, index) => (
                    <AccordionItem key={index}>
                        <Box as='h2' m={0}>
                            <AccordionButton
                                className='accordion__button'
                                _expanded={{ bg: '#EAFFC7', fontWeight: 700 }}
                                _hover={{ bg: '#FFFFD3', fontWeight: 700 }}
                                border='0'
                                fontWeight={500}
                                bgColor='inherit'
                                color='#000'
                                display='flex'
                                justifyContent='space-between'
                                fontSize='1rem'
                                p='12px 8px'
                                m={0}
                            >
                                <div className='accordion-button__item-info'>
                                    <Icon as={item.icon} boxSize='24px' />
                                    <p className='accordion-button__item-name'>{item.name}</p>
                                </div>
                                <AccordionIcon width={16} height={16} />
                            </AccordionButton>
                        </Box>
                        {item.subcategories.map((subcategory, index) => (
                            <AccordionPanel
                                key={index}
                                onClick={() => setSelectedSubitem(subcategory)}
                                pb={4}
                                color='#000'
                                display='flex'
                                alignItems='center'
                            >
                                <div
                                    className='subcategory-rectange'
                                    style={{
                                        width: selectedSubitem === subcategory ? '8px' : '1px',
                                        height: selectedSubitem === subcategory ? '28px' : '24px',
                                    }}
                                ></div>
                                <Button
                                    bgColor='inherit'
                                    fontSize='1rem'
                                    fontWeight={selectedSubitem === subcategory ? '700' : '500'}
                                    color='#000'
                                    _hover={{ border: '0', fontWeight: 700 }}
                                    _focus={{ outline: 'none' }}
                                >
                                    {subcategory}
                                </Button>
                            </AccordionPanel>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
            <div className='menu-area__extra'>
                <p className='menu-area__extra-version'>Версия программы 03.25</p>
                <p className='menu-area__extra-rights'>
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </p>
                <Button
                    leftIcon={<ExitIcon />}
                    bgColor='inherit'
                    color='#000'
                    display='flex'
                    justifyContent='flex-start'
                    alignItems='center'
                    padding={0}
                    width='90dvw'
                    maxWidth={208}
                >
                    Выйти
                </Button>
            </div>
        </aside>
    );
};

export default MenuArea;
