import Nav from "./Nav";
import Footer from "./Footer";
import Timeline from "../pages/Timeline";
import { useLocation } from "react-router-dom";
function StatusTimeLine() {
    const location = useLocation();
    console.log(location.state.data);
    return (
      <div>
        <Nav />
        <Timeline timelineData={location.state.data} />
        <Footer />
      </div>
    );
  }

export default StatusTimeLine;
