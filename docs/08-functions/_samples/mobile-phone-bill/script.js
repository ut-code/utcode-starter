function calculateCost(monthlyDataUsage) {
  if (monthlyDataUsage < 5) {
    return monthlyDataUsage * 600;
  } else {
    return 3000;
  }
}

document.write(
  "データ使用量が3 GBの時の携帯電話料金は" + calculateCost(3) + "円です。",
);
