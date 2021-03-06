import data from '../data.js'

const {products} = data

const HomeScreen = {
    render() {
        return /* html */ `
            <ul class="products">
                ${products
                    .map(
                        (product) => /* html */ `
                    <li>
                        <div class="product">
                            <a href="/#/product/${product._id}">
                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                />
                            </a>
                            <div class="product-name">
                                <a href="/#/product/${product._id}">${product.name}</a>
                            </div>
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-price">${product.price}</div>
                        </div>
                    </li>
                `
                    )
                    .join('\n')}
            </ul>
        `
    },
}

export default HomeScreen
