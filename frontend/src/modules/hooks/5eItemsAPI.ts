import { useState, useContext } from "react";
import { ItemListCtx } from "./globals";



export default function useItemSelection() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const items = useContext(ItemListCtx);



    return { selectedItem, setSelectedItem };
}
