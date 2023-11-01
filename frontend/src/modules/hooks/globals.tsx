import React, {createContext, useContext, useState, useEffect} from 'react';

export const ItemListCtx = createContext<ItemType[] | undefined>(undefined);
export const basketCtx = createContext<{items:ItemType[],addItem:(item:ItemType)=>void,removeItem:(index:number)=>void} | null>(null)

export function useBasket() {return useContext(basketCtx)}


type Props = {
    children: React.ReactNode;
}

export default function Ctxs({children}: Props) {
    const [itemList, setItemList] = useState<ItemType[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Apollo-XIV/5eshop/main/media/items.json')
            .then(res => res.json())
            .then(data => setItemList(data.item));
        console.log(itemList)
    }, []);

    const [items, setItems] = useState<ItemType[]>([]);
    
    // Step 2: Create functions to add and subtract items
    const addItem = (item: ItemType) => {
      setItems([...items, item]);
      console.log([...items, item])
    };
    
    const removeItem = (index: number) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };


    return (
        <ItemListCtx.Provider value={itemList}>
        <basketCtx.Provider value={{items, addItem, removeItem}}>
            {children}
        </basketCtx.Provider>
        </ItemListCtx.Provider>
    );

}

export interface ItemType {
    name: string;
    rarity: string;
    entries: string[];
    source: string;
}