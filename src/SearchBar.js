function SearchBar(props){
    return(
        <form>
            <input type = "text" placeholder = "Search..." />
            <p>
                <input type = "checkbox" />
                {''}
                Only Show Products in Stock
            </p>
        </form>
    )
}

export default SearchBar