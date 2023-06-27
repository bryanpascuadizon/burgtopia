export const addCartItems = async ({
  userId,
  productId,
  count,
  name,
  price,
  image,
}: {
  userId: string;
  productId: string;
  count: number;
  name: string;
  price: number;
  image: string;
}) => {
  try {
    console.log("USER ID: ", userId);
    //Check if User Id exist in Cart Items Table
    const response = await fetch(`/api/cart/${userId}`);
    const userData = await response.json();

    if (userData === null) {
      //Add New Cart Item
      const newCartItem = {
        userId,
        cartItems: [
          {
            product_id: productId,
            quantity: count,
            name,
            price,
            image,
          },
        ],
      };

      //POST new cart item
      const createResponse = await fetch("/api/cart/new", {
        method: "POST",
        body: JSON.stringify(newCartItem),
      });

      if (createResponse.ok) {
        return createResponse.ok;
      }
    } else {
      console.log("MODIFY CART");

      let cartItemsForUpdate = {
        product_id: productId,
        quantity: count,
        name,
        price,
        image,
      };

      //Use User Id to get Cart Data
      const cartResponse = await fetch(`/api/cart/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(cartItemsForUpdate),
      });

      if (cartResponse.ok) {
        return cartResponse.ok;
      }
    }

    return false;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartItems = async (userId: string, productId: string) => {
  try {
    const deleteResponse = await fetch(`/api/cart/${userId}/${productId}`, {
      method: "PATCH",
    });

    if (deleteResponse.ok) {
      return deleteResponse.ok;
    }

    return false;
  } catch (error) {
    console.error(error);
  }
};
