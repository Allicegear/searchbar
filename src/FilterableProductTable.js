import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProductTable(props){
    return(
        <div>
            <SearchBar/>
            <ProductTable products = {props.products} />
        </div>
    )
}

export default FilterableProductTable