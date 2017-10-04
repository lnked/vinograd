function position (el, relative) {
    if (relative) {
        return el.getBoundingClientRect();
    } else {
        return {left: el.offsetLeft, top: el.offsetTop};
    }
}
