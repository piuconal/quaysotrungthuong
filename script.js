const data = [
  ["00000001", "PHẠM THỊ THU 🟢 NAM HẢI"],
  ["00000002", "VŨ THỊ LƯỢT 🟢 NAM HÀ"],
  ["00000003", "VŨ VĂN ĐỊNH 🟢 NAM  HÀ"],
  ["00000004", "NGUYỄN THỊ THUÝ 🟢 PHƯƠNG CÔNG"],
  ["00000005", "VŨ VĂN LƯỜNG 🟢 BÌNH THANH"],
  ["00000006", "NGUYỄN VĂN HẠNH 🟢 QUANG MINH"],
  ["00000007", "NGUYỄN TIẾN HẢI 🟢 QUANG MINH"],
  ["00000008", "PHẠM VĂN BÀI 🟢 AN NINH"],
  ["00000009", "NGUYỄN THIÊN QUÂN 🟢 NAM CAO"],
  ["00000010", "NGUYỄN DUY GIANG 🟢 VŨ QUÝ"],
  ["00000011", "BÙI VĂN TRƯỜNG 🟢 BÌNH ĐỊNH"],
  ["00000012", "NGUYỄN. T. THANH THUỶ 🟢 ĐÌNH PHÙNG"],
  ["00000013", "LÊ THỊ ĐỊNH 🟢 QUANG BÌNH"],
  ["00000014", "PHẠM VĂN TUYẾN 🟢 NAM HỒNG"],
  ["00000015", "NGUYỄN VĂN CHUYỂN 🟢 NAM TRUNG"],
  ["00000016", "PHẠM THỊ HON 🟢 THƯỢNG HIỀN"],
  ["00000017", "PHẠM QUỐC HÙNG 🟢 NAM HẢI"],
  ["00000018", "PHẠM THỊ HƯƠNG 🟢 THƯỢNG HIỀN"],
  ["00000019", "NGUYỄN THỊ CHÍ 🟢 QUANG BÌNH"],
  ["00000020", "LÊ THỊ QUỲNH 🟢 BÌNH THANH"],
  ["00000021", "NGUYỄN CÔNG HOAN 🟢 BÌNH MINH"],
  ["00000022", "TRẦN THỊ QUÝ 🟢 NAM HẢI"],
  ["00000023", "ĐẶNG THỊ HUỆ 🟢 TÂY GIANG"],
  ["00000024", "BÙI VĂN DIỄN 🟢 NAM HÀ"],
  ["00000025", "HOÀNG THỊ LIÊN 🟢 QUANG TRUNG"],
  ["00000026", "PHẠM CƯỜNG THỊNH 🟢 VŨ LĂNG"],
  ["00000027", "CAO THỊ DUNG 🟢 ĐÔNG CƠ"],
  ["00000028", "PHẠM QUANG PHÚC 🟢 NAM HỒNG"],
  ["00000029", "VŨ VĂN THANH 🟢 NAM HỒNG"],
  ["00000030", "DƯƠNG XUÂN THỂ 🟢 AN BỒI"],
  ["00000031", "BÙI VĂN DƯƠNG 🟢 TIỀN HẢI"],
  ["00000032", "CAO XUÂN HÙNG 🟢 HỒNG TIẾN"],
  ["00000033", "NGUYỄN THỊ THU HOÀI 🟢 MINH QUANG"],
  ["00000034", "NGUYỄN VĂN LUẬN 🟢 MINH QUANG"],
  ["00000035", "NGÔ THỊ TƯƠI 🟢 ĐÔNG LÂM"],
  ["00000036", "CAO THỊ KHUYÊN 🟢 ĐÔNG LÂM"],
  ["00000037", "NGUYỄN NGỌC QUÝ 🟢 BẮC HẢI"],
  ["00000038", "BÙI XUÂN LƯỢNG 🟢 ĐÔNG LA"],
  ["00000039", "ĐỖ CAO DUYỆT 🟢 ĐÔNG LA"],
  ["00000040", "HOÀNG PHÓ ĐỨC 🟢 ĐÔNG HẢI"],
  ["00000041", "TRẦN THỊ YẾN 🟢 ĐÔNG HẢI"],
  ["00000042", "NGUYỄN VĂN BÁU 🟢 ĐÔNG HẢI"],
  ["00000043", "NGUYỄN ĐỨC THÌN 🟢 AN DỤC"],
  ["00000044", "ĐINH ĐĂNG LONG 🟢 AN LỄ"],
  ["00000045", "HOÀNG VĂN NGHIÊM 🟢 ĐÔNG PHƯƠNG"],
  ["00000046", "TRẦN THỊ MAI 🟢 ĐÔNG XÁ"],
  ["00000047", "NHÂM THỊ MAI 🟢 ĐÔNG XÁ"],
  ["00000048", "NGUYỄN VĂN ĐÔNG 🟢 ĐÔNG XÁ"],
  ["00000049", "LẠI THỊ HÀ 🟢 ĐÔNG VINH"],
  ["00000050", "HOÀNG ANH TUẤN 🟢 HÀ GIANG"],
  ["00000051", "PHẠM VĂN INH 🟢 ĐÔNG VINH"],
  ["00000052", "ĐẶNG THỊ LINH 🟢 ĐÔNG Á"],
  ["00000053", "PHẠM NGỌC VĂN 🟢 ĐÔNG CÁC"],
  ["00000054", "PHẠM BÁ VIẾT 🟢 ĐÔNG CÁC"],
  ["00000055", "NGUYỄN THỊ XUẤT 🟢 ĐÔNG HỢP"],
  ["00000056", "PHAN DUY NGUYÊN 🟢 NGUYÊN XÁ"],
  ["00000057", "PHẠM VĂN DUY 🟢 PHONG CHÂU"],
  ["00000058", "TRẦN CÔNG ĐỊNH 🟢 HỢP TIẾN"],
  ["00000059", "TRẦN VĂN CƯƠNG 🟢 MINH TÂN"],
  ["00000060", "NGUYỄN VĂN LỘC 🟢 HỒNG VIỆT "],
  ["00000061", "TRẦN VĂN KHANH 🟢 TÂY ĐÔ"],
  ["00000062", "NGUYỄN THỊ HƯNG 🟢 PHÚ LƯƠNG"],
  ["00000063", "NGUYỄN GIA NHƯƠNG 🟢 LIÊN  GIANG"],
  ["00000064", "NGUYỄN THỊ HÒA 🟢 LIÊN  GIANG"],
  ["00000065", "PHẠM DUY THUẦN 🟢 LIÊN  GIANG"],
  ["00000066", "NGUYỄN VĂN ĐỆ 🟢 ĐÔNG DƯƠNG"],
  ["00000067", "VŨ VIẾT ĐÁC 🟢 ĐÔNG PHƯƠNG"],
  ["00000068", "VŨ VĂN NHU 🟢 PHÚ CHÂU"],
  ["00000069", "TRẦN ĐỨC HIỂN 🟢 PHÚ CHÂU"],
  ["00000070", "PHẠM XUÂN THIỆU 🟢 ĐÔNG XÁ"],
  ["00000071", "ĐỖ VĂN DUYNH 🟢 LIÊN  GIANG"],
  ["00000072", "BÙI VĂN ĐĂNG 🟢 ĐÔNG LA"],
  ["00000073", "LƯỜNG THỊ ƠM 🟢 TRƠ PHÁ "],
  ["00000074", "PHẠM ĐÌNH NHỊ 🟢 ĐÔNG XÁ"],
  ["00000075", "NGUYỄN THỊ BÌNH 🟢 LIÊN  GIANG"],
  ["00000076", "LÊ SỸ TÔ 🟢 ĐÔNG PHƯƠNG"],
  ["00000077", "NGUYỄN TÔ CƯƠNG 🟢 ĐÔNG VINH"],
  ["00000078", "PHẠM VĂN HINH 🟢 PHÚ CHÂU"],
  ["00000079", "NGUYỄN SỸ TỐT 🟢 LIÊN HOA"],
  ["00000080", "TRẦN THỊ OANH 🟢 CHƯƠNG DƯƠNG"],
  ["00000081", "NGUYỄN XUÂN TUÂN 🟢 HỒNG VIỆT"],
  ["00000082", "PHÙNG VĂN PHÚC 🟢 ĐỒNG TIẾN"],
  ["00000083", "NGUYỄN THỊ NGÁT 🟢 QUỲNH HẢI"],
  ["00000084", "TRẦN TIẾN ĐỨC 🟢 HỒNG AN"],
  ["00000085", "ĐINH VĂN KHƯƠNG 🟢 DƯƠNG HỒNG THỦY"],
  ["00000086", "BÙI ĐỨC NAM 🟢 THÁI GIANG"],
  ["00000087", "NGUYỄN VĂN TY 🟢 THỤY THANH"],
  ["00000088", "TẠ NGỌC HÒE 🟢 HÒA AN"],
  ["00000089", "NGUYỄN HỮU CHINH 🟢 AN TÂN"],
  ["00000090", "BÙI VĂN TRÁNH 🟢 THỤY DUYÊN"],
  ["00000091", "HOÀNG THỊ BÂN 🟢 TÂN TIẾN"],
  ["00000092", "BÙI THỊ BÉ 🟢 ĐOAN HÙNG"],
  ["00000093", "TẠ VĂN BỀN 🟢 THỐNG NHẤT"],
  ["00000094", "NGUYỄN VĂN DẪN 🟢 CHÍ HÒA"],
  ["00000095", "TRẦN VĂN ĐẠT 🟢 MINH KHAI"],
  ["00000096", "NGUYỄN VĂN ĐƯỞNG 🟢 VĂN CẨM"],
  ["00000097", "LÊ VĂN HỮU 🟢 ĐỘC LẬP"],
  ["00000098", "BÙI THẾ KIÊN 🟢 CHÍ HÒA"],
  ["00000099", "PHẠM THỊ MẬN 🟢 MINH KHAI"],
  ["00000100", "NGUYỄN PHÚC MAY 🟢 VĂN LANG"],
  ["00000101", "LƯƠNG VĂN MÙA 🟢 KIM TRUNG"],
  ["00000102", "NGUYỄN VĂN NGHĨA 🟢 HÙNG DŨNG"],
  ["00000103", "ĐINH VĂN NINH 🟢 THỐNG NHẤT"],
  ["00000104", "LƯƠNG VĂN PHONG 🟢 KIM TRUNG"],
  ["00000105", "BÙI TẤT THẮNG 🟢 ĐỘC LẬP"],
  ["00000106", "ĐẶNG THỊ THIỆU 🟢 TÂN TIẾN"],
  ["00000107", "ĐOÀN VĂN THUẬN 🟢 HÒA BÌNH"],
  ["00000108", "TRẦN VĂN THỦY 🟢 THỊ TRẤN HƯNG HÀ"],
  ["00000109", "TRẦN ĐỨC TIỄN 🟢 DUYÊN HẢI"],
  ["00000110", "NGUYỄN VĂN TINH 🟢 VĂN LANG"],
  ["00000111", "NGUYỄN VĂN TƠN 🟢 VĂN CẨM"],
  ["00000112", "NGUYỄN NGỌC TRANH 🟢 ĐÔNG HƯNG"],
  ["00000113", "NGUYỄN VĂN TÚ 🟢 HỒNG LĨNH"],
  ["00000114", "LÊ QUÝ TUẤT 🟢 ĐỘC LẬP"],
  ["00000115", "HOÀNG VĂN ÚT 🟢 KIM TRUNG"],
  ["00000116", "PHẠM QUANG HOẠT 🟢 QUỲNH HOÀNG"],
  ["00000117", "PHẠM ĐỨC MẬM 🟢 AN ẤP"],
  ["00000118", "PHẠM VĂN PHƯỜNG 🟢 QUỲNH HOÀNG"],
  ["00000119", "ĐOÀN THỊ LUYẾN  🟢 QUỲNH HOA"],
  ["00000120", "NGUYỄN VĂN NGHỊ 🟢 QUỲNH THỌ"],
  ["00000121", "NGUYỄN VĂN LỊNH 🟢 QUỲNH HỒNG"],
  ["00000122", "NGUYỄN VĂN TOẠI 🟢 AN ẤP"],
  ["00000123", "PHẠM VĂN XUẤT 🟢 AN ẤP"],
  ["00000124", "ĐÀO VĂN HỴ 🟢 QUỲNH THỌ"],
  ["00000125", "TRẦN VĂN HIỆN 🟢 QUỲNH HỒNG"],
  ["00000126", "PHẠM VĂN LỊNH 🟢 QUỲNH HỒNG"],
  ["00000127", "NGUYỄN PHI SÓC 🟢 QUỲNH HOA"],
  ["00000128", "BÙI VĂN NGỮ 🟢 CHÂU SƠN"],
  ["00000129", "VŨ THỊ HƯỜNG 🟢 QUỲNH THỌ"],
  ["00000130", "LÊ VĂN BỪNG 🟢 CHÂU SƠN"],
  ["00000131", "NGÔ VĂN DIẾN 🟢 QUỲNH NGUYÊN"],
  ["00000132", "ĐỖ THỊ ĐƯỢM 🟢 QUỲNH BẢO"],
  ["00000133", "TRẦN VIẾT HƯNG 🟢 QUỲNH HƯNG"],
  ["00000134", "ĐOÀN QUANG SƠN 🟢 QUỲNH HƯNG"],
  ["00000135", "BÙI MẠNH HÀ 🟢 QUỲNH KHÊ"],
  ["00000136", "NGUYỄN VĂN THỊNH 🟢 QUỲNH MỸ"],
  ["00000137", "NGUYỄN VĂN NHẦN 🟢 QUỲNH HỘI"],
  ["00000138", "NGUYỄN TIẾN THÀNH 🟢 QUỲNH HỘI"],
  ["00000139", "TRỊNH CÔNG TRÌNH 🟢 AN VINH"],
  ["00000140", "PHẠM XUÂN TRÀ 🟢 AN NINH"],
  ["00000141", "NGUYỄN VĂN LONG 🟢 AN NINH"],
  ["00000142", "PHẠM VĂN TÍNH 🟢 AN ĐỒNG"],
  ["00000143", "LÊ TRỌNG CÀN 🟢 AN KHÊ"],
  ["00000144", "NGÔ THỊ TƯƠI 🟢 AN KHÊ"],
  ["00000145", "PHAN THỊ PHƯỢNG 🟢 AN KHÊ"],
  ["00000146", "PHẠM CÔNG CHINH 🟢 AN HIỆP"],
  ["00000147", "NGUYỄN VĂN DƯỠNG 🟢 AN THÁI"],
  ["00000148", "NGUYỄN DUY LỰC 🟢 AN THÁI"],
  ["00000149", "PHẠM CÔNG BẨY 🟢 AN VINH"],
  ["00000150", "NGUYỄN VĂN NĂM 🟢 AN NINH"],
  ["00000151", "TRẦN VĂN CHUÔNG 🟢 QUỲNH NGUYÊN"],
  ["00000152", "NGUYỄN VĂN TAM 🟢 AN NINH"],
  ["00000153", "ĐỖ THỊ MẾN 🟢 AN KHÊ"],
  ["00000154", "NGUYỄN ĐỨC DŨNG 🟢 AN HIỆP"],
  ["00000155", "NGUYỄN BÁ HIẾU 🟢 QUỲNH TRANG"],
  ["00000156", "DƯƠNG CÔNG ĐỘNG 🟢 QUỲNH TRANG"],
  ["00000157", "NGUYỄN THẾ DOAN 🟢 HỒNG AN"],
  ["00000158", "ĐẶNG THỊ LAN  🟢 TT HƯNG NHÂN"],
  ["00000159", "VŨ THỊ HẠNH 🟢 LIÊN HIỆP"],
  ["00000160", "LƯU THỊ ÚT 🟢 KIM TRUNG"],
  ["00000161", "LÊ VĂN ĐƯỜNG 🟢 HỒNG AN"],
  ["00000162", "NGUYỄN THỊ THẢO 🟢 TIẾN ĐỨC"],
  ["00000163", "NGUYỄN VĂN TUẤN 🟢 MINH TÂN"],
  ["00000164", "KHÚC VĂN CHUNG 🟢 CỘNG HÒA"],
  ["00000165", "VŨ QUANG SÓNG 🟢 TIẾN ĐỨC"],
  ["00000166", "TRẦN THỊ NGOÃN 🟢 TÂN LỄ"],
  ["00000167", "MAI THỊ SANG 🟢 THÁI PHƯƠNG"],
  ["00000168", "NGUYỄN THỊ THANH THẢO 🟢 TÂN HÒA"],
  ["00000169", "TRẦN THỊ DOAN 🟢 TÂN LỄ"],
  ["00000170", "TRẦN THỊ THÚY MIỀU 🟢 PHÚC KHÁNH"],
  ["00000171", "NGUYỄN VĂN HÙNG 🟢 LIÊN HIỆP"],
  ["00000172", "TRẦN THỊ THỦY 🟢 PHÚC KHÁNH"],
  ["00000173", "NGUYỄN THỊ VINH 🟢 HÒA TIẾN"],
  ["00000174", "NGUYỄN THỊ THOAN 🟢 TIẾN ĐỨC"],
  ["00000175", "VŨ THỊ NGA 🟢 TIẾN ĐỨC"],
  ["00000176", "NGUYỄN THỊ THE 🟢 VŨ AN"],
  ["00000177", "VŨ THỊ NGÁT 🟢 VŨ LỄ"],
  ["00000178", "VŨ VĂN CHƯƠNG 🟢 VŨ LỄ"],
  ["00000179", "TRẦN TRỌNG NGÃI 🟢 THANH TÂN"],
  ["00000180", "TRẦN THỊ PHƯƠNG 🟢 THANH TÂN"],
  ["00000181", "TRẦN ĐÌNH THẠC 🟢 BÌNH NUYÊN"],
  ["00000182", "ĐỖ NGỌC TOÀN 🟢 QUỐC TUẤN"],
  ["00000183", "PHẠM THỊ QUÝ (NHÌ) 🟢 QUỐC TUẤN"],
  ["00000184", "VŨ THỊ THÚY (THANH) 🟢 QUỐC TUẤN"],
  ["00000185", "TÔ HẢI ĐƯỜNG (TÀI) 🟢 VŨ THẮNG"],
  ["00000186", "LÊ VĂN THANH 🟢 VŨ THẮNG"],
  ["00000187", "NGUYỄN HOÀI AN 🟢 VŨ CÔNG"],
  ["00000188", "HOÀNG XUÂN LỘC 🟢 VŨ LỄ"],
  ["00000189", "VŨ THỊ MIỀN 🟢 VŨ HÒA"],
  ["00000190", "PHẠM NGỌC QUỲNH 🟢 VŨ LỄ"],
  ["00000191", "TRỊNH XUÂN HÀ 🟢 TRÀ GIANG"],
  ["00000192", "PHẠM THỊ AN 🟢 TÂN PHONG"],
  ["00000193", "BÙI VĂN PHÁN 🟢 TÂN PHONG"],
  ["00000194", "PHẠM KHẮC BỈNH 🟢 HIỆP HÒA"],
  ["00000195", "LÊ TRUNG THÀNH 🟢 XUÂN HÒA"],
  ["00000196", "NGUYỄN THỊ HẢO 🟢 XUÂN HÒA"],
  ["00000197", "BÙI THỊ HƯƠNG 🟢 HỒNG LÝ"],
  ["00000198", "BÙI CÔNG BÌNH 🟢 HỒNG LÝ"],
  ["00000199", "LÊ THỊ SEN 🟢 HỒNG LÝ"],
  ["00000200", "ĐOÀN VĂN HÀO 🟢 MINH QUANG"],
  ["00000201", "NGUYỄN DUY HOÀN 🟢 BÁCH THUẬN"],
  ["00000202", "TRẦN THỊ NGẦN 🟢 BÁCH THUẬN"],
  ["00000203", "HOÀNG XUÂN NGẢI 🟢 SONG LÃNG"],
  ["00000204", "VŨ ĐÌNH SANH 🟢 TAM QUANG"],
  ["00000205", "NGUYỄN TRỌNG QUÝ (HÀ) 🟢 SONG LÃNG"],
  ["00000206", "VŨ ĐÌNH KHỎA 🟢 TỰ TÂN"],
  ["00000207", "LẠI VĂN BƠN 🟢 TỰ TÂN"],
  ["00000208", "LẠI THỊ HUẾ  🟢 HÒA BÌNH"],
  ["00000209", "TRẦN THỊ VĂN ( ĐOÀN) 🟢 HỒNG PHONG"],
  ["00000210", "LƯU XUÂN THỦY 🟢 HỒNG PHONG"],
  ["00000211", "PHẠM THỊ VUI 🟢 DUY NHẤT"],
  ["00000212", "TRẦN THỊ VÂN 🟢 QUANG TRUNG"],
  ["00000213", "VŨ VĂN MIỆN 🟢 TRUNG AN"],
  ["00000214", "NGUYỄN XUÂN RẦN 🟢 XUÂN HÒA"],
  ["00000215", "NGÔ ĐÌNH THUẤN 🟢 TÂN HÒA"],
  ["00000216", "PHẠM VĂN ƯNG 🟢 TÂN HÒA"],
  ["00000217", "NGUYỄN THỊ THÚY 🟢 TÂN PHONG"],
  ["00000218", "DƯƠNG NGỌC THANH 🟢 ĐÔNG HÒA"],
  ["00000219", "HÀ THỊ HẠNH 🟢 VŨ ĐOÀI"],
  ["00000220", "HÀ VĂN LỰ 🟢 TÂN HÒA"],
  ["00000221", "PHẠM VĂN VĨNH 🟢 VŨ VÂN"],
  ["00000222", "NGUYỄN NGỌC ĐẨU 🟢 VŨ ĐOÀI"],
  ["00000223", "VŨ VĂN THEN 🟢 VŨ ĐOÀI"],
  ["00000224", "HOÀNG NGỌC CA 🟢 TRUNG AN"],
  ["00000225", "PHẠM XUÂN THỦY 🟢 VIỆT THUẬN"],
  ["00000226", "NGUYỄN TRUNG THỈNH 🟢 VŨ HỘI"],
  ["00000227", "NGUYỄN VĂN NGỌC 🟢 VŨ HỘI"],
  ["00000228", "TRỊNH VĂN DƯƠNG 🟢 VŨ PHÚC"],
  ["00000229", "TRẦN CÔNG HÙNG 🟢 TRẦN LÃM"],
  ["00000230", "ĐỖ QUANG VINH 🟢 XUÂN HÒA"],
  ["00000231", "NGUYỄN HỮU THẮNG 🟢 TRẦN LÃM"],
  ["00000232", "NGUYỄN XUÂN NAM 🟢 VŨ CHÍNH"],
  ["00000233", "BÙI ĐÌNH MINH 🟢 TRẦN LÃM"],
  ["00000234", "NGUYỄN THỊ THU PHƯƠNG 🟢 DUY NHẤT"],
  ["00000235", "NGUYỄN THỊ CHÍN 🟢 DUY NHẤT"],
  ["00000236", "PHẠM QUANG HUY 🟢 TRẦN LÃM"],
  ["00000237", "NGUYỄN VĂN DUY 🟢 TRẦN LÃM"],
  ["00000238", "ĐÀO XUÂN TUYẾN 🟢 TRẦN LÃM"],
  ["00000239", "ĐÀM VĂN SỰ 🟢 THÁI NGUYÊN"],
  ["00000240", "HÀ ĐỨC Y 🟢 THÁI THỌ"],
  ["00000241", "PHẠM NGỌC QUANG 🟢 THÁI HỒNG"],
  ["00000242", "NGUYỄN VĂN YÊM 🟢 THÁI THỌ"],
  ["00000243", "ĐỖ VĂN KHUẾ 🟢 THÁI THỊNH"],
  ["00000244", "HÀ VĂN DƯƠNG 🟢 THÁI HÀ"],
  ["00000245", "HÀ THỊ BÌNH 🟢 THÁI HỌC"],
  ["00000246", "LÊ THỊ TRÚC 🟢 THÁI HỌC"],
  ["00000247", "ĐINH VĂN HANH 🟢 THÁI THỊNH"],
  ["00000248", "LƯU TIẾN LỰC 🟢 THÁI ĐÔ"],
  ["00000249", "HOÀNG VĂN DŨNG 🟢 THÁI PHÚC"],
  ["00000250", "NGUYỄN THÁI BÌNH 🟢 THÁI  DƯƠNG"],
  ["00000251", "PHẠM NGỌC TRỌNG 🟢 THÁI AN"],
  ["00000252", "VŨ MINH TÂN 🟢 ĐÔNG KINH"],
  ["00000253", "BÙI CAO GIANG 🟢 HÀ GIANG"],
  ["00000254", "PHẠM VĂN ĐÔNG 🟢 THÁI GIANG"],
  ["00000255", "PHÍ VĂN THAO 🟢 ĐÔNG Á"],
  ["00000256", "TÔ ĐÌNH CHUNG 🟢 ĐÔNG HOÀNG"],
  ["00000257", "LẠI HỮU LIỆU 🟢 ĐÔNG VINH"],
  ["00000258", "PHAN VĂN TRIỆU 🟢 THỤY QUỲNH"],
  ["00000259", "NGUYỄN VĂN ĐÔNG 🟢 THỤY NINH"],
  ["00000260", "PHẠM VĂN DIỄN 🟢 THỤY PHONG"],
  ["00000261", "VŨ THỊ SON 🟢 THỤY PHONG"],
  ["00000262", "PHAN VŨ LÊNH 🟢 THỤY VIỆT"],
  ["00000263", "NGUYỄN THỊ LIỄU 🟢 THỤY CHÍNH"],
  ["00000264", "TRẦN THỊ XIM 🟢 THỤY QUỲNH"],
  ["00000265", "NGUYỄN VĂN HỮU 🟢 THỤY HƯNG"],
  ["00000266", "PHAN VĂN LIÊNG 🟢 THỤY THANH"],
  ["00000267", "PHẠM VĂN NINH 🟢 THỤY PHONG"],
  ["00000268", "LÊ SỸ QUÂN 🟢 THỤY VĂN"],
  ["00000269", "ĐINH VĂN QUYỆN 🟢 THỤY DÂN"],
  ["00000270", "NGUYỄN THỊ TRANG 🟢 THỤY DÂN"],
  ["00000271", "NGUYỄN THỊ HẰNG 🟢 THỤY DÂN"],
  ["00000272", "VŨ THỊ CHÈ 🟢 THỤY NINH"],
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

// function showHistoryList() {
//   const historyList = document.getElementById("historyList");
//   historyList.innerHTML = "";

//   spinHistory.forEach((spin) => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("list-group-item");

//     const spinDate = new Date(spin.timestamp * 1000);

//     const formattedDate = spinDate.toLocaleString("vi-VN", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });

//     listItem.innerHTML = `${spin.code} - ${spin.name} - Giải ${spin.prize}<br>🕒Thời gian: ${formattedDate}`;
//     historyList.appendChild(listItem);
//   });
// }

function showHistoryList() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  const reversedHistory = [...spinHistory].reverse();

  reversedHistory.forEach((spin) => {
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
