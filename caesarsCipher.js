function rot13(str) {
  return str;
}

// Tests

rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("SERR YBIR?"); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
