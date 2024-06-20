function calculateTicketPrice(age) {
  if (age < 12) {
    return 500;
  } else {
    return 1000;
  }
}

document.write("12歳の方の入場料金は" + calculateTicketPrice(12) + "円です。");
