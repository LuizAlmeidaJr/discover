const html = document.documentElement
html.classList.remove("light")

function toggleMode() {
  const profile = document.getElementById("profileImage")

  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    profile.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    profile.setAttribute("src", "./assets/assets/avatar.png")
  }
}