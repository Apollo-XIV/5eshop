import React, {createContext, useContext, useState, useEffect} from 'react';

const ItemListCtx = createContext<Item | null>(null);

export function ItemCtxProvider({children}) {
    const [itemList, setItemList] = useState<Item[]>([]);

    useEffect(() => {
        fetch('/api/items')
            .then(res => res.json())
            .then(data => setItemList(data));
    }, []);

    return (
        <ItemListCtx.Provider value={itemList}>
            {children}
        </ItemListCtx.Provider>
    );

}

interface Item {
    name: string;
    rarity: string;
}