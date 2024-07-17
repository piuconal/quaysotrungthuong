const data = [
  ["13010084", "Hà Văn Lượng"],
  ["13040600", "Nguyễn Văn Minh"],
  //   ["14020242", "Trịnh Thị Ngà"],
  //   ["17100832", "Nguyễn Trọng Bình"],
  //   ["18010009", "Nguyễn Văn Tăm"],
  //   ["18030283", "Nguyễn Thanh Thủy"],
  //   ["18030284", "Nguyễn Nhật Duy"],
  //   ["18080725", "Huỳnh Huy Hòa"],
  //   ["18111069", "Nguyễn Việt Trung"],
  //   ["19080646", "Liễu Minh Tuấn"],
  //   ["19100922", "Nguyễn Thị Dinh"],
  //   ["19101049", "Nguyễn Trọng Tâm"],
  //   ["19101070", "Nguyễn Thị Thùy"],
  //   ["19121292", "Nguyễn Trọng Trí"],
  //   ["20080385", "Nguyễn Lâm Huy Trường"],
  //   ["20100609", "Trần Phan Hoàng Huy"],
  //   ["20100652", "Trần Thị Minh Thư"],
  //   ["21040445", "Trần Hoàng Hùng"],
  //   ["21111066", "La Minh Tú"],
  //   ["22020199", "Nguyễn Văn Hướng"],
  //   ["22020211", "Trịnh Tú Xương"],
  //   ["22020240", "Nguyễn Minh Phú"],
  //   ["22090801", "Dương Văn Toàn"],
  //   ["23040057", "Chung Thị Huỳnh Nhi"],
  //   ["23070164", "Lê Thành Đạt"],
  //   ["23080192", "Nguyễn Anh Tuấn"],
  //   ["23080211", "Huỳnh Thanh Hằng"],
  //   ["23090244", "Dương Văn Phong"],
  //   ["23110412", "Võ Thị Thúy Danh"],
  //   ["24020084", "Phạm Minh Đạt"],
  //   ["24050412", "Nguyễn Văn Điền"],
  //   ["18040395", "Tạ Liên Khương"],
  //   ["17070542", "Phạm Minh Tuấn"],
  //   ["18090892", "Tô Thị Hồng Quyên"],
  //   ["19020044", "Nguyễn Minh Thành"],
  //   ["08010010", "Hoàng Đức Mạnh"],
  //   ["09040014", "Lê Minh Hiếu"],
  //   ["09040020", "Nguyễn Thị Huệ"],
  //   ["11070102", "Nguyễn Văn Đạo"],
  //   ["11100116", "Trần Quốc Vương"],
  //   ["12120461", "Hà Lê Minh Vũ"],
  //   ["13010004", "Nguyễn Văn Thuận"],
  //   ["13020247", "Nguyễn Tuấn Kiệt"],
  //   ["13030468", "Huỳnh Thị Đào"],
  //   ["13050681", "Thân Tiến Dũng"],
  //   ["13070875", "Nguyễn Đình Trọng"],
  //   ["13091186", "Đoàn Thị Ngọc Nhung"],
  //   ["13091226", "Võ Thanh Trúc"],
  //   ["13101409", "Nguyễn Viết Hạnh"],
  //   ["13121492", "Hồ Thị Hoài Thương"],
  //   ["14080703", "Tô Thiện Trí"],
  //   ["14080704", "Thân Duy Đạo"],
  //   ["14080730", "Trần Thị Kim Tuyến"],
  //   ["14121247", "Nguyễn Thị Luyên"],
  //   ["14121248", "Nguyễn Ngọc Quỳnh Như"],
  //   ["14121252", "Dương Văn Lực"],
  //   ["14121256", "Hà Thị Trang"],
  //   ["15020127", "Bùi Thị Trúc Ly"],
  //   ["15050434", "Trương Thị Ngọc Chi"],
  //   ["15090870", "Thân Đức Tùng"],
  //   ["15091016", "Đào Thị Mỹ Hạnh"],
  //   ["15101177", "Nguyễn Ngọc Hiếu"],
  //   ["15121508", "Nguyễn Trần Hồng Nhung"],
  //   ["17060433", "Ksor H' Duyết"],
  //   ["17060434", "Phạm Nguyên Thảo"],
  //   ["17060436", "Hoàng Thị Xuân"],
  //   ["17070519", "Nguyễn Thị Thúy Hằng"],
  //   ["18030207", "Dương Thụy Hồng Thắm"],
  //   ["18060625", "Lương Ngọc Bích"],
  //   ["18070719", "Lê Văn Son"],
  //   ["18100961", "Trần Thị Thúy"],
  //   ["19020067", "Bùi Thị Cẩm Tiên"],
  //   ["19020068", "Lê Minh Giang"],
  //   ["19101047", "Nguyễn Lâm Thông"],
  //   ["20090428", "Hồ Đăng Khoa"],
  //   ["20090429", "Nguyễn Thanh Phong"],
  //   ["20090430", "Hoàng Thị Hạnh"],
  //   ["20120819", "Võ Thanh Tùng"],
  //   ["21040472", "Nguyễn Ngọc Nhuận"],
  //   ["22010028", "Trần Thị Thanh Tuyền"],
  //   ["22010030", "Dương Thị Ánh Linh"],
  //   ["22020237", "Nguyễn Thị Thùy Linh"],
  //   ["22020289", "Trần Ngọc Phi Yến"],
  //   ["22020290", "Nguyễn Anh Thư"],
  //   ["22020299", "Nguyễn Thị Quyên"],
  //   ["22030396", "Nguyễn Thị Nhi"],
  //   ["22070678", "Nguyễn Thị Thanh Ngân"],
  //   ["22070679", "Lê Ngọc Vinh"],
  //   ["22070680", "Trương Đình Thanh Nhã"],
  //   ["23010002", "Nguyễn Văn Ngọc"],
  //   ["23030027", "Nguyễn Khắc Huy"],
  //   ["23030036", "Bùi Trương Hoàng My"],
  //   ["23040071", "Tô Thị Yến Nhi"],
  //   ["23040076", "Phạm Ngọc Long"],
  //   ["23060116", "Phạm Thị Phương Thảo"],
  //   ["23060118", "Nông Thanh Truyền"],
  //   ["23060120", "Lê Trọng Thủy"],
  //   ["23060135", "Mai Văn Tân"],
  //   ["23100361", "Nguyễn Thu Hường"],
  //   ["24030146", "Nguyễn Văn Nhí"],
  //   ["24030213", "Trương Kim Liên"],
  //   ["09030012", "Trần Thanh Phong"],
  //   ["12100383", "Trương Quốc Tuấn"],
  //   ["13010083", "Lý Thanh Vũ"],
  //   ["13010085", "Nguyễn Quang Nhiên"],
  //   ["14030514", "Huỳnh Tấn Kiên"],
  //   ["14100974", "Nguyễn Việt Quốc"],
  //   ["15091067", "Phạm Quang Vũ"],
  //   ["10060029", "Tăng Xuân Trung"],
  //   ["14030413", "Châu Hồng Đức"],
  //   ["18060636", "Trần Đức Dũng"],
  //   ["19100969", "Lê Công Phúc"],
  //   ["23060101", "Hoàng Thị Xuân"],
  //   ["23090306", "Phan Nguyễn Phi Hùng"],
  //   ["23120452", "Bùi Hữu Ân"],
  //   ["99020007", "Hoàng Anh Thuấn"],
  //   ["01060006", "Phạm Thị Mai Oanh"],
  //   ["04030011", "Trần Thị Tuẫn"],
  //   ["06070030", "Đỗ Thị Ngọc Anh"],
  //   ["13081015", "Lê Tú Quyên"],
  //   ["13081024", "Nguyễn Thị Hồng Phấn"],
  //   ["13111460", "Trịnh Thị Hà"],
  //   ["14030522", "Lê Thị Mỹ Hằng"],
  //   ["15050445", "Dương Thị Thúy Phận"],
  //   ["15111309", "Phạm Thị Hằng"],
  //   ["16010047", "Nguyễn Thị Nhàn"],
  //   ["16030393", "Thái Thị Hiệp"],
  //   ["16050584", "Đoàn Thị Lo"],
  //   ["16050586", "Vũ Văn Chuân"],
  //   ["18080781", "Trần Thị Thu Hương"],
  //   ["18080814", "Ngô Thị Hằng"],
  //   ["21121245", "Trần Thị Diệu My"],
  //   ["21121263", "Trần Văn Hào"],
  //   ["23010003", "Lê Thị Nga"],
  //   ["23120476", "Lê Thị Mừng"],
  //   ["06060038", "Phạm Sanh Hải"],
  //   ["12050177", "Nguyễn Thị Ái"],
  //   ["12120296", "Bùi Tuấn Đạt"],
  //   ["15050412", "Nguyễn Tấn Thọ"],
  //   ["19090799", "Tạ Hoàng Thành"],
  //   ["21050586", "Trần Thanh Tuấn"],
  //   ["22020184", "Nguyễn Đức Trọng"],
  //   ["23090267", "Nguyễn Thế Hiền"],
  //   ["23090269", "Nguyễn Nhật Tảo"],
  //   ["00090020", "Phạm Thị Bích Vân"],
  //   ["04030010", "Ngô Thị Luyến"],
  //   ["05010006", "Vòng Cấm Mùi"],
  //   ["05070021", "Mai Lê Thúy Bình"],
  //   ["06020009", "Quách Thị Ngọc Thủy"],
  //   ["06020010", "Nguyễn Huỳnh Minh Trang"],
  //   ["06020012", "Huỳnh Thị Thanh Giang"],
  //   ["06020019", "Nguyễn Thị Diễm Thúy"],
  //   ["06120046", "Ngô Thị Đông"],
  //   ["06120049", "Trần Thị Hồng Gấm"],
  //   ["06120050", "Đỗ Ngọc Lý"],
  //   ["07030006", "Hoàng Thị Hiên"],
  //   ["09020010", "Nguyễn Thị Hương"],
  //   ["11030065", "Lê Thị Minh"],
  //   ["12010053", "Phạm Thị Nhật Hà"],
  //   ["12030118", "Nguyễn Thị Oanh"],
  //   ["12030120", "Vũ Thị Phương Thảo"],
  //   ["12040153", "Nguyễn Thị Thu Thủy"],
  //   ["12040154", "Trần Thị Thanh Trang"],
  //   ["12070370", "Lê Thị Hương"],
  //   ["13020225", "Lày Cẩm Vân"],
  //   ["13040632", "Phạm Thị Thúy Hà"],
  //   ["13060837", "Nguyễn Thị Hạnh"],
  //   ["13060844", "Trần Thị Yến"],
  //   ["13091230", "Trịnh Thị Hằng"],
  //   ["13121549", "Phạm Thị Ngọc Châm"],
  //   ["14010052", "Đàm Thị Thu Hiền"],
  //   ["14020284", "Nguyễn Thị Huyền Dung"],
  //   ["14020301", "Lê Thị Kim Quyên"],
  //   ["14020342", "Nguyễn Thị Thanh Đài"],
  //   ["14020351", "Hồ Xuân Hương"],
  //   ["14030555", "Nguyễn Ngọc Nhã Khanh"],
  //   ["14090829", "Trương Thị Tuyến"],
  //   ["14090915", "Tô Thị Ngọc Thi"],
  //   ["14111042", "Vũ Nguyễn Quỳnh Như"],
  //   ["14111080", "Phan Thanh Thủy"],
  //   ["15030235", "Vũ Nguyễn Thanh Hằng"],
  //   ["15030243", "Nguyễn Ngọc Thanh Hằng"],
  //   ["15030323", "Nguyễn Ngọc Nhất Linh"],
  //   ["15030331", "Phạm Thị Xí"],
  //   ["15030349", "Trần Ngọc Nhiên"],
  //   ["15070576", "Trương Thị Phương Thảo"],
  //   ["15070637", "Mai Thị Vân"],
  //   ["15101227", "Nguyễn Xuân Tú"],
  //   ["15111442", "Huỳnh Hoàng Nam"],
  //   ["16090847", "Bùi Thị Yến"],
  //   ["16090850", "Lê Thị Hoài Thơ"],
  //   ["16100875", "Võ Thị Hồng Tâm"],
  //   ["16100881", "Nguyễn Đặng Quỳnh Trang"],
  //   ["16100885", "Lê Thị Tiến"],
  //   ["16110940", "Nguyễn Thị Bình Minh"],
  //   ["18100999", "Nguyễn Thị Lan Vy"],
  //   ["18101007", "Nguyễn Thị Thu Trang"],
  //   ["13020206", "Lê Cảnh Hiếu"],
  //   ["18101038", "Nguyễn Việt Sang"],
  //   ["19111229", "Nguyễn Minh Đoàn"],
  //   ["19121306", "Lê Hoàng Anh Dũng"],
  //   ["13020216", "Lê Thị Tuyết Nhung"],
  //   ["13040642", "Trần Ý Nghĩa"],
  //   ["14090896", "Phạm Thị Ngọc"],
  //   ["15010003", "Huỳnh Thị Điện"],
  //   ["15060515", "Đào Thị Thanh Chi"],
  //   ["15060516", "Phan Thị Thủy Tiên"],
  //   ["18010005", "Trịnh Thị Mai Nhi"],
  //   ["18010032", "Nguyễn Thị Kim Yến"],
  //   ["18050490", "Trịnh Thị Diễm Hương"],
  //   ["18060626", "Nguyễn Thị Thùy Trang"],
  //   ["18090871", "Huỳnh Thị Yến Nhi"],
  //   ["18101029", "Trần Thị Hằng"],
  //   ["19100926", "Phan Thị Nhung"],
  //   ["21020077", "Huỳnh Thị Mỹ Duyên"],
  //   ["21030285", "Nguyễn Thị Tân"],
  //   ["21040398", "Đặng Thị Kim Thảo"],
  //   ["21040416", "Đỗ Thị Hà Ly"],
  //   ["21040486", "Ngô Văn Tài"],
  //   ["21050527", "Phạm Thị Tuyết Nga"],
  //   ["21060663", "Ksor H'Đói"],
  //   ["21060665", "Nguyễn Thị Ngọc Hà"],
  //   ["21121275", "Nguyễn Thị Nhâm"],
  //   ["22010026", "Trần Thị Kim Đông"],
  //   ["22020224", "Nguyễn Thị Phương Thanh"],
  //   ["22020228", "Lang Thùy Trang"],
  //   ["22040493", "Trần Thị Bích Ngọc"],
  //   ["22040497", "H'Nek Êban"],
  //   ["23080199", "Dương Thị Hoài Thương"],
  //   ["23080201", "Nguyễn Thị Hồng Loan"],
  //   ["23080204", "Phạm Ngọc Trâm"],
  //   ["23080205", "Trần Huyền Diệu"],
  //   ["23080206", "Nguyễn Thị Chúc Ly"],
  //   ["23090270", "Nguyễn Ngọc Như Ý"],
  //   ["23090271", "Nguyễn Thị Tuyết Sương"],
  //   ["23090272", "Trần Thị Minh Thuận"],
  //   ["23090273", "Lê Thị Chúc Muội"],
  //   ["23090274", "Nguyễn Hoàng Yến Vy"],
  //   ["24020088", "Võ Thị Thanh Ngân"],
  //   ["24020089", "Trần Thúy Vy"],
  //   ["24020091", "Đào Lê Thị Loan"],
  //   ["24020092", "Đặng Thị Mỹ Trang"],
  //   ["24020096", "Nguyễn Thị Kim Phượng"],
  //   ["24020097", "Trương Thị Hải"],
  //   ["24020098", "Huỳnh Ngọc Giang"],
  //   ["24020100", "Lê Hoài Thu"],
  //   ["24020101", "Mai Thanh Thủy"],
  //   ["04100015", "Nguyễn Thị Khánh Linh"],
  //   ["06110043", "Nguyễn Khắc Giác"],
  //   ["11010058", "Nguyễn Mai Khanh"],
  //   ["12100409", "Lê Thị Hằng"],
  //   ["13060863", "Trần Tấn Quốc"],
  //   ["22080739", "Đoàn Uyển Nhi"],
  //   ["99090060", "Bùi Thúy Hòa"],
  //   ["16040490", "Nguyễn Huỳnh Tố Nguyên"],
  //   ["23090281", "Nguyễn Hồng Thắm"],
  //   ["13060854", "Nguyễn Tiến Dũng"],
  //   ["13101375", "Bùi Thị Tuyết Sương"],
  //   ["13121525", "Lâm Hoàng Bảo"],
  //   ["14010036", "Trần Phương Du"],
  //   ["14010061", "Vũ Quang Đôi"],
  //   ["14020091", "Nguyễn Thị Cẩm Loan"],
  //   ["14020114", "Nguyễn Kiên Định"],
  //   ["14080717", "Trương Thị Cẩm Nhung"],
  //   ["15010041", "Võ Duy Cảnh"],
  //   ["15010043", "Võ Thị Bích Tuyền"],
  //   ["15050451", "Nguyễn Thị Mỹ Chi"],
  //   ["16060623", "Trần Nguyễn Trung Nguyên"],
  //   ["17040243", "Trần Công Thanh"],
  //   ["17050417", "Huỳnh Thanh Lam"],
  //   ["17080676", "Võ Bảo Sơn"],
  //   ["17100813", "Võ Hữu Bảo"],
  //   ["18060637", "Dương Tấn Lộc"],
  //   ["19030221", "Dương Ngọc Yến"],
  //   ["20090427", "Hoàng Văn Hùng"],
  //   ["21030229", "Phan Hoàng Tôn"],
  //   ["21060707", "Cao Mạnh Cường"],
  //   ["21060708", "Bùi Văn Nghĩ"],
  //   ["21111039", "Nguyễn Thanh Hải"],
  //   ["22090878", "Lê Thị Ngọc Dư"],
  //   ["22090880", "Nguyễn Thành Trí"],
  //   ["22090881", "Nguyễn Cường Thịnh"],
  //   ["23020009", "Nguyễn Hoàng Sang"],
  //   ["23020023", "Phạm Đình Lợi"],
  //   ["23070144", "Võ Thị Thu An"],
  //   ["23070145", "Nguyễn Thanh Phụng"],
  //   ["23070146", "Nguyễn Thị Thanh Tuyền"],
  //   ["23070159", "Nguyễn Lưu Vũ"],
  //   ["00090019", "Vũ Thị Nhung"],
  //   ["06020021", "Vũ Thị Minh"],
  //   ["12050170", "Nguyễn Thị Thu Thảo"],
  //   ["12120442", "Hoàng Ngọc Phi Phượng"],
  //   ["13040505", "Bùi Hữu Hạnh"],
  //   ["13040634", "Nguyễn Thị Minh Xuân"],
  //   ["14020306", "Lại Thị Kim Oanh"],
  //   ["15030320", "Trần Thị Ngọc Vân"],
  //   ["16030276", "Nguyễn Ngọc Khánh Châu"],
  //   ["16100928", "Nguyễn Thị Hồng Nhung"],
  //   ["16110944", "Trương Thị Hồng Thắm"],
  //   ["18030099", "Nguyễn Thị Như"],
  //   ["18070696", "Nguyễn Thị Ánh"],
  //   ["19010023", "Ao Thị Nhựt Trinh"],
  //   ["22050562", "Phạm Thị Cẩm Tiên"],
  //   ["22080747", "Hồ Hải Yến"],
  //   ["23120444", "Nguyễn Thị Hồng Gấm"],
  //   ["98090001", "Hoàng Thị Mộng Điệp"],
  //   ["99020024", "Quách Thị Cẩm Loan"],
  //   ["99100066", "Phạm Đình Quốc Diễm Kiều"],
  //   ["14090772", "Bùi Minh Đức"],
  //   ["15091018", "Hoàng Thị Thúy"],
  //   ["16020216", "Hồ Thị Hồng Hạnh"],
  //   ["17040258", "Phan Văn Toàn"],
  //   ["17070539", "Bùi Văn Nạp"],
  //   ["17090746", "Nguyễn Thanh Tùng"],
  //   ["17110889", "Lê Đăng Hoàng"],
  //   ["17110894", "Lê Hoàng Kim Chi"],
  //   ["18060627", "Huỳnh Văn Chi"],
  //   ["19030247", "Nguyễn Hưng Khánh"],
  //   ["19040278", "Ngô Minh Khải"],
  //   ["20030319", "Nguyễn Thống Trị"],
  //   ["20040333", "Nguyễn Văn Thi"],
  //   ["21030231", "Nguyễn Thị Tuyết"],
  //   ["21040443", "Đỗ Tấn Đạt"],
  //   ["21040464", "Đỗ Thị Thúy Hằng"],
  //   ["22020122", "Trần Nhân Hậu"],
  //   ["22030437", "Phan Mạnh Minh"],
  //   ["22090934", "Nguyễn Thị Huỳnh Như"],
  //   ["23060114", "Ngô Hoài Thương"],
  //   ["23060115", "Đinh Thị Hiền Lương"],
  //   ["23060136", "Đinh Trọng Hiếu"],
  //   ["23100332", "Phạm Quang Vinh"],
  //   ["23110406", "Trần Xuân Lợi"],
  //   ["23120475", "Triệu Thành Tín"],
  //   ["24010005", "Đào Thanh Dự"],
  //   ["24010006", "Đỗ Đức Toàn"],
  //   ["24030141", "Võ Thu Ngân"],
  //   ["12110279", "Huỳnh Văn Hiền"],
  //   ["13040516", "Vũ Thị Hồng Ân"],
  //   ["13040641", "Nguyễn Thị Bích Giang"],
  //   ["19101055", "Rah Lan H'Nguêt"],
  //   ["22020145", "Nguyễn Cà Chuôl"],
  //   ["22020229", "Dương Kim Yến"],
  //   ["22020302", "Nguyễn Thúy Nhi"],
  //   ["22030392", "Nguyễn Thanh Nga"],
  //   ["23090290", "Hồ Sỷ An"],
  //   ["13040552", "Bùi Thị Thùy Trang"],
  //   ["13101419", "Nguyễn Văn Viễn"],
  //   ["18030095", "Nguyễn Thị Thanh Cúc"],
  //   ["18030163", "Võ Ánh Dương"],
  //   ["18060642", "Đỗ Thị Thu Diễm"],
  //   ["18070662", "Trần Thị Như Ý"],
  //   ["18100955", "Phan Anh Bảo Ngọc"],
  //   ["20100571", "Nguyễn Cu Đen"],
  //   ["21060774", "Châu Tiến Đạt"],
  //   ["22080758", "Nguyễn Minh Nhựt"],
  //   ["23060105", "Phan Thị Yến Nhi"],
  //   ["23070165", "Nguyễn Hoài Sơn"],
  //   ["23080179", "Lê Trường Sinh"],
  //   ["23080207", "Nguyễn Thị Sa"],
  //   ["23100317", "Nguyễn Công Anh Hoàng"],
  //   ["12080346", "Trần Minh Phương"],
  //   ["12100381", "Nguyễn Thanh Tuấn"],
  //   ["13010022", "Nguyễn Thị Mộng Tuyền"],
  //   ["13010023", "Trương Thị Thanh Tông"],
  //   ["13010024", "Huỳnh Thị Trang"],
  //   ["13010043", "Lê Thị Tuyết Mai"],
  //   ["13020241", "Nguyễn Thị Xuyên"],
  //   ["13020243", "Võ Kim Thoa"],
  //   ["13030299", "Phạm Thị Hoa"],
  //   ["13040513", "Đào Thị Dương"],
  //   ["13040602", "Trần Thị Trúc Hà"],
  //   ["13050766", "Bùi Tá Giang"],
  //   ["13050776", "Trần Kim Cúc"],
  //   ["13050779", "Bùi Thị Thanh Trúc"],
  //   ["13121611", "Đặng Thị Ánh Hồng"],
  //   ["14020145", "Nguyễn Thị Ngọc Trâm"],
  //   ["14020149", "Trần Thị Nguyện"],
  //   ["14080698", "Nguyễn Thị Thanh Trúc"],
  //   ["14090889", "Trần Thị Anh Thư"],
  //   ["14100936", "Nguyễn Hoàng Ánh Tuyết"],
  //   ["14111137", "Nguyễn An"],
  //   ["14121217", "Võ Thị Tuyết"],
  //   ["15010047", "Nguyễn Thị Yến"],
  //   ["15010088", "La Hoàng Ngọc Vân"],
  //   ["15020109", "Nguyễn Thị Nam"],
  //   ["15030140", "Lê Thị Hương"],
  //   ["15060498", "Trương Anh Kim Tước"],
  //   ["15060509", "Nguyễn Thị Thùy Trang"],
  //   ["15060510", "Nguyễn Thị Ngọc Hà"],
  //   ["15060514", "Đặng Thị Tuyết"],
  //   ["15070584", "Huỳnh Thị Trắng"],
  //   ["15090883", "Võ Thị Hồng Gấm"],
  //   ["15090887", "Nguyễn Thị Thu Hương"],
  //   ["15090888", "Nguyễn Thị Phương Dung"],
  //   ["15091025", "Nguyễn Hoàng Yến"],
  //   ["16070708", "Kiều Quốc Tài"],
  //   ["17100830", "Đặng Ngọc Chương"],
  //   ["18030154", "Vũ Minh Phụng"],
  //   ["19020146", "Mai Văn Thắng"],
  //   ["19090881", "Nguyễn Thị Thanh Hằng"],
  //   ["20120823", "Bạch Văn Tuấn"],
  //   ["21010019", "Phạm Ngọc Hữu Phước"],
  //   ["21050587", "Nguyễn Thị Hồng An"],
  //   ["21050647", "Lê Thị Thu Hiền"],
  //   ["21060734", "Trần Thị Huyền Trân"],
  //   ["21060800", "Mai Thị Kim Anh"],
  //   ["21111068", "Nguyễn Thị Hồng My"],
  //   ["21111129", "Trịnh Minh Thương"],
  //   ["21111168", "Nguyễn Hoàng Nam"],
  //   ["21121173", "Lâm Thị Ly Na"],
  //   ["21121198", "Lê Hoài Ân"],
  //   ["22010050", "Nguyễn Hồng Phong"],
  //   ["22020141", "Nguyễn Hữu Nhàn"],
  //   ["22090786", "Nguyễn Công Tuấn"],
  //   ["22090883", "Nguyễn Thị Hồng Đoan"],
  //   ["22090884", "Phan Thị Phương Dung"],
  //   ["23090293", "Nguyễn Thế Dinh"],
  //   ["23090294", "Nguyễn Bảo Anh"],
  //   ["23090299", "Bạch Ngọc Phú"],
  //   ["24020099", "Trịnh Minh Nhựt Tài"],
  //   ["24030150", "Nguyễn Trí Danh"],
  //   ["24030151", "Nguyễn Minh Quân"],
  //   ["24030162", "Hồ Thị Thủy Tiên"],
  //   ["24030219", "Lê Nguyễn Yến Na"],
  //   ["13010030", "Phạm Văn Thành"],
  //   ["13111431", "Đàm Văn Tính"],
  //   ["14020181", "Trần Đức Hùng"],
  //   ["14020239", "Nguyễn Trọng Hoàn"],
  //   ["15111420", "Phạm Đình Vũ"],
  //   ["15121511", "Nguyễn Thị Hồng Hạnh"],
  //   ["15121515", "Trang Thị Thùy Linh"],
  //   ["16080752", "Nguyễn Chiến Ngọc Dũng"],
  //   ["18090920", "Nguyễn Hoàng Duy"],
  //   ["19050312", "Lê Gia Tuấn"],
  //   ["19090746", "Nguyễn Ngọc Hải My"],
  //   ["20090489", "Lê Minh Quân"],
  //   ["22030397", "Lê Minh Vũ"],
  //   ["23020018", "Lê Quang Hậu"],
  //   ["23120477", "Hồ Anh Thương"],
  //   ["24010029", "Dương Chí Thiện"],
  //   ["12100393", "Nguyễn Minh Tùng"],
  //   ["13030370", "Nguyễn Thị Huỳnh Anh"],
  //   ["13081177", "Nguyễn Trí Hưng"],
  //   ["14100976", "Trần Cảnh Nết"],
  //   ["18050550", "Âu Thị Quỳnh Như"],
  //   ["18090846", "Trần Thị Quỳnh Như"],
  //   ["20030189", "Nguyễn Hữu Hiển"],
  //   ["20100610", "Trương Chí Nguyễn"],
  //   ["22040510", "Nguyễn Minh Quân"],
  //   ["23090245", "Phạm Thị Hải Ninh"],
  //   ["24030191", "Nguyễn Văn Đức"],
  //   ["24040248", "Nguyễn Thị Thùy"],
  //   ["24040263", "Nguyễn Thị Hằng"],
  //   ["24050377", "Đinh Văn Dương"],
  //   ["13091260", "Đào Thị Kim Thuận"],
  //   ["15111417", "Nguyễn Huy Thuật"],
  //   ["19020126", "Phan Chí Toàn"],
  //   ["14050654", "Phạm Hoàng Minh"],
  //   ["17040256", "Nguyễn Đức Tùng"],
  //   ["18111067", "Lưu Thị Nhung"],
  //   ["20090486", "Phạm Thị Thủy"],
  //   ["23070143", "Trần Văn Hoàng"],
  //   ["23090246", "Lương Khánh Hoàng"],
  //   ["18121143", "Nguyễn Tiến Dũng"],
  //   ["19050318", "Lê Hoàng Minh"],
  //   ["19101071", "Lê Chí Trí"],
  //   ["19111271", "Huỳnh Công Bình"],
  //   ["21111137", "Trần Văn Khởi"],
  //   ["22070683", "Vũ Đức Trường"],
  //   ["21111145", "Hoàng Ngọc Châu"],
  //   ["06020015", "Trần Xuân Thủy"],
  //   ["07100020", "Nguyễn Thị Thảo"],
  //   ["07120024", "Lưu Thị Mỹ Châu"],
  //   ["10050028", "Ngô Thị Lệ Ngọc"],
  //   ["12100403", "Mai Văn Quang"],
  //   ["13081097", "Huỳnh Trúc Trinh"],
  //   ["13121600", "Đinh Hiến Thành"],
  //   ["14010031", "Huỳnh Thị Xuân Đào"],
  //   ["15070619", "Lâm Hoàng Oanh"],
  //   ["17070498", "Hồ Thị Kim Ngân"],
  //   ["18101049", "Đặng Thị Kim Ngân"],
  //   ["19020085", "Huỳnh Thanh Liêm"],
  //   ["19020087", "Nguyễn Chí Nghĩa"],
  //   ["19020139", "Hà Phúc Thiện"],
  //   ["19101074", "Nguyễn Thị Ký"],
  //   ["20110686", "Phạm Phú Cường"],
  //   ["20110753", "Nguyễn Minh Nhựt Khanh"],
  //   ["21040390", "Đoàn Duy Thái"],
  //   ["21040504", "Bùi Thị Diệu Hiền"],
  //   ["21060727", "Lê Hồng Hảo"],
  //   ["21060740", "Nguyễn Thị Vân"],
  //   ["21060758", "Thân Thị Hồng Hoa"],
  //   ["22080752", "Lê Thị Thùy Trang"],
  //   ["23090247", "Lê Minh Phước"],
  //   ["24030143", "Phan Hoàng Mỹ"],
  //   ["24050331", "Nguyễn Văn Hải Đăng"],
  //   ["99020040", "Nguyễn Thành Sơn"],
];

