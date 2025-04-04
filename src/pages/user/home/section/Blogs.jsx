import Images from "../../../../assets/Images/ImageComponent/Images";
import { Card } from "antd";

const blogImage = [
  {
    id: 1,
    heading: "Top 10 casual look ideas to dress up your kids",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage1,
  },
  {
    id: 2,
    heading: "Latest trends of wearing street wears supremely",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage2,
  },
  {
    id: 3,
    heading: "10 Different Types of comfortable clothes ideas for women",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage3,
  },
];

const Blogs = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "40px 20px",
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <div style={{ width: "90%", margin: "auto" }}>
        <h1 style={{ marginBottom: "1em" }}>Our Recent Blog</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1em",
          }}
        >
          {blogImage.map((blog) => (
            <Card
              key={blog.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                maxWidth: "400px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={blog.img}
                alt="Blog Image"
                style={{ width: "100%", height: "auto" }}
              />
              <h1 style={{ fontSize: "1.2em", margin: "10px 0" }}>
                {blog.heading}
              </h1>
              <p style={{ fontSize: "1em", margin: "10px 0" }}>{blog.para}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
