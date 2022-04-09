class Animations {
  fadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen_name || !screen) return;
    // screen.style.transform = "translateY(0px)";
  };
}
const animations = new Animations();
export default animations;
