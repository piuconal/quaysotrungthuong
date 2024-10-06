const data = [
  ["00000001", "TĂNG LÂM TÀI 🟢 YÊN SƠN"],
  ["00000002", "NGUYỄN VĂN NGẠC 🟢 THỊ TRẤN"],
  ["00000003", "NGUYỄN ĐÌNH THUYẾT 🟢 BÌNH SƠN"],
  ["00000004", "LÊ THỊ NGUYỆT 🟢 BÌNH SƠN"],
  ["00000005", "NGUYỄN THỊ NGA 🟢 KHAI SƠN"],
  ["00000006", "NGUYỄN THỊ THU 🟢 BẮC SƠN"],
  ["00000007", "HOÀNG THẾ NGHĨA 🟢 TÀO SƠN"],
  ["00000008", "PHAN SỸ CƯỜNG 🟢 THỊNH SƠN"],
  ["00000009", "TÔ QUANG THÀNH 🟢 BẮC SƠN"],
  ["00000010", "ĐẶNG CHÍ MINH 🟢 ĐẶNG SƠN"],
  ["00000011", "NGUYỄN VĂN THÀNH 🟢 LAM SƠN"],
  ["00000012", "NGUYỄN VĂN CÔNG 🟢 BỒI SƠN"],
  ["00000013", "HOÀNG THỊ HÒA 🟢 LƯU SƠN"],
  ["00000014", "LÊ THỊ THUẬN 🟢 ĐÀ SƠN"],
  ["00000015", "ĐẬU THỊ TÚ 🟢 NGHĨA HÀNH"],
  ["00000016", "NGUYỄN THỊ TÂM 🟢 ĐÀ SƠN"],
  ["00000017", "NGUYỄN THỊ HỒNG 🟢 XUÂN SƠN"],
  ["00000018", "THÁI THỊ HỒNG 🟢 THỊNH SƠN"],
  ["00000019", "NGUYỄN THỊ ẤT 🟢 ĐÔNG SƠN"],
  ["00000020", "TRẦN ĐÌNH TÀI 🟢 GIANG SƠN"],
  ["00000021", "LÊ THỊ KIÊN DOANH 🟢 GIANG SƠN"],
  ["00000022", "NGUYỄN THỊ DU 🟢 HIẾN SƠN"],
  ["00000023", "HOÀNG THỊ XOAN 🟢 GIANG SƠN"],
  ["00000024", "BÙI SỸ TUẤN 🟢 GIANG SƠN"],
  ["00000025", "THÀNH NAM VIỆT 🟢 NGHĨA THÁI"],
  ["00000026", "THÁI ĐÌNH NHẬT 🟢 HÒA SƠN"],
  ["00000027", "HÀ XUÂN NIỆM 🟢 NGHĨA HOÀN"],
  ["00000028", "CAO TIẾN DIỆN 🟢 LAM SƠN"],
  ["00000029", "LÊ THỊ TRÚC 🟢 LAM SƠN"],
  ["00000030", "NGUYỄN ĐÌNH KIỀU 🟢 XUÂN SƠN"],
  ["00000031", "CHU VĂN QUYẾT 🟢 LƯU SƠN"],
  ["00000032", "NGUYỄN THỊ THUẬN 🟢 LƯU SƠN"],
  ["00000033", "NGUYỄN THỊ HIỂN 🟢 THỊNH SƠN"],
  ["00000034", "DƯƠNG THỊ BẢY 🟢 MINH SƠN"],
  ["00000035", "PHAN THỊ HOA 🟢 THANH PHONG"],
  ["00000036", "NGUYỄN VĂN LƯƠNG 🟢 MINH SƠN"],
  ["00000037", "LÊ QUYẾT THẮNG 🟢 NGHĨA ĐỒNG"],
  ["00000038", "NGUYỄN VĂN QUỲNH 🟢 NAM SƠN"],
  ["00000039", "NGUYỄN ĐÌNH TRỊ 🟢 NAM SƠN"],
  ["00000040", "HOÀNG THỊ THẮNG 🟢 TÂN SƠN"],
  ["00000041", "LÊ THỊ HÀ 🟢 THUẬN SƠN"],
  ["00000042", "TRẦN NGỌC MẠNH 🟢 NGHĨA DŨNG"],
  ["00000043", "NGUYỄN THẾ SINH 🟢 TRUNG SƠN"],
  ["00000044", "TĂNG THỊ TRANG 🟢 TÂN PHÚ"],
  ["00000045", "TRẦN THỊ THANH 🟢 XUÂN SƠN"],
  ["00000046", "NGÔ XUÂN HƯỜNG 🟢 NGHĨA THÁI"],
  ["00000047", "BẠCH SỸ LĨNH 🟢 THANH YÊN"],
  ["00000048", "NGUYỄN VĂN PHƯỢNG 🟢 THUẬN SƠN"],
  ["00000049", "ĐẶNG ĐÌNH THÌN 🟢 THUẬN SƠN"],
  ["00000050", "TRẦN DOÃN KHA 🟢 THUẬN SƠN"],
  ["00000051", "NGUYỄN THANH BÌNH 🟢 THUẬN SƠN"],
  ["00000052", "HOÀNG VĂN BẮC 🟢 TRÙ SƠN"],
  ["00000053", "HOÀNG SỸ HÙNG 🟢 YÊN SƠN"],
  ["00000054", "TRẦN VĂN PHƯỚC 🟢 TRUNG SƠN"],
  ["00000055", "TRẦN ĐÌNH HẢI 🟢 VÕ LIỆT"],
  ["00000056", "NGUYỄN THỊ DẦN 🟢 VĂN SƠN"],
  ["00000057", "TRẦN THỊ THỦY 🟢 XUÂN SƠN"],
  ["00000058", "NGUYỄN THỊ HOA 🟢 XUÂN SƠN"],
  ["00000059", "NGÔ THỊ TỰ 🟢 XUÂN SƠN"],
  ["00000060", "NGUYỄN VĂN TÙNG 🟢 TÀO SƠN"],
  ["00000061", "TRƯƠNG CÔNG GIANG 🟢 TRÀNG SƠN"],
  ["00000062", "VI VĂN HÀ 🟢 ĐỒNG VĂN"],
  ["00000063", "LÊ VĂN KHẮC 🟢 THUẬN SƠN"],
  ["00000064", "NGUYỄN THỊ VINH 🟢 THỊ TRẤN"],
  ["00000065", "NGUYỄN THỊ TÚY 🟢 THỊ TRẤN"],
  ["00000066", "VÕ VĂN THẮNG 🟢 THỊ TRẤN"],
  ["00000067", "NGUYỄN VĂN ĐÔNG 🟢 PHÚC THÀNH"],
  ["00000068", "TRẦN QUANG LY 🟢 PHÚC THÀNH"],
  ["00000069", "PHẠM XUÂN LAM 🟢 ĐẠI THÀNH"],
  ["00000070", "LÊ THỊ OÁNH 🟢 ĐỒNG THÀNH"],
  ["00000071", "ĐÀO THỊ THỦY 🟢 VĂN THÀNH"],
  ["00000072", "PHAN TRỌNG TIẾN 🟢 KIM THÀNH"],
  ["00000073", "NGUYỄN VĂN PHÚC 🟢 KIM THÀNH"],
  ["00000074", "NGUYỄN THỊ HOÀN 🟢 TÂY THÀNH"],
  ["00000075", "TẠ QUỐC HOA 🟢 TIẾN THÀNH"],
  ["00000076", "NGUYỄN VĂN QUANG 🟢 VĨNH THÀNH"],
  ["00000077", "TRẦN ĐÌNH ANH 🟢 TIẾN THÀNH"],
  ["00000078", "TRẦN ĐÌNH TRƯỜNG 🟢 MÃ THÀNH"],
  ["00000079", "LÊ THỊ TỨ 🟢 SƠN THÀNH"],
  ["00000080", "NGUYỄN THỊ PHÚ 🟢 MÃ THÀNH"],
  ["00000081", "NGUYỄN VĂN TOÀN 🟢 ĐỒNG THÀNH"],
  ["00000082", "NGUYỄN VĂN LỢI 🟢 TÂN THÀNH"],
  ["00000083", "PHAN VĂN TÂN 🟢 ĐỨC THÀNH"],
  ["00000084", "LÊ VĂN QÚY 🟢 THỌ THÀNH"],
  ["00000085", "NGUYỄN THỊ HẰNG 🟢 TRUNG THÀNH"],
  ["00000086", "NGUYỄN THỊ HÀ 🟢 MỸ THÀNH"],
  ["00000087", "NGUYỄN THỊ LIÊN 🟢 ĐÔ THÀNH"],
  ["00000088", "NGUYỄN THỊ NGA 🟢 LIÊN THÀNH"],
  ["00000089", "THÁI THỊ VINH 🟢 LÝ THÀNH"],
  ["00000090", "NGÔ ĐẮC KÝ 🟢 XUÂN THÀNH"],
  ["00000091", "THÁI THỊ SƯƠNG 🟢 ĐỒNG THÀNH"],
  ["00000092", "HỒ THỊ VÂN 🟢 TAM HỢP"],
  ["00000093", "NGUYỄN ĐÌNH KHOA 🟢 NGHĨA MAI"],
  ["00000094", "NGUYỄN THÀNH QUẾ 🟢 NGHĨA YÊN"],
  ["00000095", "TẠ MẠNH CƯỜNG 🟢 TÂN MAI"],
  ["00000096", "NGUYỄN TRUNG CHÁNH 🟢 NGHĨA LÂM"],
  ["00000097", "NGUYỄN ĐÌNH QUỲNH 🟢 MINH HỢP"],
  ["00000098", "PHAN THỊ SÁU 🟢 NGHĨA HỒNG"],
  ["00000099", "PHAN THỊ HIÊN 🟢 YÊN HỢP"],
  ["00000100", "HỒ THỊ HƯƠNG TRANG 🟢 HOA THÀNH"],
  ["00000101", "PHAN TẤT THIÊN 🟢 HOA THÀNH"],
  ["00000102", "ĐẠI LÝ NGUYỄN THỊ  THU 🟢 TT HƯNG NGUYÊN "],
  ["00000103", "ĐẠI LÝ VŨ THỊ KHUYÊN 🟢 HƯNG XÁ -  "],
  ["00000104", "CỬA HÀNG VÕ THỊ ÁNH 🟢 HƯNG TIẾN -"],
  ["00000105", "NGUYỄN THỊ KHÁNH (VINH) 🟢 NGHI DIÊN "],
  ["00000106", "CH NGUYỄN ĐÌNH CẢNH (HÀ) 🟢 HƯNG CHÂU"],
  ["00000107", "CÔNG TY BẮC TRUNG NAM ( NGUYỄN VĂN NHUNG)  🟢 NGHI VĂN "],
  ["00000108", "NGUYỄN MẠNH CƯỜNG ( CỬA HÀNG THẢO HOÀN) 🟢 CHÂU NHÂN"],
  ["00000109", "NGUYỄN VĂN HẢI (CỬA HÀNG CHÚ CHẮT)  🟢 NAM KIM "],
  ["00000110", "CỬA HÀNG NGUYỄN THỊ LƯU 🟢 NGHI TRƯỜNG NGHI LỘC"],
  ["00000111", "CỬA HÀNG NGUYỄN THỊ HIẾU 🟢 NGHI TRƯỜNG NGHI LỘC"],
  ["00000112", "ĐẠI LÝ HỒ CHÍ CƯƠNG ( HƯƠNG TRỊ) 🟢 TT NGHĨA ĐÀN "],
  ["00000113", "NGUYỄN TỰ TRƯỜNG ( HƯƠNG TRỊ) 🟢 QUỲNH THẮNG "],
  ["00000114", "ĐẠI LÝ  HOÀNG VĂN DŨNG ( HÀ) 🟢 NGHĨA THÀNH "],
  ["00000115", "NGUYỄN CẢNH HOẠCH 🟢 THANH XUÂN "],
  ["00000116", "NGUYỄN VĂN QÚY  🟢 NAM GIANG  "],
  ["00000117", "ĐẠI LÝ CHỊ ĐINH THỊ HƯƠNG (DỤNG) 🟢 THANH THỦY"],
  ["00000118", "ĐẠI LÝ NGUYỄN THỊ THỦY (LƯỢNG NGỌC) 🟢 HƯNG TRUNG  "],
  ["00000119", "ĐẠI LÝ ANH NGUYỄN CẢNH BÍNH  🟢 QUỲNH XUÂN"],
  ["00000120", "ĐẠI LÝ NGUYỄN THỊ HUỆ 🟢 QUỲNH XUÂN"],
  ["00000121", "TRẦN THỊ KHÁNH HUYỀN  🟢 QUỲNH LIÊN TX HOÀNG MAI"],
  ["00000122", "HỒ THỊ MINH 🟢 QUỲNH MINH "],
  ["00000123", "HỒ NGHĨA LƯƠNG 🟢 QUỲNH MINH "],
  ["00000124", "ĐẶNG THỊ PHƯƠNG 🟢 CẦU GIÁT "],
  ["00000125", "HỒ VĂN NĂNG 🟢 TÂN SƠN "],
  ["00000126", "LÊ ĐĂNG Ý 🟢 NGHĨA DŨNG"],
  ["00000127", "HỒ  THỊ SÂM 🟢 QUỲNH MINH "],
  ["00000128", "THÁI THỊ LÊ 🟢 CHÂU CƯỜNG"],
  ["00000129", "NGUYỄN VĂN DŨNG  🟢 DIỄN PHÚ "],
  ["00000130", "ĐINH VĂN TÁM  🟢 DIỄN THỌ"],
  ["00000131", "ANH DƯƠNG NĂM 🟢 DIỄN THỊNH"],
  ["00000132", "ANH NGUYỄN VĂN PHÚ  🟢 DIỄN THỌ"],
  ["00000133", "ANH NGUYỄN XUÂN QUÂN 🟢 DIỄN AN"],
  ["00000134", "ANH LÊ VĂN THẮNG  🟢 DIỄN PHÚ "],
  ["00000135", "LÊ HỒNG CHINH 🟢 DIỄN YÊN "],
  ["00000136", "ĐẠI LÝ ĐẬU ĐỨC CƯỜNG (GIANG) 🟢 CẦU GIÁT "],
  ["00000137", "ĐẠI LÝ NGUYỄN XUÂN THÀNH 🟢 YÊN LÝ "],
  ["00000138", "ĐẠI LÝ PHẠM VĂN  HƯƠNG 🟢 THỊ  TRẤN ĐÔ LƯƠNG"],
  ["00000139", "ANH NGUYỄN VĂN QUANG 🟢 THỊ  TRẤN ĐÔ LƯƠNG"],
  ["00000140", "ĐẠI LÝ CHỊ NGUYỄN THỊ  LAN (VỢI) 🟢 THỊ  TRẤN ĐÔ LƯƠNG"],
  ["00000141", "ĐẠI LÝ CHỊ NGUYỄN THỊ VINH (THANH) 🟢 THỊ  TRẤN ĐÔ LƯƠNG"],
  ["00000142", "CHỊ THÁI THỊ HẰNG (THẮNG) 🟢 THỊ  TRẤN ĐÔ LƯƠNG"],
  ["00000143", "ĐL CAO XUÂN HUY 🟢 DIỄN MINH"],
  ["00000144", "ANH CAO HỮU HOÀNG 🟢 DIỄN THỊNH "],
  ["00000145", "ĐẠI LÝ HOÀNG VĂN THU 🟢 MỸ  THÀNH "],
  ["00000146", "ĐẠI LÝ LÊ XUÂN BẢO 🟢 TĂNG THÀNH"],
  ["00000147", "ANH LÊ VĂN THỊNH (NGÂN) 🟢 THỊ  TRẤN THANH CHƯƠNG"],
  ["00000148", "CHỊ PHAN THỊ KHÁNH HÒA( MẠNH) 🟢 THỊ  TRẤN THANH CHƯƠNG"],
  ["00000149", "NGUYỄN THỊ CHÂU LOAN 🟢 CÔNG TY ĐÀI LOAN"],
  ["00000150", "PHẠM THỊ THU HUYỀN 🟢 CÔNG TY ĐÀI LOAN"],
  ["00000151", "NGUYỄN QUANG TUẤN 🟢 CÔNG TY ĐÀI LOAN"],
  ["00000152", "VĂN THÀNH 🟢 ĐÔ LƯƠNG"],
  ["00000153", "THU QUẢNG 🟢 ĐÔ LƯƠNG"],
  ["00000154", "A HOÀNG 🟢 ĐÔ LƯƠNG"],
  ["00000155", "A TIẾN 🟢 ĐÔ LƯƠNG"],
  ["00000156", "VINH LƯƠNG 🟢 ĐÔ LƯƠNG"],
  ["00000157", "KỲ MAI 🟢 ĐÔ LƯƠNG"],
  ["00000158", "HIỀN HÀ 🟢 ĐÔ LƯƠNG"],
  ["00000159", "LÝ LAI 🟢 ĐÔ LƯƠNG"],
  ["00000160", "HUỲNH NAM 🟢 ĐÔ LƯƠNG"],
  ["00000161", "LAN LĨNH 🟢 ĐÔ LƯƠNG"],
  ["00000162", "HÀ SƠN 🟢 ĐÔ LƯƠNG"],
  ["00000163", "LAN LUONG 🟢 ĐÔ LƯƠNG"],
  ["00000164", "HẢO TUYẾT 🟢 ĐÔ LƯƠNG"],
  ["00000165", "SỸ HOÀ 🟢 ĐÔ LƯƠNG"],
  ["00000166", "LONG LIÊN 🟢 ĐÔ LƯƠNG"],
  ["00000167", "LÝ ĐỒNG 🟢 ĐÔ LƯƠNG"],
  ["00000168", "LOAN HOÀ 🟢 ĐÔ LƯƠNG"],
  ["00000169", "HÀ HẠNH 🟢 ĐÔ LƯƠNG"],
  ["00000170", "ĐÀO THÀNH 🟢 ĐÔ LƯƠNG"],
  ["00000171", "TRINH  🟢 ĐÔ LƯƠNG"],
  ["00000172", "TRƯỜNG LƯƠNG 🟢 ĐÔ LƯƠNG"],
  ["00000173", "VINH THANH 🟢 ĐÔ LƯƠNG"],
  ["00000174", "QUANG TUÝ 🟢 ĐÔ LƯƠNG"],
  ["00000175", "THẮNG HẰNG 🟢 ĐÔ LƯƠNG"],
  ["00000176", "LUYẾN QUÝ 🟢 ĐÔ LƯƠNG"],
  ["00000177", "HƯƠNG CAM 🟢 ĐÔ LƯƠNG"],
  ["00000178", "NGA HOÀNG  🟢 ĐÔ LƯƠNG"],
  ["00000179", "C ĐÔNG 🟢 ĐÔ LƯƠNG"],
  ["00000180", "C HƯƠNG  🟢 ĐÔ LƯƠNG"],
  ["00000181", "ĐÀO CÔNG ĐẠO 🟢 ĐÔ LƯƠNG"],
  ["00000182", "TUYẾT HÙNG 🟢 DIỄN CHÂU"],
  ["00000183", "A THƯ P/Q 🟢 DIỄN CHÂU"],
  ["00000184", "CHƯƠNG HUỆ 🟢 DIỄN CHÂU"],
  ["00000185", "CHÂU HƯƠNG 🟢 DIỄN CHÂU"],
  ["00000186", "DŨNG HÀ 🟢 DIỄN CHÂU"],
  ["00000187", "XUÂN CAI 🟢 DIỄN CHÂU"],
  ["00000188", "VÂN QUÝ 🟢 DIỄN CHÂU"],
  ["00000189", "NĂNG MỢ 🟢 DIỄN CHÂU"],
  ["00000190", "ĐỨC TRANG 🟢 DIỄN CHÂU"],
  ["00000191", "HƯƠNG TRỊ 🟢 DIỄN CHÂU"],
  ["00000192", "HỒNG NHUNG 🟢 DIỄN CHÂU"],
  ["00000193", "AN PHÁT 🟢 DIỄN CHÂU"],
  ["00000194", "THUỶ THINH 🟢 DIỄN CHÂU"],
  ["00000195", "THẮNG HOA 🟢 DIỄN CHÂU"],
  ["00000196", "CHÚ DUYÊN 🟢 DIỄN CHÂU"],
  ["00000197", "C NGUYỆT 🟢 DIỄN CHÂU"],
  ["00000198", "C THƯƠNG 🟢 DIỄN CHÂU"],
  ["00000199", "C NGỌC 🟢 DIỄN CHÂU"],
  ["00000200", "LÝ TOÁN 🟢 DIỄN CHÂU"],
  ["00000201", "LÝ LÂM 🟢 DIỄN CHÂU"],
  ["00000202", "TÁM LIỄU 🟢 DIỄN CHÂU"],
  ["00000203", "CẢNH TRINH 🟢 DIỄN CHÂU"],
  ["00000204", "A THÌN 🟢 DIỄN CHÂU"],
  ["00000205", "A THÀNH 🟢 DIỄN CHÂU"],
  ["00000206", "BÌNH NHẤT 🟢 DIỄN CHÂU"],
  ["00000207", "LỢI THUỶ 🟢 DIỄN CHÂU"],
  ["00000208", "HIẾU NGƯ 🟢 DIỄN CHÂU"],
  ["00000209", "A DƯƠNG 🟢 DIỄN CHÂU"],
  ["00000210", "A HÀM TÂM 🟢 DIỄN CHÂU"],
  ["00000211", "A VŨ 🟢 DIỄN CHÂU"],
  ["00000212", "THẮNG MAI 🟢 DIỄN CHÂU"],
  ["00000213", "QUÂN THUÝ 🟢 DIỄN CHÂU"],
  ["00000214", "A DAO 🟢 DIỄN CHÂU"],
  ["00000215", "A ĐIỀN 🟢 DIỄN CHÂU"],
  ["00000216", "A HẬU 🟢 DIỄN CHÂU"],
  ["00000217", "A VIỆT 🟢 DIỄN CHÂU"],
  ["00000218", "NGUYỄN LOAN 🟢 DIỄN CHÂU"],
  ["00000219", "PHẠM THỊ ĐÀO 🟢 DIỄN CHÂU"],
  ["00000220", "NGUYỄN TIẾN THÀNH 🟢 DIỄN CHÂU"],
  ["00000221", "NĂNG NHIÊN 🟢 DIỄN CHÂU"],
  ["00000222", "A HẢO 🟢 DIỄN CHÂU"],
  ["00000223", "TRANG LAI 🟢 DIỄN CHÂU"],
  ["00000224", "TRƯƠNG THỊ DUNG 🟢 VINH"],
  ["00000225", "TRÂN HUY HOÀNG 🟢 VINH"],
  ["00000226", "NGUYỄN ANH TÀI 🟢 VINH"],
  ["00000227", "NGUYỄN VĂN TÙNG 🟢 VINH"],
  ["00000228", "VŨ TRỌNG SƠN 🟢 VINH"],
  ["00000229", "NGUYỄN VĂN TỰ 🟢 NGHI LỘC"],
  ["00000230", "NGUYỄN VĂN THANH 🟢 NGHI LỘC"],
  ["00000231", "NGUYỄN VĂN HƯƠNG 🟢 NGHI LỘC"],
  ["00000232", "HƯƠNG DIỆU 🟢 NGHI LỘC"],
  ["00000233", "LONG HẬU 🟢 NGHI LỘC"],
  ["00000234", "C DUYÊN 🟢 NGHI LỘC"],
  ["00000235", "ĐẦNG HỢI 🟢 NGHI LỘC"],
  ["00000236", "TOÀN HẠNH 🟢 NGHI LỘC"],
  ["00000237", "HẢI CƯỜNG 🟢 NGHI LỘC"],
  ["00000238", "C GIANG 🟢 NGHI LỘC"],
  ["00000239", "THANH PHƯỢNG 🟢 NGHI LỘC"],
  ["00000240", "THIÊM NHUNG 🟢 NGHI LỘC"],
  ["00000241", "C ĐIỆP 🟢 NGHI LỘC"],
  ["00000242", "GÌ HOA 🟢 NGHI LỘC"],
  ["00000243", "O THIỆN 🟢 NGHI LỘC"],
  ["00000244", "DƯƠNG TRANG 🟢 NGHI LỘC"],
  ["00000245", "XOAN THUYÊN 🟢 NGHI LỘC"],
  ["00000246", "CHÚ LONG 🟢 NGHI LỘC"],
  ["00000247", "TÂN TƯ 🟢 NGHI LỘC"],
  ["00000248", "CHÚ LƯỢNG 🟢 NGHI LỘC"],
  ["00000249", "PHƯƠNG MÃO 🟢 NGHI LỘC"],
  ["00000250", "SƠN SEN 🟢 NGHI LỘC"],
  ["00000251", "BÁC HÙNG 🟢 NGHI LỘC"],
  ["00000252", "NGA KHÁNH 🟢 NGHI LỘC"],
  ["00000253", "BÁC PHÚ 🟢 NGHI LỘC"],
  ["00000254", "A VIỆT 🟢 NGHI LỘC"],
  ["00000255", "THẢO HOÀN 🟢 NGHI LỘC"],
  ["00000256", "THU THUỶ 🟢 NGHI LỘC"],
  ["00000257", "HÀ CƯỜNG 🟢 NGHI LỘC"],
  ["00000258", "GÌ VÂN 🟢 NGHI LỘC"],
  ["00000259", "CẢI HẠNH 🟢 NGHI LỘC"],
  ["00000260", "CHÚ TIẾN 🟢 NGHI LỘC"],
  ["00000261", "ANH THỊNH 🟢 NGHI LỘC"],
  ["00000262", "HƯƠNG TUẾ 🟢 NGHI LỘC"],
  ["00000263", "CHÚ HÀ 🟢 NGHI LỘC"],
  ["00000264", "VIỆT ANH 🟢 NGHI LỘC"],
  ["00000265", "GÌ CHÍNH 🟢 NGHI LỘC"],
  ["00000266", "A TUẤN 🟢 NGHI LỘC"],
  ["00000267", "DUY LÀI 🟢 NGHI LỘC"],
  ["00000268", "CHỊ MAI 🟢 NGHI LỘC"],
  ["00000269", "CHỊ SEN 🟢 NGHI LỘC"],
  ["00000270", "A PHONG 🟢 NGHI LỘC"],
  ["00000271", "CHỊ PHƯƠNG 🟢 NGHI LỘC"],
  ["00000272", "A THỊNH 🟢 NGHI LỘC"],
  ["00000273", "PHẠM SỸ 🟢 NGHI LỘC"],
  ["00000274", "ĐÀM THỊ MƠ 🟢 NGHI LỘC"],
  ["00000275", "NGUYỄN ĐỨC LỘC 🟢 NGHI LỘC"],
  ["00000276", "KHÁNH MAI 🟢 NGHI LỘC"],
  ["00000277", "THUỶ THƯỜNG 🟢 NGHI LỘC"],
  ["00000278", "ANH TÂM 🟢 NGHI LỘC"],
];

