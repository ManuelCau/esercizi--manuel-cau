async function fetchCard() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/cards/");
    const responseJson = await response.json();
    const character = responseJson[6];
    const { name, imagesrc } = character;
    // console.log(character);
    const h1 = document.querySelector("h1");
    const chImg = document.querySelector(".my-img");
    
    const link = "https://ringsdb.com"
    h1.innerText = name;
    chImg.setAttribute("src", link + imagesrc);
  } catch (error) {
    console.log(error);
  }
}
fetchCard();
