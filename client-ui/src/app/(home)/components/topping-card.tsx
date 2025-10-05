'use client';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
export type Topping = {
    id: string;
    name: string;
    price: number;
    image: string;
    isAvailable: boolean;
}
type propType = {
    topping: Topping;
    selectedToppings: Topping[];
    handleCheckboxCheck: (topping: Topping) => void;
}

export const ToppingCard = ({ topping, selectedToppings, handleCheckboxCheck }: propType) => {

    const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id);

    return (
        <Button
            onClick={() => handleCheckboxCheck(topping)}
            variant={'outline'}
            className={cn('flex flex-col h-42 relative', isCurrentSelected ? 'border-primary' : '')}>
            <Image src={topping.image} width={80} height={80} alt={topping.name} />
            <h4>{topping.name}</h4>
            <p>&#8377;{topping.price}</p>
            {
                isCurrentSelected && <CircleCheckBig className='absolute top-1 right-1 text-primary' />
            }

        </Button>
    )
}
