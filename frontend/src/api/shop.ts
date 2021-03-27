const URL = "http://localhost:5000/api"

export const getAvailableAmount = async () => {
  try {

    const response = await fetch(URL + "/amount")
    const obj = await response.json();
    return obj.amount;
  } catch (error) {
    console.error(error);
  }
};

export const buyProduct = async () => {
  try {

    console.log("buyProduct", buyProduct)


    const product = {
      title: "IOTA Card - Chrysalis"
    }

    const options = {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(URL + "/orders", options)
    console.log("response", response)
    const obj = await response.json();
    console.log("obj", obj)
    return obj.amount;
  } catch (error) {
    console.error(error);
  }
};
