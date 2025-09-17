
export function getCouponDiscount(coupon, totalPrice) {
  let discountPercent = 0;

  // Ensure case-insensitive & trims spaces
  const code = coupon.trim().toUpperCase();

  switch (code) {
    case "JYOTHI10":
      discountPercent = 10;
      break;
    case "JYOTHI20":
      discountPercent = 20;
      break;
    case "JYOTHI30":
      discountPercent = 30;
      break;
    default:
      discountPercent = 0;
  }

  const discountAmount = (totalPrice * discountPercent) / 100;

  return {
    isValid: discountPercent > 0,
    discountPercent,
    discountAmount,
  };
}
