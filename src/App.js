import "./App.css";
import ShoppingCart from "./Cart";
import RegisterForm from "./Form";
import TextCounter from "./TextCounter";
import TodoList from "./ToDoList";
import TrafficLight from "./TrafficLight";

function App() {
  return (
    <div style={{padding: 20}}>
      <div style={{fontSize: 22, fontWeight: "bold"}}>Bài thực hành 01 - Vũ Gia Huy - MSV B24DCCC150 - Lớp:RIPT1306-20251-05 </div>
      <div>
        <b>Bài 1: Bộ đếm ký tự:</b> Tạo component TextCounter. Có một ô input để
        người dùng nhập văn bản. Dùng state để lưu giá trị nhập vào. Hiển thị số
        ký tự đã nhập ngay bên dưới. Giới hạn tối đa 100 ký tự, nếu vượt thì
        hiện cảnh báo màu đỏ.
      </div>
      <TextCounter />
      <div>
        <b>Bài 2: Đèn giao thông:</b> Tạo component TrafficLight. Có 3 đèn: Đỏ,
        Vàng, Xanh. Thêm nút Chuyển đèn, mỗi lần bấm sẽ chuyển lần lượt: Đỏ →
        Xanh → Vàng → Đỏ … Cho chạy tự động 2 giây đổi 1 đèn bằng setInterval.
      </div>
      <TrafficLight />
      <div>
        <b>Bài 3: Danh sách công việc:</b> Có một input để nhập công việc mới và
        nút Thêm. Danh sách công việc được lưu trong state (mảng). Hiển thị danh
        sách công việc ra màn hình. Mỗi công việc có nút Xóa.
      </div>
      <TodoList />
      <div>
        <b>Bài 4: Giỏ hàng:</b> Tạo danh sách sản phẩm (mảng object: id, name,
        price). Hiển thị danh sách bằng component ProductItem (dùng props). Mỗi
        sản phẩm có nút Thêm vào giỏ. Hiển thị tổng số sản phẩm, tổng tiền trong
        giỏ hàng.
      </div>
      <ShoppingCart />
      <div>
        <b>Bài 5: Form Đăng ký:</b> Tạo form gồm: Tên, Email, Mật khẩu. Kiểm tra
        nếu để trống trường nào thì báo lỗi. Khi bấm Đăng ký, hiển thị thông tin
        vừa nhập bên dưới.
      </div>
      <RegisterForm />
    </div>
  );
}

export default App;