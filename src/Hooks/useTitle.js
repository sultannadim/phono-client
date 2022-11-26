const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Phono`;
  }, [title]);
};

export default useTitle;
