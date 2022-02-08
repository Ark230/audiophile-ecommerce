export const handleCategoryDescription = (pathname) => {
  if (pathname !== undefined) {
    if (pathname !== "/") {
      let categoryName = pathname.split("/")[2];
      let re = new RegExp(`(category+\/${categoryName})+(.*)`);
      let results = re.exec(pathname);

      if (results !== null && results[2] === "") {
        return categoryName;
      }
    } else {
      return "";
    }
  }
};
