import { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import SmartLink from "../../../../components/SmartLink";
import { getBlogs } from "../../../../AdianceAdmin/pages/Dashboard/components/blog";
import "./Blog_View.css";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images/`;

const BlogPostCard = memo(({ post, layoutVariant = "textFirst" }) => {
  const title = post.content?.title || "Untitled Blog";
  const imageUrl = `${IMAGE_BASE_URL}${post.content.mainImage}`;
  const brief = post.content?.brief?.[0]?.children?.[0]?.text || "No description available.";
  const url = `/blog/${post.metadata?.urlWords || post._id}`;

  return (
    <Link to={url} className="blog-card-link">
      <div className={`blog-card ${layoutVariant === "imageFirst" ? "image-first" : ""}`}>
        <div className="blog-text-section">
          <div className="blog-content">
            <div className="blog-title-wrapper">
              <h3 className="blog-title">{title}</h3>
            </div>
            <div className="blog-divider" />
            <div className="blog-brief-wrapper">
              <p className="blog-brief">{brief}</p>
            </div>
          </div>
          <div className="blog-read-more">
            Read more
            <div className="blog-arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M20.8596 11.1622C21.4454 10.5764 21.4454 9.62668 20.8596 9.04089L11.3137 -0.505039C10.7279 -1.09083 9.77817 -1.09083 9.19239 -0.505039C8.6066 0.0807464 8.6066 1.03049 9.19239 1.61628L17.6777 10.1016L9.19239 18.5868C8.6066 19.1726 8.6066 20.1224 9.19239 20.7082C9.77817 21.294 10.7279 21.294 11.3137 20.7082L20.8596 11.1622ZM0 10.1016V11.6016L19.799 11.6016V10.1016V8.60156L0 8.60156V10.1016Z" fill="#ffffff"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="blog-image-section">
          <img src={imageUrl} alt={title} className="blog-image" loading="lazy" decoding="async" width="400" height="250" />
        </div>
      </div>
    </Link>
  );
});

const BlogPlaceholderCard = ({ layoutVariant = "textFirst" }) => {
  return (
    <div className={`blog-card ${layoutVariant === "imageFirst" ? "image-first" : ""}`}>
      <div className="blog-text-section blog-placeholder">
        <div className="blog-placeholder-content">
          <p className="blog-placeholder-title">No blog post available.</p>
          <p className="blog-placeholder-text">Check back later for new content and insights.</p>
        </div>
      </div>
      <div className="blog-image-section blog-placeholder-image">
        <span className="blog-no-image-text">No Image</span>
      </div>
    </div>
  );
};

const BlogViewContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBlogs(1, 2, "", "latest", "published");
      if (response.status === "success" && Array.isArray(response.data)) {
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    if (isMobile && !isPaused && blogs.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isMobile, isPaused, blogs.length]);

  return (
    <div className="blog-view-container">
      <div className="blog-view-content">
        <div className="blog-left-section">
          <h2 className="blog-main-heading">
            Our Latest <span className="blog-highlight">Blogs</span>
          </h2>
          <div className="blog-intro">
            <div className="blog-arrow-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width={window.innerWidth < 768 ? "25" : "34"} height={window.innerWidth < 768 ? "25" : "34"} viewBox="0 0 34 34" fill="none">
                <path d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113787 30.0138 7.16405e-06C28.357 0.0011522 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334405 28.3639 0.0345855 30.0207C0.0357305 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z" fill="#bf0603"/>
              </svg>
            </div>
            <p className="blog-intro-text">
              Welcome to our blog section, where knowledge meets inspiration, explore insightful articles, expect tips, and the latest trends in our field.
            </p>
          </div>
          <Link to="/blog" className="blog-view-all-desktop">
            <button className="blog-view-all-btn">View all</button>
          </Link>
        </div>

        <div className="blog-right-section">
          {isLoading ? (
            <div className="blog-spinner">
              <div className="spinner"></div>
            </div>
          ) : isMobile ? (
            <div className="blog-carousel">
              <div 
                className="blog-carousel-inner"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <div 
                  className="blog-carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {blogs.length > 0 ? (
                    blogs.map((post) => (
                      <div key={post._id} className="blog-carousel-item">
                        <BlogPostCard post={post} />
                      </div>
                    ))
                  ) : (
                    <div className="blog-carousel-item">
                      <BlogPlaceholderCard />
                    </div>
                  )}
                </div>
              </div>
              {blogs.length > 1 && (
                <div className="blog-carousel-dots">
                  {blogs.map((_, index) => (
                    <div
                      key={index}
                      className={`blog-dot ${currentIndex === index ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="blog-desktop-grid">
              {Array.from({ length: 2 }).map((_, index) => {
                const post = blogs[index];
                const layoutVariant = index === 0 ? "textFirst" : "imageFirst";
                return post ? (
                  <BlogPostCard key={post._id} post={post} layoutVariant={layoutVariant} />
                ) : (
                  <BlogPlaceholderCard key={`placeholder-${index}`} layoutVariant={layoutVariant} />
                );
              })}
            </div>
          )}
        </div>

        <Link to="/blog" className="blog-view-all-mobile">
          <button className="blog-view-all-btn">View all</button>
        </Link>
      </div>
    </div>
  );
};

const Blog_View = (props) => {
  return <BlogViewContent {...props} />;
};

export default Blog_View;
