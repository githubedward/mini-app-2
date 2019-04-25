export const authInit = () => {
  return {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
};
