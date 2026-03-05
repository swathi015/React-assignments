function CountryCard({ country }) {

  return (
    <div className="border rounded-lg p-4 shadow text-center hover:shadow-lg">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-32 mx-auto mb-3"
      />

      <h3 className="text-lg font-semibold">
        {country.name.common}
      </h3>

      <p>Capital: {country.capital}</p>

      <p>Population: {country.population}</p>

      <p>Region: {country.region}</p>

    </div>
  );
}

export default CountryCard;