import { useState, useContext } from "react";

export default function useItemSelection() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);






    return { selectedItem, setSelectedItem };
}
