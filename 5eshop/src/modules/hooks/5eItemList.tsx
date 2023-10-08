import React, {createContext, useContext, useState, useEffect} from 'react';

export const ItemListCtx = createContext<ItemType[] | undefined>(undefined);

type Props = {
    children: React.ReactNode;
}

export default function ItemListProvider({children}: Props) {
    const [itemList, setItemList] = useState<ItemType[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Apollo-XIV/5eshop/main/media/items.json')
            .then(res => res.json())
            .then(data => setItemList(data.item));
        console.log(itemList)
    }, []);

    return (
        <ItemListCtx.Provider value={itemList}>
            {children}
        </ItemListCtx.Provider>
    );

}

export interface ItemType {
    name: string;
    rarity: string;
}