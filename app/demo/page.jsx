import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { Button, Image, Input } from "@nextui-org/react";
import React from "react";

const productImage = `https://lavenderstudio.com.vn/wp-content/uploads/2017/10/chup-hinh-san-pham-my-pham-spa-03.jpg`;

function page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="md:col-span-2 col-span-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="md:block hidden col-span-2">
            {[1, 2, 3, 4, 5].map((x, index) => {
              return (
                <div key={`${index}`} className="mb-2">
                  <Image src={productImage} className="border" />
                </div>
              );
            })}
          </div>
          <div className="col-span-12 md:col-span-10">
            <Image src={productImage} />
          </div>
          <div className="md:hidden flex col-span-12 md:col-span-2 gap-2">
            {[1, 2, 3, 4, 5].map((x, index) => {
              return (
                <div key={`${index}`}>
                  <Image src={productImage} className="border" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:col-span-2 col-span-4 mt-8 md:mt-0">
        <div className="mb-1">
          <span className="font-bold">Danh mục:</span> Lorem ipsum
        </div>
        <div className="mb-4">
          <span className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="flex mb-4 items-center">
          <div className="flex mr-2">
            <StarIcon className="size-4" color="#b7dd29" />
            <StarIcon className="size-4" color="#b7dd29" />
            <StarIcon className="size-4" color="#b7dd29" />
            <StarOutlineIcon className="size-4" color="#b7dd29" />
            <StarOutlineIcon className="size-4" color="#b7dd29" />
          </div>
          <div>
            <span className="font-medium">(3.0/5)</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <span className="font-bold text-4xl">100.000 đ</span>
          </div>
          <div>
            <span className="font text-2xl text-red-600 line-through">
              200.000 đ
            </span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold">Chính sách:</span>
          {[1, 2, 3, 4].map((x, index) => {
            return (
              <div className="flex items-center" key={`${index}`}>
                <MinusIcon className="size-2 mr-2" />
                <span className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </span>
              </div>
            );
          })}
        </div>
        <div className="mb-4">
          <span className="font-bold">Phương thức vận chuyển:</span>
          {[1, 2].map((x, index) => {
            return (
              <div className="flex items-center" key={`${index}`}>
                <MinusIcon className="size-2 mr-2" />
                <span className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex gap-2">
            <Button isIconOnly>
              <MinusIcon className="size-4" />
            </Button>
            <Input
              value={1}
              classNames={{
                input: "text-center",
              }}
              className="w-[100px]"
            />
            <Button isIconOnly>
              <PlusIcon className="size-4" />
            </Button>
          </div>
          <Button variant="solid" color="primary">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="col-span-4 mt-8">
        <div className="mb-4">
          <span className="text-2xl font-medium">Mô tả sản phẩm</span>
        </div>
        <div>
          <p>
            "ƯU ĐIỂM NỔI TRỘI - Nước cân bằng Simple Soothing Toner chứa Vitamin
            B5, chiết xuất Hoa cúc La Mã Chamomile và Allantoin giúp làm dịu da
            và cấp ẩm tức thì, mang đến một làn da mềm mại, mịn màng mà không để
            lại cảm giác nhờn dính.
          </p>
          <p>
            - Bổ sung chiết xuất Cây phỉ Witch Hazel giúp chống lão hóa, cho da
            tươi tắn, đàn hồi.
          </p>
          <p>
            - Không chứa 2000 hóa chất gây hại cho da, hương liệu, cồn, dầu
            khoáng, không gây kích ứng da HƯỚNG DẪN SỬ DỤNG - Sau bước rửa mặt
            sáng và tối, cho một lượng nước hoa hồng Simple Toner vừa đủ ra
            miếng bông.
          </p>
          <p>
            - Nhẹ nhàng thấm đều và lau lên toàn mặt. - Để đạt được hiệu quả tốt
            nhất, dùng trọn bộ với Nước tẩy trang Simple Micellar và Sữa rửa mặt
            Simple. THÔNG TIN THƯƠNG HIỆU Simple là thương hiệu chăm sóc da số 1
            Anh Quốc - theo nguồn dữ liệu của Nielsen 2021. Simple được thành
            lập từ những năm 1960 được phát triển, nghiên cứu bởi các bác sĩ và
            chuyên gia da liễu với định vị là một nhãn hàng không chứa hương
            liệu, chất tạo màu hay các hóa chất có hại cho da, an toàn với cả
            làn da nhạy cảm nhất. Đồng thời, với sự kết hợp giữa các dưỡng chất
            thiết yếu cùng với các thành phần tự nhiên mà vẫn hiệu quả, giúp
            mang lại cho bạn làn da trông khỏe mạnh. Vì Đơn Giản Là Simple -
            Chăm Da Thật Khỏe! THÀNH PHẦN NƯỚC HOA HỒNG SIMPLE SOOTHING TONER
            Water, Hydrogenated Starch Hydrolysate, Sodium PCA, Allantoin,
            Phenoxyethanol, Disodium EDTA, Propylene Glycol, Cetylpyridinium
            Chloride, Niacinamide, Hamamelis Virginiana Leaf Water, Panthenol,
            Decyl Glucoside CHÚ Ý VÀ ĐIỀU KIỆN BẢO QUẢN - Tránh tiếp xúc với
            mắt. Nếu tiếp xúc với mắt, rửa ngay bằng nước sạch. Để xa tầm tay
            trẻ em. - Tránh nhiệt độ cao và ánh nắng trực tiếp. Đóng nắp sau khi
            sử dụng. Xuất xứ: Poland Ngày sản xuất: xem trên bao bì Hạn sử dụng:
            03 năm kể từ ngày sản xuất"
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
