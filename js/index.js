function shippingCost() {
    let weight = Number(document.getElementById("weight").value);
    let isInternational = document.getElementById("isInternational").value === "true";
    let isUrgent = document.getElementById("isUrgent").value === "true";

    let shippingType;
    let extraCost = false;

    if (weight > 10 || isInternational || isUrgent){
        extraCost = true;
    }

    if(isUrgent && isInternational){
        shippingType = "Priority and Special rate"

    }else if (isUrgent){
        shippingType = "Priority";
    } else if (isInternational){
        shippingType = "Special rate";
    } else {
        shippingType = "Standard";
    }

    document.getElementById("shippingCost").textContent =
        shippingType + (extraCost ? " (Extra cost)" : "");
}
