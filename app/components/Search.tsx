// app/components/SearchProducts.jsx

import { useFetcher } from "react-router";
import { useEffect, useState } from "react";

export default function SearchProducts() {
  const fetcher = useFetcher();
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   if (query.length > 0) {
  //     fetcher.load(`http://localhost:3000/api/search?q=${query}`);
  //   }
  // }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Recherche..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {fetcher.state === "loading" && (
        <p>Chargement...</p>
      )}

      <ul>
        {fetcher.data?.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}