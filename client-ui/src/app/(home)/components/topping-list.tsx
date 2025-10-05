'use client';
import React from 'react'
import { Topping, ToppingCard } from './topping-card';



const toppings = [
    { id: '1', name: 'Chicken', image: '/chicken.png', price: 50, isAvailable: true },
    { id: '2', name: 'jelapeno', image: '/Jelapeno.png', price: 50, isAvailable: true },
    { id: '3', name: 'Cheese', image: '/cheese.png', price: 50, isAvailable: true },
];

export const ToppingsList = () => {
    const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);
    const handleCheckboxCheck = (topping: Topping) => {
        const isAlreadyExits = selectedToppings.some((element) => element.id === topping.id);

        if (isAlreadyExits) {
            setSelectedToppings((prev) => prev.filter(elm => elm.id !== topping.id));
            return;
        }
        setSelectedToppings((prev) => [...prev, topping]);
    };
    return (
        <section className='mt-6'>
            <h3>Extra Toppings</h3>
            <div className='grid grid-cols-3 gap-4 mt-2'>
                {
                    toppings.map(topping => {
                        return <ToppingCard
                            topping={topping}
                            key={topping.id}
                            selectedToppings={selectedToppings}
                            handleCheckboxCheck={handleCheckboxCheck}
                        />;
                    })
                }
            </div>

        </section>
    )
}
