import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

export const USNews = ({ articles, pageNumber }) => {
  const router = useRouter();
  return articles.length ? (
    <>
          <div className=" w-full lg:flex flex items-center flex-col">
        <div>
          {articles.map((article, index) => (
            <div key={index}>
              <div>
              <main class="grid place-items-center h-3/4  mt-1">
                <section class="flex flex-col md:flex-row gap-6 py-2.5 px-5 bg-gray-100 rounded-md shadow-lg w-3/4 md:max-w-2xl">
                  <div class="text-indigo-500 flex flex-col justify-between">
                    <img
                      className="h-auto w-auto"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  </div>
                  <div class="text-indigo-500">
                    <small class="uppercase">{article.author}</small>
                    <h6
                      class=" text-black font-medium"
                      onClick={() => (window.location.href = article.url)}
                    >
                      {article.title}
                    </h6>
                    <small class="text-black">{article.description}</small>
                  </div>
                </section>
              </main>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-auto flex justify-center">
    <div
       className={pageNumber === 1 ?  "cursor-not-allowed":"cursor-pointer"}
      onClick={() => {
        if (pageNumber > 1) {
          router.push(`/news/us/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
        }
      }}
    >
      Previous Page
    </div>
    <div>#{pageNumber}</div>
    <div
    className={pageNumber === 5 ? "cursor-not-allowed":"cursor-pointer"}
      onClick={() => {
        if (pageNumber < 5) {
          router.push(`/news/us/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
        }
      }}
    >
      Next Page
    </div>
  </div>
    </>
  ) : (
    <div>
      <div>
        <h1>Oops! No articles for this page</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  ).then((res) => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default USNews;
