import Product from "./Product";
import {useState} from "react";

function ProductList() {

    let productList = [{
        "id": 1,
        "title": "Smart Aldeas",
        "description": "150+ AI business ideas across 950+ tools and 1000+ prompts",
        "logo": "./src/assets/productImage.avif",
        "votes": 0,
    },
        {
            "id": 2,
            "title": "SOCIAL GPT",
            "description": "AI tool for social media - AI detector + comment generator",
            "logo": "./src/assets/social-gpt.avif",
            "votes": 0
        },
    ]

    const [products, setProducts] = useState(productList)


    function addProduct() {
        const updateVotes = [...products, {

            "id": 2,
            "title": "SOCIAL GPT",
            "description": "AI tool for social media - AI detector + comment generator",
            "logo": "./src/assets/social-gpt.avif",
            "votes": 300

        }];

        setProducts(updateVotes);
    }


    function handleProductUpVote(productId) {

        setProducts(
            products.map((product) =>
                product.id === productId
                ? {...product, votes: product.votes + 1}
                    : {...product}
            )
        )
    }


    return (
        <div>
            {products.map(product => {
                return (
                    <Product key={product.id} id={product.id} title={product.title} description={product.description} logo={product.logo} votes={product.votes} onVote={handleProductUpVote}/>
                )
            })}
        </div>
    );
}

export default ProductList