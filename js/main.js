(() => {

  const memberName = document.querySelector("h1"),
        interestHeader = document.querySelector(".interestTitle"),
        introHeader = document.querySelector(".introTitle"),
        evanButton = document.querySelectorAll(".evanButton"),
        jiheeButton = document.querySelectorAll(".jiheeButton"),
        memberImage = document.querySelector(".photoMember"),
        memberSection = document.querySelector(".toggleMenu"),
        evanLikes = document.querySelector(".interestEvan"),
        jiheeLikes = document.querySelector(".interestJihee"),
        infoDetails = document.querySelector(".infoContent"),
        chosenRole = document.querySelector(".infoRole"),
        chosenName = document.querySelector(".infoName");

  const memberData = [
    ["EVAN", `Hello, I'm Evan. I'm a Cantonese-Vietnamese student
    at Fanshawe College. I'm currently taking Interactive Media Design here.
    It has been like a roller coaster since I took this program.
    It's kind of amazing to see I'm able to do things that I thought
    I would never be able to. Coding can be difficult, challenging, but
    the moment that I am able to make something work always feels so good
    to me. I hope I can drive myself better into this field, my goal is
    to become successful in both designing and coding. I would strike to be
    a full-stack developer and keep enhancing my designing skills on the way!`,
    "EVAN CHAN",
    "DEVELOPER"],
    ["JIHEE", `Hi, I'm Jihee Yu. I'm from Korea. I've been in Canada for a year and a half now.
    I'm taking Interactive Media Design at Fanshawe College. I graduated in Textile Design back in Korea. I'm interested in using
    design software, such as Photoshop or Illustrator, so I decided to learn more about it.
    When I started studying coding, everything was so new to me.
    Even though everything is so challenging, but it's fun.
    I love everything that I'm doing and I hope that I will be able to achieve my plans. `,
    "JIHEE YU",
    "DESIGNER"]
  ];

  function memberSelected() {
    if (this.dataset.member == "0") {
      memberSection.style.backgroundColor = "#10304B";
      memberSection.style.color = "#FCF3CF";
      memberSection.style.textAlign = "left";
      memberSection.classList.remove("flip");
      evanLikes.classList.remove("hidden");
      jiheeLikes.classList.add("hidden");

    }
    else {
      memberSection.style.backgroundColor = "#54BD8B";
      memberSection.style.color = "#000";
      memberSection.style.textAlign = "right";
      memberSection.classList.add("flip");
      jiheeLikes.classList.remove("hidden");
      evanLikes.classList.add("hidden");
    }
    memberName.textContent = `${memberData[this.dataset.member][0]}`;
    memberImage.src = `images/${this.dataset.photo}.jpg`;
    chosenName.textContent = `${memberData[this.dataset.member][2]}`;
    chosenRole.textContent = `${memberData[this.dataset.member][3]}`;
    infoDetails.textContent = `${memberData[this.dataset.member][1]}`;
    interestHeader.textContent = ("INTERESTS");
    introHeader.textContent = ("INTRODUCTION");
  }

evanButton.forEach(button => {
  button.addEventListener("click", memberSelected)
});

jiheeButton.forEach(button => {
  button.addEventListener("click", memberSelected)
});


})();