const prizes = [
  { name: "KHUYẾN KHÍCH", count: 21 },
  { name: "NĂM", count: 15 },
  { name: "TƯ", count: 15 },
  { name: "BA", count: 10 },
  { name: "NHÌ", count: 3 },
  { name: "NHẤT", count: 1 },
  { name: "ĐẶC BIỆT", count: 1 },
];
let currentPrizeIndex = 0;
let currentCount = 0;

const boxes = document.querySelectorAll(".box");
const spinButton = document.getElementById("spinButton");
const reSpinButton = document.getElementById("reSpinButton");
const result = document.getElementById("result");
const prizeCounter = document.getElementById("prizeCounter");

const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

function getRandomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

function updatePrizeCounter() {
  prizeCounter.textContent = `💥${currentCount}/${prizes[currentPrizeIndex].count} GIẢI ${prizes[currentPrizeIndex].name}`;
}

function nextPrize() {
  if (currentCount < prizes[currentPrizeIndex].count) {
    currentCount++;
  } else {
    currentPrizeIndex++;
    currentCount = 1;
  }
  updatePrizeCounter();
}

function spin() {
  let spinTime = 200000; // 10 seconds
  let interval = 100;
  let totalInterval = 0;
  result.textContent = "";
  // Pause and reset winSound
  winSound.pause();
  winSound.currentTime = 0;

  // Pause and play spinSound
  spinSound.play();

  const spinInterval = setInterval(() => {
    if (totalInterval >= spinTime) {
      clearInterval(spinInterval);
      const finalItem = data[Math.floor(Math.random() * data.length)];
      const finalDigits = finalItem[0].split("");
      boxes.forEach((box, index) => (box.textContent = finalDigits[index]));
      result.textContent = finalItem[1];
      spinSound.pause();
      spinSound.currentTime = 0;

      // Play winSound
      winSound.play();
      reSpinButton.style.display = "block";
    } else {
      boxes.forEach((box) => (box.textContent = getRandomDigit()));
      totalInterval += interval;
      interval *= 1.1; // Increase the interval to slow down the spin
    }
  }, interval);
}