const prizes = [
  // { name: "KHUYẾN KHÍCH", count: 21 },
  // { name: "NĂM", count: 15 },
  { name: "BỐN", count: 7 },
  { name: "BA", count: 5 },
  { name: "NHÌ", count: 3 },
  { name: "NHẤT", count: 1 },
  // { name: "ĐẶC BIỆT", count: 1 },
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

function removeWinnerFromData(winnerCode) {
  const index = data.findIndex((item) => item[0] === winnerCode);
  if (index !== -1) {
    data.splice(index, 1);
  }
}

// update
let spinHistory = [];
function saveWinnerToMockAPI(winner) {
  const apiUrl = "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/test"; // URL của API MockAPI

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winner),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Người trúng thưởng đã được lưu vào MockAPI:", data);
    })
    .catch((error) => {
      console.error("Lỗi khi lưu người trúng thưởng vào MockAPI:", error);
    });
}

function saveSpinHistory() {
  const currentSpin = {
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
    timestamp: Math.floor(Date.now() / 1000),
  };

  spinHistory.push(currentSpin);
  saveWinnerToMockAPI(currentSpin);

  console.log(
    `Đã lưu tự động: ${currentSpin.code} - ${currentSpin.name} - ${currentSpin.prize}`
  );
}
// end

function spin() {
  let spinTime = 2800000;
  let interval = 100;
  let totalInterval = 0;
  result.textContent = "";
  winSound.pause();
  winSound.currentTime = 0;

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

      winSound.play();
      reSpinButton.style.display = "block";
      removeWinnerFromData(finalItem[0]);
      // update
      saveSpinHistory();
      // end
    } else {
      boxes.forEach((box) => (box.textContent = getRandomDigit()));
      totalInterval += interval;
      interval *= 1.1;
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
  spin();
});

