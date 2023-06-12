//KF Panda Search

//Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("Your button has buttoned!!");
  // Get Search Input
  let word = document.getElementById("search-in").value.toLowerCase();

  //Test The Name
  if (word === "lol") {
    document.getElementById("acro").innerHTML = `
        <h2>Laugh out loud!</h2>`;
  } else if (word === "btw") {
    document.getElementById("acro").innerHTML = `
      <h2>By the way!</h2>`;
  } else if (word === "idk") {
    document.getElementById("acro").innerHTML = `
      <h2>I don't know!</h2>`;
  } else if (word === "omw") {
    document.getElementById("acro").innerHTML = `
      <h2>On my way!</h2>`;
  } else if (word === "rq") {
    document.getElementById("acro").innerHTML = `
      <h2>Real quick!</h2>`;
  } else if (word === "ik") {
    document.getElementById("acro").innerHTML = `
      <h2>I know!</h2>`;
  } else {
    document.getElementById("acro").innerHTML = `
      <h2>I am not sure about that one :(</h2>`;
  }
}
