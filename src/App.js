/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../src/image/nike1.png'
import image1 from '../src/image/pngegg.png'
import './App.css'
function App() {
  return (
    <div class="container">
  <div class="card">
    <div class="imgBx">
      <img src={image}/>
    </div>
    <div class="contentBx">
      <h2>Nike Shoes</h2>
      <div class="size">
      <span>Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black DC0774-016 Màu Đỏ Đen Size 38</span>
      </div>
      <a href="#">Thêm vào giỏ hàng</a>
    </div>
  </div>
  <div class="card">
    <div class="imgBx">
    <img src={image1}/>
    </div>
    <div class="contentBx">
      <h2>Adidas Shoes</h2>
      <div class="size">
      <span>Giày Thể Thao Nike Wmns Air Jordan 1 Low Gym Red Black DC0774-016 Màu Đỏ Đen Size 38</span>
      </div>
      <a href="#">Thêm vào giỏ hàng</a>
    </div>
  </div>
</div>
  );
}

export default App;