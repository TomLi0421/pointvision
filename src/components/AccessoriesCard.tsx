import VRController from "../assets/vr-controller.png";
export default function AccessoriesCard({ ...props }) {
  return (
    <div
      className="w-full h-72 text-white px-12 py-6 lg:flex lg:justify-between"
      {...props}
    >
      <div>
        <h4 className="font-bold text-2xl mb-6">VR Controller</h4>
        <a href="#">
          <p>Expore Items</p>
        </a>
      </div>
      <img className="w-80" src={VRController} alt="vr controller" />
    </div>
  );
}
