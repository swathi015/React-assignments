import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

 
function App() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch countries");
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
         Country Explorer
      </h1>

      <SearchBar setSearch={setSearch} />

      {loading && <p className="text-center">Loading countries...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}

    </div>
  );
}

export default App;
