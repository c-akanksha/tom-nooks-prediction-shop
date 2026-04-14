import leaf from "../assets/leaf.png";

export default function LeafLoader() {
  return (
    <div className="loader-container">
      <img src={leaf} alt="Loading..." className="leaf-loader" />
      <p className="loader-text">🌿 Loading from Nook’s servers...</p>
    </div>
  );
}
