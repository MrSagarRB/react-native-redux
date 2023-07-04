import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ name, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  button: {
    backgroundColor: "#FF4081",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ProductCard;
