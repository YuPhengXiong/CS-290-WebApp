import OrderRow from './OrderRow.jsx';

function OrderPage({ products }) {
    return (
        <>
            <h2>Order Page</h2>
            <article>
                <p></p>
                <table id="order">
                    <caption>Current Products</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => 
                            <OrderRow 
                                product={product} 
                                key={i} 
                            />)}
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th colSpan="3">Running total</th>
                        </tr>
                    </tfoot> */}
                </table>
            </article>
        </>
    )
}
export default OrderPage;