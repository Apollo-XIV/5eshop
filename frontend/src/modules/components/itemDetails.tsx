import {ItemType, useBasket} from "../hooks/globals";


type DetailsProps = {
    selectedItem: ItemType | undefined;
}

export default function ItemDetails({selectedItem}: DetailsProps) {
    const {item ,addItem, removeItem}:any = useBasket();

    return <>
    <div className="flex flex-col p-2 font-serif">
        {(selectedItem) ? <>
                <h1 className="text-2xl">{selectedItem.name}</h1>
                <p>{selectedItem.rarity}</p>
                <div className="cursor-pointer p-1 bg-sig-gold w-36 text-center font-sans rounded-md" onClick={() => addItem(selectedItem)}>add to basket</div>
                {selectedItem.entries.map((entry) => <p>{entry}</p>)}
        </> : <>
            <h1>No Item Selected</h1>
            <p>Select an item from the table on the left to read its details here.</p>
        </>}
    </div>
    
    
    </>
}