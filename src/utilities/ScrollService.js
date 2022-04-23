import { TOTAL_SCREENS } from "./commonUtilis";
import { Subject } from "rxjs";

export default class ScrollSerivce {
  static scrollHandler = new ScrollSerivce();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBotton = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBotton >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBotton <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollSerivce.currentScreenFadeIn.next({
            fadenScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollSerivce.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
