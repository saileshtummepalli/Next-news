import axios from "axios";
import React, { useEffect, useState } from "react";

function Everything() {
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("business");
  const [articlesdata, setArticlesData] = useState("");

  const getApiData = async (country, category) => {
    const api = await axios(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e3df339343b849bdb59918baa15fe060`
    );
    const response = api;
    setArticlesData(response.data);
  };

  useEffect(() => {
    getApiData(country, category);
  }, [country, category]);
  return (
    <>
      <nav class=" bg-white w-full flex relative justify-center items-center mx-auto px-8 h-20">
        <select
          class="appearance-none"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="in">in</option>
          <option value="us">us</option>
          <option value="ca">ca</option>
        </select>
        &nbsp;
        <select
          class="appearance-none"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="business">business</option>
          <option value="entertainment">entertainment</option>
          <option value="general">general</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="technology">technology</option>
        </select>
      </nav>
      {articlesdata &&
        articlesdata.articles.map((a, index) => {
          return (
            <div className="w-full lg:flex flex items-center flex-col" key={index}>
              <main class="grid place-items-center   mt-1">
                <section class="flex flex-col md:flex-row gap-6 py-2.5 px-5 bg-gray-100 rounded-md shadow-lg w-3/4 md:max-w-2xl">
                  <div class="text-indigo-500 flex flex-col justify-between">
                    <img
                      className="h-auto w-auto"
                      src={a.urlToImage}
                      alt={a.title}
                    />
                  </div>
                  <div class="text-indigo-500">
                    <small class="uppercase">{a.author}</small>
                    <h6
                      class=" text-black font-medium"
                      onClick={() => (window.location.href = a.url)}
                    >
                      {a.title}
                    </h6>
                    <small class="text-black">{a.description}</small>
                  </div>
                </section>
              </main>
            </div>
          );
        })}
    </>
  );
}

export default Everything;
