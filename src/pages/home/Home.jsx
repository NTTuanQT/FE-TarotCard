import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Chào mừng đến với Tarot Insights</h1>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#reading">Trải bài</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </nav>
      <section className="banner">
        <h2>Khám phá bí ẩn tương lai cùng Tarot</h2>
        <p>Trải nghiệm hệ thống đọc bài tarot chính xác và đáng tin cậy</p>
        <button>Trải nghiệm ngay</button>
      </section>
      <section className="about" id="about">
        <h2>Về Chúng Tôi</h2>
        <p>Tarot Insights là nền tảng giúp bạn khám phá bản thân và tìm hiểu về tương lai qua những lá bài tarot huyền bí.</p>
      </section>
      <section className="services">
        <h2>Dịch Vụ</h2>
        <div className="service-card">
          <h3>Trải bài tarot</h3>
          <p>Nhận dự đoán về tình yêu, công việc, tài chính và cuộc sống.</p>
        </div>
        <div className="service-card">
          <h3>Trò chuyện cùng chuyên gia</h3>
          <p>Kết nối với các chuyên gia tarot để có cái nhìn sâu sắc hơn.</p>
        </div>
        <div className="service-card">
          <h3>Khoá học tarot</h3>
          <p>Học cách đọc bài tarot và ứng dụng trong cuộc sống hàng ngày.</p>
        </div>
      </section>
      <section className="testimonials">
        <h2>Khách Hàng Nói Gì?</h2>
        <blockquote>
          "Trải nghiệm tarot ở đây thật tuyệt vời! Tôi đã có cái nhìn rõ ràng hơn về con đường phía trước."
          <cite>- Nguyễn Thanh</cite>
        </blockquote>
        <blockquote>
          "Dịch vụ chuyên nghiệp và chính xác. Rất đáng tin cậy!"
          <cite>- Minh Anh</cite>
        </blockquote>
      </section>
      <section className="contact" id="contact">
        <h2>Liên Hệ</h2>
        <p>Email: support@tarotinsights.com</p>
        <p>Hotline: 0123 456 789</p>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Tarot Insights. Mọi quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default Home;