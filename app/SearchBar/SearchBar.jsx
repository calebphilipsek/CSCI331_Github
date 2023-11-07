import {useState, useEffect } from "react"
import "./SearchBar.css"

const imgStyle = {
    width: "150"
}
// const [filteredProducts, setFilteredProducts] = useState([])

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])

    function fetchAPIData () {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(products =>{
            const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (
                    <div className="prodStyle">
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <img style={{width: "100px"}} src = {product.image} alt = {product.title}></img>
                    </div>
                )
            })
            setFilteredProducts(currentFilter)
        })
    }
    
    function handleChange(event){
        setSearchString(event.target.value)
    }

    return (
        <>
            <h1>The Search Bar</h1>
            <input type="text" value = {searchString} onChange={handleChange} />
            <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
        </>
    )
}