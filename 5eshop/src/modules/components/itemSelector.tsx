import {ItemType} from "../hooks/5eItemList";
import { ItemListCtx } from "../hooks/5eItemList";
import React, {useContext, useEffect, useState} from "react";




export default function ItemSelector() {
    const [activeItem, setActiveItem] = useState<ItemType | undefined>(undefined)
    const itemList = useContext(ItemListCtx);
    
    function handleSelect(index: number) {
        if (itemList) {
            setActiveItem(itemList[index])
        }
    }

    return <>
        <div className='flex w-full gap-4'>
          <div className='bg-sig-dark rounded-lg grow basis-60 h-60 overflow-auto p-2'>
            <ItemList handleSelect={handleSelect} itemList={itemList}/>
          </div>
          <div className='bg-sig-dark rounded-lg basis-1/3 h-60'>
            <ItemDetails selectedItem={activeItem} />
          </div>
        </div>
    </>
}

type DetailsProps = {
    selectedItem: ItemType | undefined
}

function ItemDetails({selectedItem}: DetailsProps) {
    if (!selectedItem) {
        return <>
            <h1>No Item Selected</h1>
            <p>Test</p>
            <p>Test</p>
        </>
    } else {
        return <>
            <h1>{selectedItem.name}</h1>
        </>
    }
}

function ItemList({itemList, handleSelect}: {itemList: ItemType[] | undefined, handleSelect: (index:number) => void}) {
    return<>
        {itemList && itemList.map((item, index) =><>
            <p onClick={() => {handleSelect(index)}} className="text-black">{item.name}</p>
        </>)}
    </>
}