import { useGlobalContext } from "../context/context"

const SearchForm = () => {
  // Get State from the Global Context
  const {setSearchTerm} = useGlobalContext()
  // Function to Submit Form
  const handleFormSubmit = (e) => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value
    if (!searchValue) {
      alert('Please input a text in the search bar')
      return
    }
    if (searchValue.trim() === "") {
      alert('You can\'t include empty space as text')
      return
    }
    setSearchTerm(searchValue)
  }
  return (
		<section>
			<h1 className="title">unsplash images</h1>
			<form className="search-form" onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="search"
					className="form-input search-input"
					placeholder="cat"
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</form>
		</section>
	);
}

export default SearchForm