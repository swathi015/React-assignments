function SearchBar({ setSearch }) {

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search country..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-80 rounded shadow"
      />
    </div>
  );
}

export default SearchBar;