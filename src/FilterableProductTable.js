import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"
import { useState } from "react"

function FilterableProductTable(props){
    const [stock, setStock] = useState(false)
    const [filter, setFilter] = useState("")

    const handleInStockChange = () => setStock(stock => !stock);
    const handleFilterTextChange = a => setFilter(a);

    return(
        <div>
            <SearchBar filterText = {filter} inStockOnly = {stock} onFilterTextChange = {handleFilterTextChange} onInStockChange = {handleInStockChange}/>
            <ProductTable products = {props.products} filterText = {filter} inStockOnly = {stock} />
        </div>
    )
}

export default FilterableProductTable