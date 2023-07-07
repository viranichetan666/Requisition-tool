export const classNames = (...classes: any) =>
  classes.filter(Boolean).join(" ");

export const encrpyId = (id?: number | string) =>
  id ? window.btoa(id.toString()) : null;

export const decryptId = (id: number | string) => {
  try {
    return +window.atob(id.toString());
  } catch (error) {
    return null;
  }
};
