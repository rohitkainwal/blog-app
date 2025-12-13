import React, { useState } from "react";
import { FaSearch, FaEdit, FaEye, FaHeart, FaComment, FaClock, FaTag, FaFire, FaTrophy, FaBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = {
    id: 1,
    title: "10 Advanced React Patterns Every Developer Should Know",
    excerpt: "Discover the most powerful React patterns that will take your development skills to the next level. Learn about render props, compound components, and more.",
    author: "Sarah Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    category: "React",
    readTime: "8 min read",
    views: 2456,
    likes: 342,
    comments: 28,
    date: "2 days ago"
  };

  const trendingPosts = [
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating production-ready REST APIs with best practices.",
      author: "Mike Chen",
      authorAvatar: "https://i.pravatar.cc/150?img=2",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500",
      category: "Backend",
      readTime: "12 min read",
      views: 1893,
      likes: 234,
      comments: 19,
      date: "3 days ago"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "Understanding the differences and use cases for modern CSS layout techniques.",
      author: "Emma Davis",
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
      category: "CSS",
      readTime: "6 min read",
      views: 1567,
      likes: 189,
      comments: 15,
      date: "5 days ago"
    },
    {
      id: 4,
      title: "MongoDB Schema Design Best Practices",
      excerpt: "Learn how to design efficient and scalable MongoDB schemas for your applications.",
      author: "James Wilson",
      authorAvatar: "https://i.pravatar.cc/150?img=4",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
      category: "Database",
      readTime: "10 min read",
      views: 1423,
      likes: 156,
      comments: 12,
      date: "1 week ago"
    }
  ];

  const categories = [
    { name: "React", count: 124, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", count: 98, color: "from-green-500 to-emerald-500" },
    { name: "JavaScript", count: 156, color: "from-yellow-500 to-orange-500" },
    { name: "CSS", count: 87, color: "from-pink-500 to-rose-500" },
    { name: "Database", count: 65, color: "from-purple-500 to-indigo-500" },
    { name: "DevOps", count: 43, color: "from-gray-600 to-gray-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
            Share Your Knowledge
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover stories, thinking, and expertise from writers on any topic
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none shadow-lg transition-all duration-300"
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-600 text-xl" />
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              <FaEdit size={18} />
              Write Article
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 text-green-700 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-green-200 flex items-center gap-2">
              <FaBookmark size={16} />
              My Bookmarks
            </button>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FaFire className="text-orange-500 text-2xl" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Featured Article
            </h2>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-green-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaClock size={12} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-12 h-12 rounded-full border-2 border-green-400"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaEye />
                      {featuredPost.views}
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                      <FaHeart />
                      {featuredPost.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment />
                      {featuredPost.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <FaTrophy className="text-yellow-500 text-2xl" />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Trending Articles
              </h2>
            </div>

            <div className="space-y-6">
              {trendingPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${post.category === 'Backend' ? 'from-blue-500 to-cyan-500' : post.category === 'CSS' ? 'from-pink-500 to-rose-500' : 'from-purple-500 to-indigo-500'} text-white rounded-full text-xs font-bold`}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <FaClock size={10} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-8 h-8 rounded-full border-2 border-green-400"
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaEye size={14} />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1 text-red-500">
                            <FaHeart size={14} />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Load More Articles
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-xl border-2 border-green-200 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaTag className="text-green-600 text-xl" />
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Popular Topics
                  </h3>
                </div>

                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="group flex items-center justify-between p-3 bg-white rounded-xl border border-green-100 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform`}>
                          {category.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-green-50 px-3 py-1 rounded-full">
                        {category.count} posts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 rounded-2xl p-6 shadow-xl text-white">
                <h3 className="text-xl font-bold mb-3">Start Writing Today</h3>
                <p className="text-green-50 text-sm mb-4">
                  Share your knowledge with thousands of readers worldwide.
                </p>
                <button className="w-full py-3 bg-white text-green-700 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Create Your First Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;