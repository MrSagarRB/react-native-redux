import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let result = await fetch("https://dummyjson.com/products");
    result = await result.json();
    setProducts(result.products);
    // console.warn(products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Product</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.title}
            price={item.price}
            image={item.thumbnail}
          />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Product;
