const generalAPIRoutes = {
  test: "api/test",
};

const itemApiRoutes = {
  item: "api/item",
}

export const apiRoutes = {
  // General API's
  ...generalAPIRoutes,
  ...itemApiRoutes
};
