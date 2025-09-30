import { motion } from "framer-motion";

const pressQuotes = [
  {
    content:
      "Fresh solution to a rotten issue: teens develop award-winning Mazah app to help people reduce food waste.",
    logo: "/assets/SCMP_logo.svg.png",
    url: "https://www.youngpostclub.com/yp/discover/news/environment/article/3263866/fresh-solution-rotten-issue-teens-develop-award-winning-mazah-app-help-people-reduce-food-waste",
  },
  {
    content:
      "Young conservationists creating positive change: announcing the 2024 Global Slingshot Challenge award recipients.",
    logo: "/assets/Nat_Geo_Logo.png",
    url: "https://www.prnewswire.com/news-releases/young-conservationists-creating-positive-change-announcing-the-2024-global-slingshot-challenge-award-recipients-302140325.html",
  },
];

export default function PressSection() {
  return (
    <section id="press" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-ttcommons text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mazah in the Press
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what the media is saying about our mission to fight food waste.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pressQuotes.map((quote, index) => (
            <motion.a
              key={quote.url}
              href={quote.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 block"
            >
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                “{quote.content}”
              </p>
              <div className="flex items-center justify-center">
                {quote.logo && (
                  <img
                    src={quote.logo}
                    alt="Press logo"
                    className="h-10 object-contain"
                  />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
