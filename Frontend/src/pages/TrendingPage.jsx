import React, { useState } from "react";
import { FaFire, FaTrophy, FaClock, FaEye, FaHeart, FaComment, FaFilter, FaChartLine, FaBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";

const TrendingPage = () => {
  const [activeFilter, setActiveFilter] = useState("today");
  const [activeCategory, setActiveCategory] = useState("all");

  const filters = [
    { id: "today", label: "Today", icon: FaClock },
    { id: "week", label: "This Week", icon: FaChartLine },
    { id: "month", label: "This Month", icon: FaTrophy },
    { id: "alltime", label: "All Time", icon: FaFire }
  ];

  const categories = ["All", "React", "Node.js", "JavaScript", "CSS", "Database", "DevOps", "AI/ML"];

  const trendingPosts = [
    {
      id: 1,
      rank: 1,
      title: "Building a Real-Time Chat Application with Socket.io and React",
      excerpt: "Learn how to create a production-ready real-time chat application with user authentication, message persistence, and typing indicators.",
      author: "Alex Turner",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600",
      category: "React",
      readTime: "15 min read",
      views: 12453,
      likes: 1842,
      comments: 156,
      date: "2 hours ago",
      trending: "+325%"
    },
    {
      id: 2,
      rank: 2,
      title: "Advanced TypeScript: Generics and Type Guards Explained",
      excerpt: "Deep dive into TypeScript's most powerful features and learn how to write type-safe, maintainable code.",
      author: "Sarah Martinez",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
      category: "JavaScript",
      readTime: "12 min read",
      views: 10234,
      likes: 1567,
      comments: 128,
      date: "5 hours ago",
      trending: "+298%"
    },
    {
      id: 3,
      rank: 3,
      title: "Microservices Architecture: From Monolith to Distributed Systems",
      excerpt: "A comprehensive guide to breaking down monolithic applications into scalable microservices with Docker and Kubernetes.",
      author: "Michael Chen",
      authorAvatar: "https://i.pravatar.cc/150?img=8",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
      category: "DevOps",
      readTime: "18 min read",
      views: 9876,
      likes: 1423,
      comments: 98,
      date: "8 hours ago",
      trending: "+267%"
    },
    {
      id: 4,
      rank: 4,
      title: "CSS Grid Layout: Complete Guide with Practical Examples",
      excerpt: "Master CSS Grid with real-world examples and learn how to create complex, responsive layouts with ease.",
      author: "Emma Wilson",
      authorAvatar: "https://i.pravatar.cc/150?img=9",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600",
      category: "CSS",
      readTime: "10 min read",
      views: 8765,
      likes: 1234,
      comments: 87,
      date: "12 hours ago",
      trending: "+245%"
    },
    {
      id: 5,
      rank: 5,
      title: "Node.js Performance Optimization: Best Practices for 2024",
      excerpt: "Optimize your Node.js applications with clustering, caching strategies, and memory management techniques.",
      author: "David Kumar",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
      category: "Node.js",
      readTime: "14 min read",
      views: 7654,
      likes: 1123,
      comments: 76,
      date: "1 day ago",
      trending: "+223%"
    },
    {
      id: 6,
      rank: 6,
      title: "Machine Learning with TensorFlow.js in the Browser",
      excerpt: "Build and deploy machine learning models directly in the browser using TensorFlow.js and React.",
      author: "Lisa Zhang",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      category: "AI/ML",
      readTime: "20 min read",
      views: 6543,
      likes: 987,
      comments: 65,
      date: "1 day ago",
      trending: "+201%"
    },
    {
      id: 7,
      rank: 7,
      title: "MongoDB Aggregation Pipeline: Advanced Queries and Performance",
      excerpt: "Master MongoDB's aggregation framework for complex data analysis and reporting.",
      author: "James Rodriguez",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
      category: "Database",
      readTime: "16 min read",
      views: 5432,
      likes: 876,
      comments: 54,
      date: "2 days ago",
      trending: "+189%"
    },
    {
      id: 8,
      rank: 8,
      title: "React Server Components: The Future of React Applications",
      excerpt: "Explore React's new Server Components architecture and how it changes the way we build React apps.",
      author: "Nina Patel",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
      category: "React",
      readTime: "13 min read",
      views: 4987,
      likes: 765,
      comments: 48,
      date: "2 days ago",
      trending: "+176%"
    }
  ];

  const topAuthors = [
    { name: "Alex Turner", avatar: "https://i.pravatar.cc/100?img=12", posts: 42, followers: 12500 },
    { name: "Sarah Martinez", avatar: "https://i.pravatar.cc/100?img=5", posts: 38, followers: 11200 },
    { name: "Michael Chen", avatar: "https://i.pravatar.cc/100?img=8", posts: 35, followers: 9800 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaFire className="text-5xl text-orange-500 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
              Trending Now
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Discover the most popular articles loved by our community
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 border-2 border-green-200"
                }`}
              >
                <Icon size={16} />
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <FaFilter className="text-green-600 text-lg flex-shrink-0" />
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.toLowerCase()
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 border border-green-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {trendingPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden shadow-xl border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      #{post.rank}
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <FaChartLine size={10} />
                      {post.trending}
                    </div>
                  </div>
                </div>

                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                  </div>

                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <FaClock size={12} />
                        {post.readTime}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-green-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full border-2 border-green-400"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{post.author}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaEye className="text-blue-500" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaHeart className="text-red-500" />
                          {post.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <FaComment className="text-green-500" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-110 transition-all duration-300 z-10">
                  <FaBookmark className="text-green-600" size={16} />
                </button>
              </div>
            ))}

            <div className="text-center mt-8">
              <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Load More Trending Posts
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-xl border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-5">
                  <FaTrophy className="text-yellow-500 text-2xl" />
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Top Authors
                  </h3>
                </div>

                <div className="space-y-4">
                  {topAuthors.map((author, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-3 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={author.avatar}
                          alt={author.name}
                          className="w-14 h-14 rounded-full border-3 border-white shadow-md"
                        />
                        <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                          {author.name}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{author.posts} posts</span>
                          <span>•</span>
                          <span>{author.followers.toLocaleString()} followers</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  View All Authors
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 rounded-2xl p-6 shadow-xl text-white">
                <FaFire className="text-4xl mb-3 text-orange-300" />
                <h3 className="text-2xl font-bold mb-3">Join the Conversation</h3>
                <p className="text-green-50 text-sm mb-5 leading-relaxed">
                  Share your knowledge and become a trending author. Your expertise matters!
                </p>
                <button className="w-full py-3 bg-white text-green-700 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Writing Today
                </button>
              </div>

              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Trending Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">Total Views Today</span>
                    <span className="text-green-600 font-bold text-lg">89.2K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">Active Readers</span>
                    <span className="text-emerald-600 font-bold text-lg">12.4K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">Trending Posts</span>
                    <span className="text-orange-600 font-bold text-lg">247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;