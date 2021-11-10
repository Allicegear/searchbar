import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable (props){
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = []
    let lastCategory = null
    props.products.forEach(e => {
        if (e.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !e.stocked) {
            return;
        }
        if(e.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category = {e.category} key = {e.category}></ProductCategoryRow>
            )
        }
        rows.push(
            <ProductRow product = {e} key = {e.product} />
        )
        lastCategory = e.category
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductTable