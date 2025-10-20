import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const blogPosts = [
  {
    titleKey: "blog.post1.title",
    excerptKey: "blog.post1.excerpt",
    date: "2025-01-15",
    readTime: 5,
    category: "Product Updates"
  },
  {
    titleKey: "blog.post2.title",
    excerptKey: "blog.post2.excerpt",
    date: "2025-01-10",
    readTime: 7,
    category: "Best Practices"
  },
  {
    titleKey: "blog.post3.title",
    excerptKey: "blog.post3.excerpt",
    date: "2025-01-05",
    readTime: 6,
    category: "Success Stories"
  }
];

export default function Blog() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-lift transition-all duration-200 hover:shadow-lg border border-border flex flex-col">
                  <div className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4 w-fit">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(post.titleKey as any)}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {t(post.excerptKey as any)}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="mt-4 px-0 hover:bg-transparent group">
                    {t('blog.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-6">
              {t('blog.comingSoon')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white">
                {t('blog.subscribe')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