spinButton.addEventListener("click", () => {
  reSpinButton.style.display = "none";
  spin();
  nextPrize();
});

reSpinButton.addEventListener("click", () => {
  reSpinButton.style.display = "none";
  spin(); // Only spin, don't call nextPrize
});

updatePrizeCounter(); // Initialize the counter display
$(document).ready(function () {
  let currentIndex = 0;
  const slides = $(".slide");
  const dots = $(".dot");

  function showSlide(index) {
    slides.removeClass("active");
    dots.removeClass("active");
    slides.eq(index).addClass("active");
    dots.eq(index).addClass("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  dots.click(function () {
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });

  setInterval(nextSlide, 2000); // Auto change slide every 2 seconds
});
let winners = [];
function removeDuplicates() {
  // Tạo một đối tượng Map để lưu trữ các phần tử đã xuất hiện
  let seen = new Map();
  let uniqueWinners = [];

  // Duyệt qua mảng winners hiện tại
  winners.forEach((winner) => {
    // Tạo một key duy nhất từ mã và giải để kiểm tra
    let key = `${winner.code}-${winner.prize}`;
    // Nếu key chưa tồn tại trong Map seen
    if (!seen.has(key)) {
      // Thêm key vào Map seen và đánh dấu là đã xuất hiện
      seen.set(key, true);
      // Thêm winner vào mảng uniqueWinners (mảng không có phần tử trùng lặp)
      uniqueWinners.push(winner);
    }
  });

  // Gán lại mảng winners bằng mảng uniqueWinners đã loại bỏ phần tử trùng lặp
  winners = uniqueWinners;

  // Hiển thị lại danh sách người trúng giải đã cập nhật
  showWinnerList();
}

