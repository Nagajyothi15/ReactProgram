export function calculateTotal(cartitems){
    return cartitems.reduce((total,items) => total + items.price * items.quantity,0);
}
export function calculateButtonDiscount(totalPrice,discountPercent){
    return totalPrice*(discountPercent/100);
}
export function getcouponDiscount(coupon,totalPrice){
    let discountPercent=0;
    switch(coupon){
        case "JYOTHI10":
            discountPercent=10;
            break;
        case "JYOTHI20":
            discountPercent=20;
            break;
        case "JYOTHI30":
            discountPercent=30;
            break;
        default:
            discountPercent=0;
    }
    const discountAmount=(totalPrice*(discountPercent/100));
    return {isValid: discountPercent>0,
         discountPercent, 
         discountAmount
    };
    
}