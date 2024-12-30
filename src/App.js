import "./styles.css";
import NYEWheel from "react-wheel-of-prizes";

export default function App() {
  const segments = [
    "80's",
    "90's",
    "2000's",
    "Boy Bands",
    "Romance",
    "Movies",
    "Dealer's Choice",
    "Hip hop / Rap",
    "Canadian"
  ];
  const segColors = [
    "#EE4040", 
    "#F0CF50", 
    "#815CD1", 
    "#3DA5E0", 
    "#34A24F", 
    "#E79B2E", 
    "#EB18E3", 
    "#7DDE45",
    "#246186"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>New Year's Eve Music Wheel</h1>
      <div>
        <NYEWheel
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="white"
          contrastColor="black"
          buttonText="Spin"
          isOnlyOnce={false}
          size={250}
          upDuration={300}
          downDuration={900}
          fontFamily="Arial"
        />
      </div>
    </div>
  );
}
