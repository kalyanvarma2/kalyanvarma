import { Layout } from "@/components/Layout";
import { LatestNewsFeed } from "@/components/news/LatestNewsFeed";
import { getLatestNews } from "@/lib/services/newsService";

export default function NewsFeed() {
  const stories = getLatestNews();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <LatestNewsFeed items={stories} title="Crop Protection News Feed" />
      </div>
    </Layout>
  );
}
