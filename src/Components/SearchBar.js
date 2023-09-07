function SearchBar() {
    return (
        <div>
            <h1>Search</h1>
            <form>
                <input type="text"></input>
                <br></br>
                <input type="checkbox" id="show" name="show"></input>
                <label for="show">Only show products in stock</label>
            </form>
        </div>
    )
}

export default SearchBar