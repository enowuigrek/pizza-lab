import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articleStubs } from '../../data/articles';
import Badge from '../../components/common/Badge';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articleStubs.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Artykul nie znaleziony</h1>
        <Link to="/articles" className="text-red-600 hover:underline">
          Wroc do listy artykulow
        </Link>
      </div>
    );
  }

  const categoryColors = {
    techniques: 'primary',
    flours: 'warning',
    ingredients: 'success',
    tests: 'info',
    philosophy: 'default',
    experiments: 'danger',
  };

  const isPlaceholder = article.content === 'PLACEHOLDER' || article.content.includes('PLACEHOLDER');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/articles" className="text-red-600 hover:underline">Artykuly</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <Badge variant={categoryColors[article.category]} className="mb-4">
          {article.category}
        </Badge>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-xl text-gray-600">{article.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {article.tags.map(tag => (
            <span key={tag} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      {isPlaceholder ? (
        <div className="bg-amber-50 p-8 rounded-lg text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold mb-2">Artykul w przygotowaniu</h2>
          <p className="text-gray-600 mb-4">
            Ten artykul jest jeszcze pisany. Wroc wkrotce!
          </p>
          <p className="text-sm text-gray-500">
            Status: {article.status}
          </p>
        </div>
      ) : (
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </article>
      )}

      {/* Related articles */}
      <section className="mt-12 pt-8 border-t">
        <h3 className="font-bold text-xl mb-4">Powiazane artykuly</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {articleStubs
            .filter(a => a.id !== article.id && a.category === article.category)
            .slice(0, 2)
            .map(related => (
              <Link
                key={related.id}
                to={`/articles/${related.slug}`}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h4 className="font-bold mb-1">{related.title}</h4>
                <p className="text-sm text-gray-600">{related.excerpt}</p>
              </Link>
            ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link to="/articles" className="text-red-600 hover:underline">
          &larr; Wszystkie artykuly
        </Link>
        <Link to="/calculator" className="text-red-600 hover:underline">
          Kalkulator ciasta &rarr;
        </Link>
      </div>
    </div>
  );
}