// Hàm tự động loại bỏ các phần tử trùng lặp sau 3 giây
function autoRemoveDuplicates() {
  setTimeout(() => {
    removeDuplicates();
  }, 10); // Sau 3 giây
}

// Hàm lưu người trúng giải
function saveWinner() {
  const currentWinner = {
    code:
      boxes[0].textContent +
      boxes[1].textContent +
      boxes[2].textContent +
      boxes[3].textContent +
      boxes[4].textContent +
      boxes[5].textContent +
      boxes[6].textContent +
      boxes[7].textContent,
    name: result.textContent,
    prize: prizes[currentPrizeIndex].name,
  };
  winners.push(currentWinner);
  // Hiển thị thông báo lưu thành công
  const saveSuccessMessage = document.getElementById("saveSuccessMessage");
  saveSuccessMessage.style.display = "block";
  result.textContent = "";
  // Ẩn thông báo sau 3 giây
  setTimeout(() => {
    saveSuccessMessage.style.display = "none";
    // Tự động loại bỏ các phần tử trùng lặp sau khi lưu thành công
    autoRemoveDuplicates();
  }, 1000);

  // Optional: You can provide feedback or notification that the winner has been saved.
  console.log(
    `Đã lưu: ${currentWinner.code} - ${currentWinner.name} - ${currentWinner.prize}`
  );
  showWinnerList(); // Update the displayed list immediately after saving
}

// Sử dụng sự kiện click cho nút lưu (ví dụ: id="saveButton")
document.getElementById("saveButton").addEventListener("click", () => {
  saveWinner();
});

function showWinnerList() {
  const winnerList = document.getElementById("winnerList");
  winnerList.innerHTML = "";
  winners.forEach((winner) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = `${winner.code} - ${winner.name} - Giải ${winner.prize}`;
    winnerList.appendChild(listItem);
  });
}

// Sử dụng sự kiện click cho nút danh sách (ví dụ: id="listButton")
document.getElementById("listButton").addEventListener("click", () => {
  showWinnerList();
  const winnerListModal = new bootstrap.Modal(
    document.getElementById("winnerListModal")
  );
  winnerListModal.show();
});
