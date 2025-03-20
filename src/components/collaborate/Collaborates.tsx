import { portfoliosURL } from "@/configs/portfolio";
import PreviewCard from "./PreviewCard";

const Collaborates = () => {
  const portfolios = Object.values(portfoliosURL);

  return (
    <div className='min-h-screen p-4 md:p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12'>
        {portfolios.map((portfolio) => (
          <PreviewCard
            key={portfolio.url}
            url={portfolio.url}
            title={portfolio.title}
            preview={portfolio.preview}
            excerpt={portfolio.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Collaborates;
