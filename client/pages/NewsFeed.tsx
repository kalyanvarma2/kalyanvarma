import { Layout } from "@/components/Layout";
import { LatestNewsFeed } from "@/components/news/LatestNewsFeed";
import { cropProtectionNews } from "@/lib/news";

export default function NewsFeed() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <LatestNewsFeed stories={cropProtectionNews} />
      </div>
    </Layout>
  );
}
