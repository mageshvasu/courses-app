import './style.scss';

function SearchBar() {
	return (
		<form className='search-wrapper cf'>
			<input
				type='text'
				placeholder='Enter course name...'
				required
				style={{ boxShadow: 'none' }}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}
export default SearchBar;
