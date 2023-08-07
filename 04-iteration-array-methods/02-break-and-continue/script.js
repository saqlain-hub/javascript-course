//  Break - at the current step breaks the flow
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking...");
    break;
  }
  console.log(i);
}

// Continue - at the current step, skips the current step and continues to next
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }

  console.log(i);
}
