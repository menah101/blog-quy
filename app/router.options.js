// https://router.vuejs.org/api/interfaces/routeroptions.html
export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { left: 0, top: 30, behavior: 'smooth' };
  },
};
