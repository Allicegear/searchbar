function SearchBar(props){
    return(
        <form>
            <input type = "text" placeholder = "Search..." value = {props.filterText} onChange = {e => props.onFilterTextChange(e.target.value)} />
            <p>
                <input type = "checkbox" checked = {props.inStockOnly} onChange = {props.onInStockChange}/>
                {''}
                Only Show Products in Stock
            </p>
        </form>
    )
}

export default SearchBar