"use client"
import { ItemType } from '../hooks/globals';
import { useEffect, useState, useContext} from 'react';
import { useBasket } from '../hooks/globals';

export default function Basket() {
    const { items }: any = useBasket();

    useEffect(() => {console.log("beep"+items)}, [items])

    return <>
        <div className='w-full min-h-[100px] bg-sig-dark rounded-lg'>
            {items.map((item: ItemType, index:number) => <>
                <p key={item.source+index.toString()}>{item.name}</p>
            </>)}

        </div>
    </>
  }