function generateMeme() {
  const btnGen = document.querySelector(".btnGen");
  const imgDisplay = document.querySelector(".imgDisplay");

  const serverUrl = "https://haha-server.onrender.com";

  try {
    const handleBtnGen = async () => {
      imgDisplay.innerHTML = "";
      const response = await axios.get(serverUrl);
      const responseData = response.data;

      responseData.forEach((item) => {
        let responseDataImage = item.image;
        let imgGen = document.createElement("img");
        imgGen.src = responseDataImage;
        imgDisplay.appendChild(imgGen);
        console.log(responseDataImage);
      });
    };

    btnGen.addEventListener("click", handleBtnGen);
  } catch (error) {
    console.log(error);
  }
}

generateMeme();
