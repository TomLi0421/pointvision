function generateOrderCode() {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${timestamp}${randomNumber}`;
}

module.exports = orderCode = generateOrderCode();
