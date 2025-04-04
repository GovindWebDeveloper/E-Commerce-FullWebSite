import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../../../../services/getServices";
import SliderComponent from "../../../../component/SliderCard";
import ProductCard from "../../../../component/Card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const cache = {};

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    if (cache["featuredProduct"]) {
      console.log("Returning cached data for 'featuredProducts'");
      setProducts(cache["featuredProduct"]);
      setLoading(false);
    } else {
      console.log("Fetching new data for 'featuredProduct'");
      try {
        const data = await getProducts();
        cache["featuredProduct"] = data;
        setProducts(data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "2em",
        background: "#ffffff",
      }}
    >
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading Products...</p>
      ) : (
        <SliderComponent
          title="Featured Products"
          items={products}
          visibleCards={5}
          titleStyle={{ color: "#333" }}
          prevButton={
            <Button>
              <LeftOutlined />
            </Button>
          }
          nextButton={
            <Button>
              <RightOutlined />
            </Button>
          }
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </SliderComponent>
      )}
    </div>
  );
};

export default FeatureProducts;
