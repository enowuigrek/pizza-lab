import { Link } from 'react-router-dom';
import { articleStubs } from '../../data/articles';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

export default function ArticlesList() {
  const categoryColors = {
    techniques: 'primary',
    flours: 'warning',
    ingredients: 'success',
    tests: 'info',
    philosophy: 'default',
    experiments: 'danger',
  };

  const statusLabels = {
    ready: 'Gotowy',
    draft: 'Szkic',
    planned: 'Planowany',
    'in-progress': 'W trakcie',
  };

  // Group articles by status
  const readyArticles = articleStubs.filter(a => a.status === 'ready');
  const otherArticles = articleStubs.filter(a => a.status !== 'ready');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Artykuly</h1>
      <p className="text-gray-600 mb-8">
        Przewodniki, testy, analizy i przemyslenia o pizzy.
      </p>

      {/* Ready articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Gotowe do czytania</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readyArticles.map(article => (
            <Card
              key={article.id}
              link={`/articles/${article.slug}`}
              title={article.title}
              description={article.excerpt}
              badge={
                <Badge variant={categoryColors[article.category]}>
                  {article.category}
                </Badge>
              }
            >
              <div className="flex flex-wrap gap-1 mt-3">
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Wkrotce</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map(article => (
            <div
              key={article.id}
              className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge variant={categoryColors[article.category]}>
                  {article.category}
                </Badge>
                <span className="text-xs text-gray-500">
                  {statusLabels[article.status]}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-700">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <div className="mt-12 bg-red-50 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Chcesz wiedziec o nowych artykulach?</h3>
        <p className="text-gray-600 mb-4">
          Wkrotce uruchomimy newsletter. Zostaw email, a powiadomimy Cie o nowych tresciach.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="twoj@email.com"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700">
            Zapisz sie
          </button>
        </div>
      </div>
    </div>
  );
}
