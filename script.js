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
  ["00000019", "TẠ NAM HUÂN 🟢 HỒNG THÁI"],
  ["00000020", "LÊ VĂN VIỆN 🟢 LÊ LỢI"],
  ["00000021", "NGUYỄN THỊ CHÍ 🟢 QUANG BÌNH"],
  ["00000022", "LÊ THỊ QUỲNH 🟢 BÌNH THANH"],
  ["00000023", "NGUYỄN CÔNG HOAN 🟢 BÌNH MINH"],
  ["00000024", "TRẦN THỊ QUÝ 🟢 NAM HẢI"],
  ["00000025", "ĐẶNG THỊ HUỆ 🟢 TÂY GIANG"],
  ["00000026", "BÙI VĂN DIỄN 🟢 NAM HÀ"],
  ["00000027", "HOÀNG THỊ LIÊN 🟢 QUANG TRUNG"],
  ["00000028", "PHẠM CƯỜNG THỊNH 🟢 VŨ LĂNG"],
  ["00000029", "CAO THỊ DUNG 🟢 ĐÔNG CƠ"],
  ["00000030", "PHẠM QUANG PHÚC 🟢 NAM HỒNG"],
  ["00000031", "VŨ VĂN THANH 🟢 NAM HỒNG"],
  ["00000032", "DƯƠNG XUÂN THỂ 🟢 AN BỒI"],
  ["00000033", "BÙI VĂN DƯƠNG 🟢 TIỀN HẢI"],
  ["00000034", "CAO XUÂN HÙNG 🟢 HỒNG TIẾN"],
  ["00000035", "TRẦN THỊ TỊNH 🟢 MINH QUANG"],
  ["00000036", "NGUYỄN THỊ THU HOÀI 🟢 MINH QUANG"],
  ["00000037", "NGUYỄN VĂN LUẬN 🟢 MINH QUANG"],
  ["00000038", "NGÔ THỊ TƯƠI 🟢 ĐÔNG LÂM"],
  ["00000039", "CAO THỊ KHUYÊN 🟢 ĐÔNG LÂM"],
  ["00000040", "NGUYỄN NGỌC QUÝ 🟢 BẮC HẢI"],
  ["00000041", "BÙI GIA THĂNG 🟢 TIỀN HẢI"],
  ["00000042", "ĐẶNG THỊ DẦN 🟢 LÊ LỢI "],
  ["00000043", "PHAM VĂN THÍCH 🟢 THANH NÊ"],
  ["00000044", "BÙI XUÂN LƯỢNG 🟢 ĐÔNG LA"],
  ["00000045", "ĐỖ CAO DUYỆT 🟢 ĐÔNG LA"],
  ["00000046", "HOÀNG PHÓ ĐỨC 🟢 ĐÔNG HẢI"],
  ["00000047", "TRẦN THỊ YẾN 🟢 ĐÔNG HẢI"],
  ["00000048", "NGUYỄN VĂN BÁU 🟢 ĐÔNG HẢI"],
  ["00000049", "NGUYỄN ĐỨC THÌN 🟢 AN DỤC"],
  ["00000050", "ĐINH ĐĂNG LONG 🟢 AN LỄ"],
  ["00000051", "HOÀNG VĂN NGHIÊM 🟢 ĐÔNG PHƯƠNG"],
  ["00000052", "TRẦN THỊ MAI 🟢 ĐÔNG XÁ"],
  ["00000053", "NHÂM THỊ MAI 🟢 ĐÔNG XÁ"],
  ["00000054", "NGUYỄN VĂN ĐÔNG 🟢 ĐÔNG XÁ"],
  ["00000055", "LẠI THỊ HÀ 🟢 ĐÔNG VINH"],
  ["00000056", "HOÀNG ANH TUẤN 🟢 HÀ GIANG"],
  ["00000057", "PHẠM VĂN INH 🟢 ĐÔNG VINH"],
  ["00000058", "ĐẶNG THỊ LINH 🟢 ĐÔNG Á"],
  ["00000059", "PHẠM NGỌC VĂN 🟢 ĐÔNG CÁC"],
  ["00000060", "PHẠM BÁ VIẾT 🟢 ĐÔNG CÁC"],
  ["00000061", "NGUYỄN THỊ XUẤT 🟢 ĐÔNG HỢP"],
  ["00000062", "PHAN DUY NGUYÊN 🟢 NGUYÊN XÁ"],
  ["00000063", "PHẠM VĂN DUY 🟢 PHONG CHÂU"],
  ["00000064", "TRẦN CÔNG ĐỊNH 🟢 HỢP TIẾN"],
  ["00000065", "TRẦN VĂN CƯƠNG 🟢 MINH TÂN"],
  ["00000066", "NGUYỄN VĂN LỘC 🟢 HỒNG VIỆT "],
  ["00000067", "TRẦN VĂN KHANH 🟢 TÂY ĐÔ"],
  ["00000068", "NGUYỄN THỊ HƯNG 🟢 PHÚ LƯƠNG"],
  ["00000069", "NGUYỄN GIA NHƯƠNG 🟢 LIÊN  GIANG"],
  ["00000070", "NGUYỄN THỊ HÒA 🟢 LIÊN  GIANG"],
  ["00000071", "PHẠM DUY THUẦN 🟢 LIÊN  GIANG"],
  ["00000072", "NGUYỄN VĂN ĐỆ 🟢 ĐÔNG DƯƠNG"],
  ["00000073", "VŨ VIẾT ĐÁC 🟢 ĐÔNG PHƯƠNG"],
  ["00000074", "VŨ VĂN NHU 🟢 PHÚ CHÂU"],
  ["00000075", "TRẦN ĐỨC HIỂN 🟢 PHÚ CHÂU"],
  ["00000076", "PHẠM XUÂN THIỆU 🟢 ĐÔNG XÁ"],
  ["00000077", "ĐỖ VĂN DUYNH 🟢 LIÊN  GIANG"],
  ["00000078", "BÙI VĂN ĐĂNG 🟢 ĐÔNG LA"],
  ["00000079", "LƯỜNG THỊ ƠM 🟢 TRƠ PHÁ "],
  ["00000080", "PHẠM ĐÌNH NHỊ 🟢 ĐÔNG XÁ"],
  ["00000081", "NGUYỄN THỊ BÌNH 🟢 LIÊN  GIANG"],
  ["00000082", "TRẦN CÔNG CƯỜNG 🟢 TT ĐÔNG HƯNG"],
  ["00000083", "HOÀNG NGỌC THUẦN 🟢 ĐÔNG LA"],
  ["00000084", "BÙI VĂN QUYỀN 🟢 ĐÔNG LA"],
  ["00000085", "BÙI VĂN THIỆN 🟢 THỊ TRẤN ĐÔNG HƯNG"],
  ["00000086", "LÊ SỸ TÔ 🟢 ĐÔNG PHƯƠNG"],
  ["00000087", "NGUYỄN TÔ CƯƠNG 🟢 ĐÔNG VINH"],
  ["00000088", "PHẠM VĂN HINH 🟢 PHÚ CHÂU"],
  ["00000089", "NGUYỄN SỸ TỐT 🟢 LIÊN HOA"],
  ["00000090", "TRẦN THỊ OANH 🟢 CHƯƠNG DƯƠNG"],
  ["00000091", "NGUYỄN XUÂN TUÂN 🟢 HỒNG VIỆT"],
  ["00000092", "PHÙNG VĂN PHÚC 🟢 ĐỒNG TIẾN"],
  ["00000093", "NGUYỄN THỊ NGÁT 🟢 QUỲNH HẢI"],
  ["00000094", "TRẦN TIẾN ĐỨC 🟢 HỒNG AN"],
  ["00000095", "ĐINH VĂN KHƯƠNG 🟢 DƯƠNG HỒNG THỦY"],
  ["00000096", "BÙI ĐỨC NAM 🟢 THÁI GIANG"],
  ["00000097", "NGUYỄN VĂN TY 🟢 THỤY THANH"],
  ["00000098", "TẠ NGỌC HÒE 🟢 HÒA AN"],
  ["00000099", "NGUYỄN HỮU CHINH 🟢 AN TÂN"],
  ["00000100", "BÙI VĂN TRÁNH 🟢 THỤY DUYÊN"],
  ["00000101", "HOÀNG THỊ BÂN 🟢 TÂN TIẾN"],
  ["00000102", "BÙI THỊ BÉ 🟢 ĐOAN HÙNG"],
  ["00000103", "TẠ VĂN BỀN 🟢 THỐNG NHẤT"],
  ["00000104", "NGUYỄN VĂN DẪN 🟢 CHÍ HÒA"],
  ["00000105", "TRẦN VĂN ĐẠT 🟢 MINH KHAI"],
  ["00000106", "NGUYỄN VĂN ĐƯỞNG 🟢 VĂN CẨM"],
  ["00000107", "LÊ VĂN HỮU 🟢 ĐỘC LẬP"],
  ["00000108", "BÙI THẾ KIÊN 🟢 CHÍ HÒA"],
  ["00000109", "PHẠM THỊ MẬN 🟢 MINH KHAI"],
  ["00000110", "NGUYỄN PHÚC MAY 🟢 VĂN LANG"],
  ["00000111", "LƯƠNG VĂN MÙA 🟢 KIM TRUNG"],
  ["00000112", "NGUYỄN VĂN NGHĨA 🟢 HÙNG DŨNG"],
  ["00000113", "ĐINH VĂN NINH 🟢 THỐNG NHẤT"],
  ["00000114", "LƯƠNG VĂN PHONG 🟢 KIM TRUNG"],
  ["00000115", "BÙI TẤT THẮNG 🟢 ĐỘC LẬP"],
  ["00000116", "ĐẶNG THỊ THIỆU 🟢 TÂN TIẾN"],
  ["00000117", "ĐOÀN VĂN THUẬN 🟢 HÒA BÌNH"],
  ["00000118", "TRẦN VĂN THỦY 🟢 THỊ TRẤN HƯNG HÀ"],
  ["00000119", "TRẦN ĐỨC TIỄN 🟢 DUYÊN HẢI"],
  ["00000120", "NGUYỄN VĂN TINH 🟢 VĂN LANG"],
  ["00000121", "NGUYỄN VĂN TƠN 🟢 VĂN CẨM"],
  ["00000122", "NGUYỄN NGỌC TRANH 🟢 ĐÔNG HƯNG"],
  ["00000123", "NGUYỄN VĂN TÚ 🟢 HỒNG LĨNH"],
  ["00000124", "LÊ QUÝ TUẤT 🟢 ĐỘC LẬP"],
  ["00000125", "HOÀNG VĂN ÚT 🟢 KIM TRUNG"],
  ["00000126", "HÀ VĂN HÀI 🟢 THỊ TRẤN HƯNG HÀ"],
  ["00000127", "HÀ MINH HUYỀN 🟢 THỊ TRẤN HƯNG HÀ"],
  ["00000128", "PHẠM QUANG HOẠT 🟢 QUỲNH HOÀNG"],
  ["00000129", "NGUYỄN THỊ ĐANG 🟢 QUỲNH THỌ"],
  ["00000130", "PHẠM ĐỨC MẬM 🟢 AN ẤP"],
  ["00000131", "PHẠM VĂN PHƯỜNG 🟢 QUỲNH HOÀNG"],
  ["00000132", "ĐOÀN THỊ LUYẾN  🟢 QUỲNH HOA"],
  ["00000133", "NGUYỄN VĂN NGHỊ 🟢 QUỲNH THỌ"],
  ["00000134", "NGUYỄN VĂN LỊNH 🟢 QUỲNH HỒNG"],
  ["00000135", "NGUYỄN VĂN TOẠI 🟢 AN ẤP"],
  ["00000136", "PHẠM VĂN XUẤT 🟢 AN ẤP"],
  ["00000137", "ĐÀO VĂN HỴ 🟢 QUỲNH THỌ"],
  ["00000138", "TRẦN VĂN HIỆN 🟢 QUỲNH HỒNG"],
  ["00000139", "PHẠM VĂN LỊNH 🟢 QUỲNH HỒNG"],
  ["00000140", "NGUYỄN PHI SÓC 🟢 QUỲNH HOA"],
  ["00000141", "BÙI VĂN NGỮ 🟢 CHÂU SƠN"],
  ["00000142", "VŨ THỊ HƯỜNG 🟢 QUỲNH THỌ"],
  ["00000143", "LÂM THỊ QUYÊN (ĐOÀN HỒNG HẢI) 🟢 QUỲNH HỒNG"],
  ["00000144", "LÊ VĂN BỪNG 🟢 CHÂU SƠN"],
  ["00000145", "NGÔ VĂN DIẾN 🟢 QUỲNH NGUYÊN"],
  ["00000146", "ĐỖ THỊ ĐƯỢM 🟢 QUỲNH BẢO"],
  ["00000147", "TRẦN VIẾT HƯNG 🟢 QUỲNH HƯNG"],
  ["00000148", "ĐOÀN QUANG SƠN 🟢 QUỲNH HƯNG"],
  ["00000149", "BÙI MẠNH HÀ 🟢 QUỲNH KHÊ"],
  ["00000150", "NGUYỄN VĂN THỊNH 🟢 QUỲNH MỸ"],
  ["00000151", "NGUYỄN VĂN NHẦN 🟢 QUỲNH HỘI"],
  ["00000152", "NGUYỄN TIẾN THÀNH 🟢 QUỲNH HỘI"],
  ["00000153", "TRỊNH CÔNG TRÌNH 🟢 AN VINH"],
  ["00000154", "PHẠM XUÂN TRÀ 🟢 AN NINH"],
  ["00000155", "NGUYỄN VĂN LONG 🟢 AN NINH"],
  ["00000156", "PHẠM VĂN TÍNH 🟢 AN ĐỒNG"],
  ["00000157", "LÊ TRỌNG CÀN 🟢 AN KHÊ"],
  ["00000158", "NGÔ THỊ TƯƠI 🟢 AN KHÊ"],
  ["00000159", "PHAN THỊ PHƯỢNG 🟢 AN KHÊ"],
  ["00000160", "PHẠM CÔNG CHINH 🟢 AN HIỆP"],
  ["00000161", "NGUYỄN VĂN DƯỠNG 🟢 AN THÁI"],
  ["00000162", "NGUYỄN DUY LỰC 🟢 AN THÁI"],
  ["00000163", "PHẠM CÔNG BẨY 🟢 AN VINH"],
  ["00000164", "NGUYỄN VĂN NĂM 🟢 AN NINH"],
  ["00000165", "TRẦN VĂN CHUÔNG 🟢 QUỲNH NGUYÊN"],
  ["00000166", "NGUYỄN VĂN TAM 🟢 AN NINH"],
  ["00000167", "ĐỖ THỊ MẾN 🟢 AN KHÊ"],
  ["00000168", "NGUYỄN ĐỨC DŨNG 🟢 AN HIỆP"],
  ["00000169", "MAI THẾ NGOAN 🟢 ĐÔNG SƠN"],
  ["00000170", "MAI THANH TOÀN 🟢 ĐÔNG SƠN"],
  ["00000171", "NGUYỄN THẾ DOAN 🟢 HỒNG AN"],
  ["00000172", "ĐẶNG THỊ LAN  🟢 TT HƯNG NHÂN"],
  ["00000173", "VŨ THỊ HẠNH 🟢 LIÊN HIỆP"],
  ["00000174", "LƯU THỊ ÚT 🟢 KIM TRUNG"],
  ["00000175", "LÊ VĂN ĐƯỜNG 🟢 HỒNG AN"],
  ["00000176", "NGUYỄN THỊ THẢO 🟢 TIẾN ĐỨC"],
  ["00000177", "NGUYỄN VĂN TUẤN 🟢 MINH TÂN"],
  ["00000178", "KHÚC VĂN CHUNG 🟢 CỘNG HÒA"],
  ["00000179", "TRẦN THỊ THÚY (MINH) 🟢  TT HƯNG NHÂN"],
  ["00000180", "VŨ QUANG SÓNG 🟢 TIẾN ĐỨC"],
  ["00000181", "TRẦN THỊ NGOÃN 🟢 TÂN LỄ"],
  ["00000182", "MAI THỊ SANG 🟢 THÁI PHƯƠNG"],
  ["00000183", "NGUYỄN THỊ THANH THẢO 🟢 TÂN HÒA"],
  ["00000184", "TRẦN THỊ DOAN 🟢 TÂN LỄ"],
  ["00000185", "TRẦN THỊ THÚY MIỀU 🟢 PHÚC KHÁNH"],
  ["00000186", "NGUYỄN VĂN HÙNG 🟢 LIÊN HIỆP"],
  ["00000187", "TRẦN THỊ THỦY 🟢 PHÚC KHÁNH"],
  ["00000188", "NGUYỄN THỊ VINH 🟢 HÒA TIẾN"],
  ["00000189", "NGUYỄN THỊ THOAN 🟢 TIẾN ĐỨC"],
  ["00000190", "VŨ THỊ NGA 🟢 TIẾN ĐỨC"],
  ["00000191", "NGUYỄN THỊ LIÊN 🟢 TÂN HÒA"],
  ["00000192", "TRẦN VĂN TRIỆU 🟢  TIẾN ĐỨC"],
  ["00000193", "NGUYỄN THỊ HẢI  🟢 ĐỒNG TU"],
  ["00000194", "NGUYỄN THỊ THE 🟢 VŨ AN"],
  ["00000195", "VŨ THỊ NGÁT 🟢 VŨ LỄ"],
  ["00000196", "VŨ VĂN CHƯƠNG 🟢 VŨ LỄ"],
  ["00000197", "TRẦN TRỌNG NGÃI 🟢 THANH TÂN"],
  ["00000198", "TRẦN THỊ PHƯƠNG 🟢 THANH TÂN"],
  ["00000199", "TRẦN ĐÌNH THẠC 🟢 BÌNH NUYÊN"],
  ["00000200", "ĐỖ NGỌC TOÀN 🟢 QUỐC TUẤN"],
  ["00000201", "PHẠM THỊ QUÝ (NHÌ) 🟢 QUỐC TUẤN"],
  ["00000202", "VŨ THỊ THÚY (THANH) 🟢 QUỐC TUẤN"],
  ["00000203", "TÔ HẢI ĐƯỜNG (TÀI) 🟢 VŨ THẮNG"],
  ["00000204", "LÊ VĂN THANH 🟢 VŨ THẮNG"],
  ["00000205", "NGUYỄN HOÀI AN 🟢 VŨ CÔNG"],
  ["00000206", "HOÀNG XUÂN LỘC 🟢 VŨ LỄ"],
  ["00000207", "VŨ THỊ MIỀN 🟢 VŨ HÒA"],
  ["00000208", "PHẠM NGỌC QUỲNH 🟢 VŨ LỄ"],
  ["00000209", "TRỊNH XUÂN HÀ 🟢 TRÀ GIANG"],
  ["00000210", "PHẠM THỊ AN 🟢 TÂN PHONG"],
  ["00000211", "BÙI VĂN PHÁN 🟢 TÂN PHONG"],
  ["00000212", "PHẠM KHẮC BỈNH 🟢 HIỆP HÒA"],
  ["00000213", "LÊ TRUNG THÀNH 🟢 XUÂN HÒA"],
  ["00000214", "NGUYỄN THỊ HẢO 🟢 XUÂN HÒA"],
  ["00000215", "BÙI THỊ HƯƠNG 🟢 HỒNG LÝ"],
  ["00000216", "BÙI CÔNG BÌNH 🟢 HỒNG LÝ"],
  ["00000217", "LÊ THỊ SEN 🟢 HỒNG LÝ"],
  ["00000218", "ĐOÀN VĂN HÀO 🟢 MINH QUANG"],
  ["00000219", "NGUYỄN DUY HOÀN 🟢 BÁCH THUẬN"],
  ["00000220", "TRẦN THỊ NGẦN 🟢 BÁCH THUẬN"],
  ["00000221", "HOÀNG XUÂN NGẢI 🟢 SONG LÃNG"],
  ["00000222", "VŨ ĐÌNH SANH 🟢 TAM QUANG"],
  ["00000223", "NGUYỄN TRỌNG QUÝ (HÀ) 🟢 SONG LÃNG"],
  ["00000224", "VŨ ĐÌNH KHỎA 🟢 TỰ TÂN"],
  ["00000225", "LẠI VĂN BƠN 🟢 TỰ TÂN"],
  ["00000226", "LẠI THỊ HUẾ  🟢 HÒA BÌNH"],
  ["00000227", "TRẦN THỊ VĂN ( ĐOÀN) 🟢 HỒNG PHONG"],
  ["00000228", "LƯU XUÂN THỦY 🟢 HỒNG PHONG"],
  ["00000229", "PHẠM THỊ VUI 🟢 DUY NHẤT"],
  ["00000230", "TRẦN THỊ VÂN 🟢 QUANG TRUNG"],
  ["00000231", "VŨ VĂN MIỆN 🟢 TRUNG AN"],
  ["00000232", "NGUYỄN XUÂN RẦN 🟢 XUÂN HÒA"],
  ["00000233", "NGÔ ĐÌNH THUẤN 🟢 TÂN HÒA"],
  ["00000234", "PHẠM VĂN ƯNG 🟢 TÂN HÒA"],
  ["00000235", "NGUYỄN THỊ THÚY 🟢 TÂN PHONG"],
  ["00000236", "DƯƠNG NGỌC THANH 🟢 ĐÔNG HÒA"],
  ["00000237", "HÀ THỊ HẠNH 🟢 VŨ ĐOÀI"],
  ["00000238", "HÀ VĂN LỰ 🟢 TÂN HÒA"],
  ["00000239", "PHẠM VĂN VĨNH 🟢 VŨ VÂN"],
  ["00000240", "NGUYỄN NGỌC ĐẨU 🟢 VŨ ĐOÀI"],
  ["00000241", "VŨ VĂN THEN 🟢 VŨ ĐOÀI"],
  ["00000242", "HOÀNG NGỌC CA 🟢 TRUNG AN"],
  ["00000243", "PHẠM XUÂN THỦY 🟢 VIỆT THUẬN"],
  ["00000244", "NGUYỄN TRUNG THỈNH 🟢 VŨ HỘI"],
  ["00000245", "NGUYỄN VĂN NGỌC 🟢 VŨ HỘI"],
  ["00000246", "TRỊNH VĂN DƯƠNG 🟢 VŨ PHÚC"],
  ["00000247", "TRẦN CÔNG HÙNG 🟢 TRẦN LÃM"],
  ["00000248", "ĐỖ QUANG VINH 🟢 XUÂN HÒA"],
  ["00000249", "NGUYỄN HỮU THẮNG 🟢 TRẦN LÃM"],
  ["00000250", "NGUYỄN XUÂN NAM 🟢 VŨ CHÍNH"],
  ["00000251", "BÙI ĐÌNH MINH 🟢 TRẦN LÃM"],
  ["00000252", "NGUYỄN THỊ THU PHƯƠNG 🟢 DUY NHẤT"],
  ["00000253", "NGUYỄN THỊ CHÍN 🟢 DUY NHẤT"],
  ["00000254", "PHẠM QUANG HUY 🟢 TRẦN LÃM"],
  ["00000255", "NGUYỄN VĂN DUY 🟢 TRẦN LÃM"],
  ["00000256", "ĐÀO XUÂN TUYẾN 🟢 TRẦN LÃM"],
  ["00000257", "ĐÀM VĂN SỰ 🟢 THÁI NGUYÊN"],
  ["00000258", "HÀ ĐỨC Y 🟢 THÁI THỌ"],
  ["00000259", "PHẠM NGỌC QUANG 🟢 THÁI HỒNG"],
  ["00000260", "NGUYỄN VĂN YÊM 🟢 THÁI THỌ"],
  ["00000261", "ĐỖ VĂN KHUẾ 🟢 THÁI THỊNH"],
  ["00000262", "HÀ VĂN DƯƠNG 🟢 THÁI HÀ"],
  ["00000263", "HÀ THỊ BÌNH 🟢 THÁI HỌC"],
  ["00000264", "LÊ THỊ TRÚC 🟢 THÁI HỌC"],
  ["00000265", "ĐINH VĂN HANH 🟢 THÁI THỊNH"],
  ["00000266", "LƯU TIẾN LỰC 🟢 THÁI ĐÔ"],
  ["00000267", "HOÀNG VĂN DŨNG 🟢 THÁI PHÚC"],
  ["00000268", "NGUYỄN THÁI BÌNH 🟢 THÁI  DƯƠNG"],
  ["00000269", "PHẠM NGỌC TRỌNG 🟢 THÁI AN"],
  ["00000270", "VŨ MINH TÂN 🟢 ĐÔNG KINH"],
  ["00000271", "BÙI CAO GIANG 🟢 HÀ GIANG"],
  ["00000272", "PHẠM VĂN ĐÔNG 🟢 THÁI GIANG"],
  ["00000273", "PHÍ VĂN THAO 🟢 ĐÔNG Á"],
  ["00000274", "TÔ ĐÌNH CHUNG 🟢 ĐÔNG HOÀNG"],
  ["00000275", "LẠI HỮU LIỆU 🟢 ĐÔNG VINH"],
  ["00000276", "PHAN VĂN TRIỆU 🟢 THỤY QUỲNH"],
  ["00000277", "NGUYỄN VĂN ĐÔNG 🟢 THỤY NINH"],
  ["00000278", "PHẠM VĂN DIỄN 🟢 THỤY PHONG"],
  ["00000279", "VŨ THỊ SON 🟢 THỤY PHONG"],
  ["00000280", "PHAN VŨ LÊNH 🟢 THỤY VIỆT"],
  ["00000281", "NGUYỄN THỊ LIỄU 🟢 THỤY CHÍNH"],
  ["00000282", "TRẦN THỊ XIM 🟢 THỤY QUỲNH"],
  ["00000283", "NGUYỄN VĂN HỮU 🟢 THỤY HƯNG"],
  ["00000284", "PHAN VĂN LIÊNG 🟢 THỤY THANH"],
  ["00000285", "PHẠM VĂN NINH 🟢 THỤY PHONG"],
  ["00000286", "LÊ SỸ QUÂN 🟢 THỤY VĂN"],
  ["00000287", "ĐINH VĂN QUYỆN 🟢 THỤY DÂN"],
  ["00000288", "NGUYỄN THỊ TRANG 🟢 THỤY DÂN"],
  ["00000289", "NGUYỄN THỊ HẰNG 🟢 THỤY DÂN"],
  ["00000290", "VŨ THỊ CHÈ 🟢 THỤY NINH"],
  ["00000291", "TRẦN DANH ĐẢM 🟢 ĐÔNG SƠN"],
  ["00000292", "MAI QUÝ TOẢN 🟢 ĐÔNG SƠN"],
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
