import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Badge from '../common/Badge';

export default function LatestContent({ articles = [], title = "Najnowsze artykuly" }) {
  if (!articles.length) {
    return null;
  }

  const categoryColors = {
    techniques: 'primary',
    flours: 'warning',
    ingredients: 'success',
    tests: 'info',
    philosophy: 'default',
    experiments: 'danger',
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link
            to="/articles"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Zobacz wszystkie &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(article => (
            <Card
              key={article.id}
              link={`/articles/${article.slug}`}
              title={article.title}
              description={article.excerpt}
              image={article.featured_image}
              badge={
                <Badge variant={categoryColors[article.category] || 'default'}>
                  {article.category}
                </Badge>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
