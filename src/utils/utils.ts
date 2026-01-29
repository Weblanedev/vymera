
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs")
      .then((module) => {
        const WOW = module.default;
        if (WOW && typeof WOW === "function") {
          new WOW({ live: false }).init();
        }
      })
      .catch(() => {
        // wowjs failed to load; animations are optional
      });
  }
};

export const calculateDiscountedPrice = (price:number, discount:number) => {
  return (price - (price * discount) / 100).toFixed(2);
};