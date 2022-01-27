
const container = document.querySelector(".container");
// const list = document.querySelector(".card-profile");
// console.log(list)
const lists = document.querySelectorAll(".card-profile ul li");
console.log(lists);

container.innerHTML += datas.map(data => {
  return `
  <div class="card ${data["title"]} ">
      <div class="head">
        <img class ="icon" src=${data["img"]} alt="...">
      </div>
      <div class="text">
        <div class="head-text">
          <h2>${data["title"]} </h2>
           <span>...</span>
        </div>
        <h2>${data["timeframes"]["daily"]["current"]}hrs </h2>
        <p>Last week - ${data["timeframes"]["daily"]["previous"]}hrs</p>
      </div>
    </div>
`
})
container.addEventListener('click', (e) => {
   

    container.innerHTML += datas.map(data => {
      return `
      <div class="card ${data["title"]} ">
          <div class="head">
            <img class ="icon" src=${data["img"]} alt="...">
          </div>
          <div class="text">
            <div class="head-text">
              <h2>${data["title"]} </h2>
               <span>...</span>
            </div>
            <h2 class='time'>${data["timeframes"][`${e.target.id}`]["current"]}hrs </h2>
            <p class='time'>Last week - ${data["timeframes"][`${e.target.id}`]["previous"]}hrs</p>
          </div>
        </div>
      `
    })
    const texts = document.querySelectorAll("h2.time")
    const lastWeeks = document.querySelectorAll("p.time")
    lastWeeks.forEach(lw => {
      lw.classList.add("transition")
      setTimeout(() => {
        lw.classList.remove("transition")
      },1000)
    })
    texts.forEach(text => {
      text.classList.add("transition")
      setTimeout(() => {
      text.classList.remove("transition")
    }, 1000)
})
    })
    