updatePrizeCounter();
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

  setInterval(nextSlide, 2000);
});
let winners = [];
function removeDuplicates() {
  let seen = new Map();
  let uniqueWinners = [];

  winners.forEach((winner) => {
    let key = `${winner.code}-${winner.prize}`;
    if (!seen.has(key)) {
      seen.set(key, true);
      uniqueWinners.push(winner);
    }
  });

  winners = uniqueWinners;

  showWinnerList();
}

function autoRemoveDuplicates() {
  setTimeout(() => {
    removeDuplicates();
  }, 10);
}

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
  const saveSuccessMessage = document.getElementById("saveSuccessMessage");
  saveSuccessMessage.style.display = "block";
  result.textContent = "";
  setTimeout(() => {
    saveSuccessMessage.style.display = "none";
    autoRemoveDuplicates();
  }, 1000);

  console.log(
    `Đã lưu: ${currentWinner.code} - ${currentWinner.name} - ${currentWinner.prize}`
  );
  showWinnerList();
}

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

document.getElementById("listButton").addEventListener("click", () => {
  showWinnerList();
  const winnerListModal = new bootstrap.Modal(
    document.getElementById("winnerListModal")
  );
  winnerListModal.show();
});

function downloadExcel() {
  const wb = XLSX.utils.book_new();
  const ws_data = [["Mã", "Tên", "Giải thưởng"]];

  winners.forEach((winner) => {
    ws_data.push([winner.code, winner.name, winner.prize]);
  });

  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  XLSX.utils.book_append_sheet(wb, ws, "Danh Sách Trúng Thưởng");

  XLSX.writeFile(wb, "DanhSachTrungThuong.xlsx");
}

document
  .getElementById("downloadButton")
  .addEventListener("click", downloadExcel);

// update
function loadHistoryFromMockAPI() {
  const apiUrl = "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/test";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      spinHistory = data;
      showHistoryList();
    })
    .catch((error) => {
      console.error("Lỗi khi tải lịch sử từ MockAPI:", error);
    });
}

function showHistoryList() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  spinHistory.forEach((spin) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    const spinDate = new Date(spin.timestamp * 1000);

    const formattedDate = spinDate.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    listItem.innerHTML = `${spin.code} - ${spin.name} - Giải ${spin.prize}<br>🕒Thời gian: ${formattedDate}`;
    historyList.appendChild(listItem);
  });
}

document.getElementById("historyButton").addEventListener("click", () => {
  loadHistoryFromMockAPI();
  const historyListModal = new bootstrap.Modal(
    document.getElementById("historyListModal")
  );
  historyListModal.show();
});
// end
