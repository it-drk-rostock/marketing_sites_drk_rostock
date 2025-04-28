import { useEffect } from "react";

const RefreshPage = ({ items }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default RefreshPage;
