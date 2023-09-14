import {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

// Import the fetchBlogs function from the new module
import {fetchBlogs} from "./fetchBlogs"; // Update the path accordingly

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [hashnodeBlogs, setHashnodeBlogs] = useState([]);

  useEffect(() => {
    const getHashnodeBlogs = async () => {
      try {
        const response = await fetchBlogs("anay09"); // Your Hashnode username
        setHashnodeBlogs(response);
      } catch (error) {
        console.error(
          `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
        );
        setHashnodeBlogs("Error");
        blogSection.displayMediumBlogs = "false";
      }
    };

    if (blogSection.displayMediumBlogs === "true") {
      getHashnodeBlogs();
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {hashnodeBlogs !== "Error" ? (
              hashnodeBlogs.slice(0, 3).map((blog, i) => (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: `https://codecanvas.tech/${blog.slug}`,
                    image: blog.coverImage,
                    title: blog.title,
                    description: blog.brief
                  }}
                />
              ))
            ) : (
              <p>Failed to fetch Hashnode blogs.</p>
            )}
          </div>
        </div>
        <div className="button-blogs-div">
          <Button
            text="Visit My Blog Website"
            newTab={true}
            href="https://codecanvas.tech/"
          />
        </div>
      </div>
    </Fade>
  );
}
