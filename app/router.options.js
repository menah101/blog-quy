// https://router.vuejs.org/api/interfaces/routeroptions.html
export default {
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { left: 0, top: 0, behavior: 'smooth' };
  },
};
