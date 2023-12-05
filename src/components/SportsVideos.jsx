import "./Book.css";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import SportsVideo from "./SportsVideo";

import book8 from '../assets/book/book8.mp3';

  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const getArticles = async () => {
  //   const articlesCol = collection(db, 'books');
  //   const articleSnapshot = await getDocs(articlesCol);
  //   const articles = articleSnapshot.docs.map(doc => doc.data());
  //   setArticles(articles);
  // };
  //   getArticles();
  // }, []);


  const SportsVideos = () => {
    const articles = [
      {
        title: "1. Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng",
        description: "“Tài liệu hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng” được biên soạn dựa trên nội dung cuốn sách cùng tên là “Hỏi - đáp về vệ sinh môi trường nông thôn, bảo vệ người sản xuất và cộng đồng”. Tài liệu là chuỗi các câu hỏi – đáp về các kiến thức về môi trường, vệ sinh lao động, các vấn đề về nguyên nhân, tình trạng ô nhiễm môi trường, cách xử lý rác thải, cách sử dụng thuốc bảo vệ thực vật an toàn, .... Đây là các kiến thức cơ bản, hữu ích dành cho mỗi tổ chức, cá nhân. Cùng lắng nghe để hiểu và biết cách bảo vệ môi trường sống cho chính mình và những người xung quanh, vì một môi trường xanh sạch đẹp.",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: "",
      },
      {
        title: "2. Tài liệu hỏi - đáp một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay",
        description: "Bạn có biết tà đạo hay đạo lạ ở nước ta hiện nay chưa? Đã hiểu rõ về tín ngưỡng, tôn giáo và sự khác nhau với đạo tà, đạo lạ chưa? Nếu chưa, tài liệu này là dành cho bạn. “Tài liệu hỏi – đáp một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay”  được biên soạn trên cơ sở nội dung cuốn sách “Một số vấn đề về đạo lạ, tà đạo ở nước ta hiện nay” gồm những câu hỏi và trả lời liên quan đến nhận thức về đạo lạ, tà đạo; phân biệt đạo lạ, tà đạo với tín ngưỡng, tôn giáo; những chủ trương, chính sách, pháp luật của Đảng, Nhà nước. Cùng lắng nghe để phân biệt và nâng cao kiến thức về tà đạo, đạo lạ ở nước ta hiện nay.",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: "",
      },
      {
        title: "3. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 1)",
        description: "Nhắc đến chủ tịch Hồ Chí Minh, chúng ta không quên nhắc đến những đóng góp, hi sinh của người vì độc lập, tư do, hạnh phúc của người dân Việt Nam. Ở người hộ tụ những phẩm chất, đạo đức, phong cách quý giá để mỗi chúng ta học tập, làm theo và rèn luyện để hoàn thiện mình. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (phần 1) với 15 mẫu chuyện hay về Bác, với cách cách giải quyết vấn đề khoa học và nhân văn của Người .... Lắng nghe Tài liệu để cùng học tập và làm theo tư tưởng, đạo đức và phong cách Hồ Chí Minh!",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: "",
      },
      {
        title: "4. Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 2)",
        description: "Tiếp nối phần một của Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh, Phần 2 này tuyển chọn 25 mẩu chuyện về tấm gương đạo đức Hồ Chí Minh, nhằm góp phần nâng cao nhận thức cho nhân dân về giá trị to lớn của tấm gương đạo đức Hồ Chí Minh, tạo ra những chuyển biến trong ý thức tu dưỡng, rèn luyện và hành động theo tấm gương đạo đức của Người, góp phần đẩy lùi sự suy thoái về chính trị, đạo đức, lối sống, xây dựng Đảng trong sạch, vững mạnh. Lắng nghe Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh (Phần 2) để tự rèn luyện, giáo dục và hướng tới chân, thiện, mỹ.",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: "",
      },
      {
        title: "5. Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam",
        description: "Việt Nam là quốc gia hình chữ S với đường biển dài từ Bác vào Nam. Sự phân hóa tự nhiên đã tạo nên tính đa dạng về cảnh quan, tài nguyên biển và tiềm năng phát triển các lĩnh vực kinh tế biển, đảo; tạo tiền đề cho bảo đảm an ninh, quốc phòng đất nước từ phía biển. Song song với đó là vấn đề bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế Biển. “Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam” đã được xuất bản, phát hành để giúp chúng ta hiểu thêm về Chiến lược của Việt Nam về bảo vệ chủ quyền trên biển, đảo, và chiến lược phát triển kinh tế biển một cách bền vững. Lắng nghe để nâng cao nhận thức về vai trò, vị trí chiến lược của biển, đảo.",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: ""
      },
      {
        title: "",
        description: "Nếu Tài liệu Chiến lược bảo vệ chủ quyền biển, đảo và phát triển bền vững kinh tế biển Việt Nam giúp bạn nhận thức vai trò, vị trí chiến lược của biển, đảo thì Tài liệu “Một số câu hỏi - đáp về biển, đảo Việt Nam” là cẩm nang giúp bạn giải đáp các thắc mắc liên quan đến biển, đảo, chủ quyền biển, đảo Việt Nam. Nội dung của sách nói “Một số câu hỏi - đáp về biển, đảo Việt Nam” được kế thừa nội dung cuốn sách 99 câu hỏi - đáp về biển. Lắng nghe để khái quát về vị trí, vai trò và tiềm năng của biển, đảo Việt Nam, về các vấn đề liên quan đến các quyền và bảo vệ quyền của Việt Nam ở Biển Đông, về xây dựng và phát triển các lĩnh vực liên quan đến biển, đảo Việt Nam.",
        date: "05/12/2023",
        audioUrl: book8,
        audioTitle: ""
      },
    ];

    return (
      <div>
        <div className="all_books">
          {articles.map((article, index) => (
            <SportsVideo key={index} video={article} />
          ))}
        </div>
      </div>
    );
};

export default SportsVideos;
