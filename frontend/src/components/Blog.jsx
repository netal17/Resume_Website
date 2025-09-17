import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-slate-800">Latest Articles</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Sharing insights and learnings from AI/ML development
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {portfolioData.blog.map((post, index) => (
              <Card key={post.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Post Meta */}
                  <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Post Excerpt */}
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button 
                    variant="outline" 
                    className="group/btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Articles CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">More Technical Insights Coming Soon</h3>
                <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  I regularly share deep dives into AI/ML implementations, best practices, and lessons learned 
                  from real-world projects. Stay tuned for more technical content!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                  >
                    Subscribe for Updates
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
                  >
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;