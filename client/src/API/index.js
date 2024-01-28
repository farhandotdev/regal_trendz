export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/product/productList", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to handle it in the calling code if needed
  }
};
