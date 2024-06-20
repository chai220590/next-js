import BannerLeftComponent from "./BannerLeftComponent";
import BannerRightComponent from "./BannerRightComponent";
import "./BannerStyle.css";
function BannerComponent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1 slide-in-left">
        <BannerLeftComponent />
      </div>
      <div className="col-span-2 md:col-span-1 fade-in">
        <BannerRightComponent />
      </div>
    </div>
  );
}

export default BannerComponent;
