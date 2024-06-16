function calculateTicketPrice(age) {
  if (age >= 12) {
    return 1000;
  } else {
    return 500;
  }
}

document.write("入場料金は" + calculateTicketPrice(12) + "円です。");
