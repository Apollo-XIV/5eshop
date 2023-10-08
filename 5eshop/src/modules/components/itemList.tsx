import { ItemListCtx } from "../hooks/5eItemList";
import React, {useContext} from "react";

export default function ItemList() {
    const itemList = useContext(ItemListCtx);
    
    return (
        <div>
            {(itemList)? itemList.map((item:any) => (
                <div>{item.name}</div>
            )): <p>Loading</p>}
        </div>
    )}

