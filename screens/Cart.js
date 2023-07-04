import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

const Cart = () => {
  const cardData = useSelector((state) => state.reducer);

  const totalPrice = cardData.reduce((accu, curr) => {
    let total = accu + curr.price;
    return total;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cardData}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemName}>${item.price}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
      <Text style={styles.total}>Cart Total: $ {totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 3,
  },
  listContainer: {
    height: 485,
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "lightblue",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    marginTop: 20,
  },
  itemName: {
    fontSize: 20,
    width: 100,
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  total: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default Cart;
