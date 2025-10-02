import { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("red");

  // Hàm đổi đèn
  const changeLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  // Tự động chạy sau 2 giây
  useEffect(() => {
    const interval = setInterval(changeLight, 2000);
    return () => clearInterval(interval); // clear khi component unmount
  }, [light]);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", width: 60 }}>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "red" ? "red" : "#555",
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "yellow" ? "yellow" : "#555",
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "green" ? "green" : "#555",
          }}
        />
      </div>
      <button onClick={changeLight} style={{ marginTop: 10 }}>
        Chuyển đèn
      </button>
    </div>
  );
}

export default TrafficLight;
