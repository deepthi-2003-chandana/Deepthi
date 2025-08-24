import React from "react";
import GigConnect from "./GigConnect";

function App() {
  return <GigConnect />;
}

export default App;

function GigConnect() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {/* Add other pages here like Gigs, Profile, etc. */}
      <Footer />
    </div>
  );
}

export default GigConnect;
