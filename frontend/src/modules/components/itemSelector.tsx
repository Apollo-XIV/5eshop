import {ItemType} from "../hooks/globals";
import { ItemListCtx } from "../hooks/globals";
import React, {useContext, useEffect, useState} from "react";
import ItemDetails from "./itemDetails";



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
          <div style={{color: "white"}} className='bg-sig-dark rounded-lg basis-1/3 h-60'>
            <ItemDetails selectedItem={activeItem} />
          </div>
        </div>
    </>
}

type DetailsProps = {
    selectedItem: ItemType | undefined
}



function ItemList({itemList, handleSelect}: {itemList: ItemType[] | undefined, handleSelect: (index:number) => void}) {
    return<>
    <div className="flex gap-1 flex-col">
        {itemList && itemList.map((item, index) =><>
        <div className="bg-transparent hover:bg-[#757575] hover:bg-opacity-20 cursor-pointer">
            <p onClick={() => {handleSelect(index)}} style={{color: "white"}}>{item.name}</p>
        </div>
        </>)}
    </div>
    </>
}
