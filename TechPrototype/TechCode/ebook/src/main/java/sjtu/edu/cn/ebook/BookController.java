package sjtu.edu.cn.ebook;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api") // 类级别的映射
public class BookController {

    @GetMapping("/books")
    public List<Book> getBooks() {
 
        List<Book> books = Arrays.asList(
            new Book(1, "《人类简史》", 7200, "/imgs/human1.jpg", "尤瓦尔·赫拉利", 50000, 2300, "《人类简史》是一本关于人类历史的书籍，从史前时代到现代社会的全面概述。"),
            new Book(2, "《万历十五年》", 5400, "/imgs/human2.jpg", "黄仁宇", 15000, 600, "《万历十五年》详细讲述了中国明朝万历年间的政治和社会状况。"),
            new Book(3, "《美丽新世界》", 6800, "/imgs/human3.jpg", "阿道司·赫胥黎", 22000, 350, "《美丽新世界》是一部反乌托邦小说，描绘了一个由科技完全控制的未来社会。"),
            new Book(4, "《自由在高处》", 8900, "/imgs/human4.jpg", "王小波", 8000, 1200, "《自由在高处》集合了王小波的短篇小说，展现了他对自由和人性的深刻理解。"),
            new Book(5, "《霍乱时期的爱情》", 7300, "/imgs/human5.jpg", "加西亚·马尔克斯", 30000, 530, "这是一部关于爱情、时间和记忆的史诗般的作品，展现了一个世纪的变迁。"),
            new Book(6, "《国富论》", 9900, "/imgs/human6.jpg", "亚当·斯密", 20000, 460, "《国富论》是经济学的奠基之作，分析了财富的本质和国家的经济制度。"),
            new Book(7, "《史记》", 8800, "/imgs/human7.jpg", "司马迁", 10000, 2000, "《史记》是中国古代的一部纪传体史书，被誉为“史家之绝唱，无韵之离骚”。"),
            new Book(8, "《社会契约论》", 4600, "/imgs/human8.jpg", "让-雅克·卢梭", 12000, 1100, "《社会契约论》是一部政治哲学著作，探讨了自由与权力的关系及其对社会的影响。"),
            new Book(9, "《西方哲学史》", 7800, "/imgs/human9.jpg", "伯特兰·罗素", 9500, 800, "这本书是对西方哲学发展历程的全面回顾，从古希腊到20世纪。"),
            new Book(10, "《中国哲学简史》", 6600, "/imgs/human10.jpg", "冯友兰", 7600, 920, "《中国哲学简史》是一本介绍中国哲学发展的书籍，内容涵盖先秦到近代。"),
            new Book(11, "《美的历程》", 7200, "/imgs/human11.jpg", "李泽厚", 6800, 500, "这本书是对美学历史的探索，从古代到现代不同文化中的美的表现。"),
            new Book(12, "《艺术的故事》", 5500, "/imgs/human12.jpg", "E.H.贡布里希", 5000, 640, "《艺术的故事》是艺术史的经典之作，图文并茂地讲述了从史前时代到现代的艺术发展。"),
            new Book(13, "《人间词话》", 6900, "/imgs/human13.jpg", "王国维", 4300, 1200, "《人间词话》是一本研究宋词的著作，对中国古典文学有着深远的影响。"),
            new Book(14, "《东方史》", 7400, "/imgs/human14.jpg", "赛珍珠", 3900, 780, "《东方史》是一部介绍东方国家历史和文化的书籍，尤其关注中国。"),
            new Book(15, "《从一到无穷大》", 5800, "/imgs/human15.jpg", "乔治·伽莫夫", 8600, 950, "这本书是对数学和自然界中无穷概念的探讨，以及它在科学中的应用。")
        );
        return books;
    }
}