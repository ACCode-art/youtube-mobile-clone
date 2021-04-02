const viewComments = document.querySelector(".viewComments");
const otherVideos = document.querySelector(".otherVideos");
const comments = document.querySelector(".comments");
const overlay = document.querySelector(".overlay");
const exit = document.querySelector(".exit");
const icon = document.querySelectorAll(".icon");
const likes = document.querySelector(".likes");
const dislikes = document.querySelector(".dislikes");
const iconLike = document.querySelector(".icon-like");
const iconDislikes = document.querySelector(".icon-dislikes");
const sub = document.querySelector(".sub");
const channelInfoSubscribe = document.querySelector(".channelInfo__subscribe");
const bellIconShow = document.querySelector(".icon--show");

let lcount = 132;
let dcount = 12;

let isLiked = false;
let isDisliked = false;

likes.textContent = lcount;
dislikes.textContent = dcount;

iconLike.addEventListener("click", () => {
  if (isLiked === true) {
    likes.textContent = lcount -= 1;
    iconLike.classList.toggle("whiteLiked");
    isLiked = false;
    console.log(`is liked: ${isLiked}`);
  } else if (isLiked === false && isDisliked === false) {
    likes.textContent = lcount += 1;
    isLiked = true;
    iconLike.classList.toggle("whiteLiked");
    console.log(`is liked: ${isLiked}`);
  } else if (isLiked === false && isDisliked === true) {
    likes.textContent = lcount += 1;
    isLiked = true;
    isDisliked = false;
    iconLike.classList.toggle("whiteLiked");
    iconDislikes.classList.toggle("whiteDisliked");
    dislikes.textContent = dcount -= 1;
    console.log(`is liked: ${isLiked}`);
  }
});

iconDislikes.addEventListener("click", () => {
  if (isDisliked === true) {
    dislikes.textContent = dcount -= 1;
    iconDislikes.classList.toggle("whiteDisliked");
    isDisliked = false;
    console.log(`is Disliked: ${isDisliked}`);
  } else if (isDisliked === false && isLiked === true) {
    dislikes.textContent = dcount += 1;
    likes.textContent = lcount -= 1;
    isDisliked = true;
    isLiked = false;
    iconLike.classList.toggle("whiteLiked");
    iconDislikes.classList.toggle("whiteDisliked");
    console.log(`is Disliked: ${isDisliked}`);
  } else if (isDisliked === false && isLiked === false) {
    dislikes.textContent = dcount += 1;
    isDisliked = true;
    isLiked = false;
    iconDislikes.classList.toggle("whiteDisliked");
    console.log(`is Disliked: ${isDisliked}`);
  }
});

//potentially refactor ABOVE

const suggestedVideosArray = [
  {
    title: "Iceland: Why Visit?",
    desc: "Travelintheworldabit - 1.5m views - 3 years ago",
    img:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "It's quite Iceeeey",
    desc: "nationalICEworld - 1.2m views - 1 years ago",
    img:
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Some Whales",
    desc: "whaletube- 1.0m views - 6 months ago",
    img:
      "https://images.pexels.com/photos/3635870/pexels-photo-3635870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

icon.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("whiteLiked");
  });
});

comments.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

viewComments.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

exit.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

let subscribed = false;

channelInfoSubscribe.addEventListener("click", () => {
  subscribed = !subscribed;
  sub.classList.toggle("greyscale");
  bellIconShow.classList.toggle("show");
});

suggestedVideosArray.map((element) => {
  const { title, desc, img } = element;

  const HTML = `<div class="suggestedVideo">
  <img
    src=${img}
    alt=""
  />
  <div class="suggestedVideo__bottom">
    <div class="suggestedVideo__img">
      <img
        src=${img}
        alt=""
      />
    </div>
    <div class="suggestedVideo__info">
      <p>${title}</p>
      <p class="suggestedVideo__desc">${desc}</p>
    </div>
  </div>
</div>`;

  otherVideos.insertAdjacentHTML("afterbegin", HTML);
});
