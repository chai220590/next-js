import ProductDetailImage from "./product-detail-image/ProductDetail.Image";
import ProductDetailInformation from "./product-detail-information/ProductDetail.Information";
import ProductDetailDescription from "./ProductDetail.Description";

function ProductDetail() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <ProductDetailImage />
      <ProductDetailInformation />
      <ProductDetailDescription />
    </div>
  );
}

export default ProductDetail;
