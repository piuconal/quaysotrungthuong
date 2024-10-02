const data = [
  ["13010084", "HÀ VĂN LƯỢNG 💫 Die Casting Division"],
  ["13040600", "NGUYỄN VĂN MINH 💫 Die Casting Division"],
  ["14020242", "TRỊNH THỊ NGÀ 💫 Die Casting Division"],
  ["17100832", "NGUYỄN TRỌNG BÌNH 💫 Die Casting Division"],
  ["18010009", "NGUYỄN VĂN TĂM 💫 Die Casting Division"],
  ["18030283", "NGUYỄN THANH THỦY 💫 Die Casting Division"],
  ["18030284", "NGUYỄN NHẬT DUY 💫 Die Casting Division"],
  ["18080725", "HUỲNH HUY HÒA 💫 Die Casting Division"],
  ["18111069", "NGUYỄN VIỆT TRUNG 💫 Die Casting Division"],
  ["19080646", "LIỄU MINH TUẤN 💫 Die Casting Division"],
  ["19100922", "NGUYỄN THỊ DINH 💫 Die Casting Division"],
  ["19101049", "NGUYỄN TRỌNG TÂM 💫 Die Casting Division"],
  ["19101070", "NGUYỄN THỊ THÙY 💫 Die Casting Division"],
  ["19121292", "NGUYỄN TRỌNG TRÍ 💫 Die Casting Division"],
  ["20080385", "NGUYỄN LÂM HUY TRƯỜNG 💫 Die Casting Division"],
  ["20100609", "TRẦN PHAN HOÀNG HUY 💫 Die Casting Division"],
  ["20100652", "TRẦN THỊ MINH THƯ 💫 Die Casting Division"],
  ["21040445", "TRẦN HOÀNG HÙNG 💫 Die Casting Division"],
  ["21111066", "LA MINH TÚ 💫 Die Casting Division"],
  ["22020199", "NGUYỄN VĂN HƯỚNG 💫 Die Casting Division"],
  ["22020211", "TRỊNH TÚ XƯƠNG 💫 Die Casting Division"],
  ["22020240", "NGUYỄN MINH PHÚ 💫 Die Casting Division"],
  ["22090801", "DƯƠNG VĂN TOÀN 💫 Die Casting Division"],
  ["23040057", "CHUNG THỊ HUỲNH NHI 💫 Die Casting Division"],
  ["23070164", "LÊ THÀNH ĐẠT 💫 Die Casting Division"],
  ["23080192", "NGUYỄN ANH TUẤN 💫 Die Casting Division"],
  ["23080211", "HUỲNH THANH HẰNG 💫 Die Casting Division"],
  ["23090244", "DƯƠNG VĂN PHONG 💫 Die Casting Division"],
  ["23110412", "VÕ THỊ THÚY DANH 💫 Die Casting Division"],
  ["24020084", "PHẠM MINH ĐẠT 💫 Die Casting Division"],
  ["24050412", "NGUYỄN VĂN ĐIỀN 💫 Die Casting Division"],
  ["18040395", "TẠ LIÊN KHƯƠNG 💫 Domestic Purchasing Division"],
  ["17070542", "PHẠM MINH TUẤN 💫 Dyeing"],
  ["18090892", "TÔ THỊ HỒNG QUYÊN 💫 Dyeing"],
  ["19020044", "NGUYỄN MINH THÀNH 💫 Dyeing"],
  ["08010010", "HOÀNG ĐỨC MẠNH 💫 Enameling Division"],
  ["09040014", "LÊ MINH HIẾU 💫 Enameling Division"],
  ["09040020", "NGUYỄN THỊ HUỆ 💫 Enameling Division"],
  ["11070102", "NGUYỄN VĂN ĐẠO 💫 Enameling Division"],
  ["11100116", "TRẦN QUỐC VƯƠNG 💫 Enameling Division"],
  ["12120461", "HÀ LÊ MINH VŨ 💫 Enameling Division"],
  ["13010004", "NGUYỄN VĂN THUẬN 💫 Enameling Division"],
  ["13020247", "NGUYỄN TUẤN KIỆT 💫 Enameling Division"],
  ["13030468", "HUỲNH THỊ ĐÀO 💫 Enameling Division"],
  ["13050681", "THÂN TIẾN DŨNG 💫 Enameling Division"],
  ["13070875", "NGUYỄN ĐÌNH TRỌNG 💫 Enameling Division"],
  ["13091186", "ĐOÀN THỊ NGỌC NHUNG 💫 Enameling Division"],
  ["13091226", "VÕ THANH TRÚC 💫 Enameling Division"],
  ["13101409", "NGUYỄN VIẾT HẠNH 💫 Enameling Division"],
  ["13121492", "HỒ THỊ HOÀI THƯƠNG 💫 Enameling Division"],
  ["14080703", "TÔ THIỆN TRÍ 💫 Enameling Division"],
  ["14080704", "THÂN DUY ĐẠO 💫 Enameling Division"],
  ["14080730", "TRẦN THỊ KIM TUYẾN 💫 Enameling Division"],
  ["14121247", "NGUYỄN THỊ LUYÊN 💫 Enameling Division"],
  ["14121248", "NGUYỄN NGỌC QUỲNH NHƯ 💫 Enameling Division"],
  ["14121252", "DƯƠNG VĂN LỰC 💫 Enameling Division"],
  ["14121256", "HÀ THỊ TRANG 💫 Enameling Division"],
  ["15020127", "BÙI THỊ TRÚC LY 💫 Enameling Division"],
  ["15050434", "TRƯƠNG THỊ NGỌC CHI 💫 Enameling Division"],
  ["15090870", "THÂN ĐỨC TÙNG 💫 Enameling Division"],
  ["15091016", "ĐÀO THỊ MỸ HẠNH 💫 Enameling Division"],
  ["15101177", "NGUYỄN NGỌC HIẾU 💫 Enameling Division"],
  ["15121508", "NGUYỄN TRẦN HỒNG NHUNG 💫 Enameling Division"],
  ["17060433", "KSOR H' DUYẾT 💫 Enameling Division"],
  ["17060434", "PHẠM NGUYÊN THẢO 💫 Enameling Division"],
  ["17060436", "HOÀNG THỊ XUÂN 💫 Enameling Division"],
  ["17070519", "NGUYỄN THỊ THÚY HẰNG 💫 Enameling Division"],
  ["18030207", "DƯƠNG THỤY HỒNG THẮM 💫 Enameling Division"],
  ["18060625", "LƯƠNG NGỌC BÍCH 💫 Enameling Division"],
  ["18070719", "LÊ VĂN SON 💫 Enameling Division"],
  ["18100961", "TRẦN THỊ THÚY 💫 Enameling Division"],
  ["19020067", "BÙI THỊ CẨM TIÊN 💫 Enameling Division"],
  ["19020068", "LÊ MINH GIANG 💫 Enameling Division"],
  ["19101047", "NGUYỄN LÂM THÔNG 💫 Enameling Division"],
  ["20090428", "HỒ ĐĂNG KHOA 💫 Enameling Division"],
  ["20090429", "NGUYỄN THANH PHONG 💫 Enameling Division"],
  ["20090430", "HOÀNG THỊ HẠNH 💫 Enameling Division"],
  ["20120819", "VÕ THANH TÙNG 💫 Enameling Division"],
  ["21040472", "NGUYỄN NGỌC NHUẬN 💫 Enameling Division"],
  ["22010028", "TRẦN THỊ THANH TUYỀN 💫 Enameling Division"],
  ["22010030", "DƯƠNG THỊ ÁNH LINH 💫 Enameling Division"],
  ["22020237", "NGUYỄN THỊ THÙY LINH 💫 Enameling Division"],
  ["22020289", "TRẦN NGỌC PHI YẾN 💫 Enameling Division"],
  ["22020290", "NGUYỄN ANH THƯ 💫 Enameling Division"],
  ["22020299", "NGUYỄN THỊ QUYÊN 💫 Enameling Division"],
  ["22030396", "NGUYỄN THỊ NHI 💫 Enameling Division"],
  ["22070678", "NGUYỄN THỊ THANH NGÂN 💫 Enameling Division"],
  ["22070679", "LÊ NGỌC VINH 💫 Enameling Division"],
  ["23010002", "NGUYỄN VĂN NGỌC 💫 Enameling Division"],
  ["23030027", "NGUYỄN KHẮC HUY 💫 Enameling Division"],
  ["23030036", "BÙI TRƯƠNG HOÀNG MY 💫 Enameling Division"],
  ["23040071", "TÔ THỊ YẾN NHI 💫 Enameling Division"],
  ["23040076", "PHẠM NGỌC LONG 💫 Enameling Division"],
  ["23060116", "PHẠM THỊ PHƯƠNG THẢO 💫 Enameling Division"],
  ["23060118", "NÔNG THANH TRUYỀN 💫 Enameling Division"],
  ["23060120", "LÊ TRỌNG THỦY 💫 Enameling Division"],
  ["23060135", "MAI VĂN TÂN 💫 Enameling Division"],
  ["23100361", "NGUYỄN THU HƯỜNG 💫 Enameling Division"],
  ["24030146", "NGUYỄN VĂN NHÍ 💫 Enameling Division"],
  ["24030213", "TRƯƠNG KIM LIÊN 💫 Enameling Division"],
  ["09030012", "TRẦN THANH PHONG 💫 F&M Energy"],
  ["12100383", "TRƯƠNG QUỐC TUẤN 💫 F&M Energy"],
  ["13010083", "LÝ THANH VŨ 💫 F&M Group"],
  ["13010085", "NGUYỄN QUANG NHIÊN 💫 F&M Group"],
  ["14030514", "HUỲNH TẤN KIÊN 💫 F&M Group"],
  ["14100974", "NGUYỄN VIỆT QUỐC 💫 F&M Group"],
  ["15091067", "PHẠM QUANG VŨ 💫 F&M Group"],
  ["10060029", "TĂNG XUÂN TRUNG 💫 Forming Section"],
  ["14030413", "CHÂU HỒNG ĐỨC 💫 Forming Section"],
  ["18060636", "TRẦN ĐỨC DŨNG 💫 Forming Section"],
  ["19100969", "LÊ CÔNG PHÚC 💫 Forming Section"],
  ["23060101", "HOÀNG THỊ XUÂN 💫 Forming Section"],
  ["23090306", "PHAN NGUYỄN PHI HÙNG 💫 Forming Section"],
  ["23120452", "BÙI HỮU ÂN 💫 Forming Section"],
  ["99020007", "HOÀNG ANH THUẤN 💫 Forming Section"],
  ["01060006", "PHẠM THỊ MAI OANH 💫 General Affairs Division"],
  ["04030011", "TRẦN THỊ TUẪN 💫 General Affairs Division"],
  ["06070030", "ĐỖ THỊ NGỌC ANH 💫 General Affairs Division"],
  ["13081015", "LÊ TÚ QUYÊN 💫 General Affairs Division"],
  ["13081024", "NGUYỄN THỊ HỒNG PHẤN 💫 General Affairs Division"],
  ["13111460", "TRỊNH THỊ HÀ 💫 General Affairs Division"],
  ["14030522", "LÊ THỊ MỸ HẰNG 💫 General Affairs Division"],
  ["15050445", "DƯƠNG THỊ THÚY PHẬN 💫 General Affairs Division"],
  ["15111309", "PHẠM THỊ HẰNG 💫 General Affairs Division"],
  ["16010047", "NGUYỄN THỊ NHÀN 💫 General Affairs Division"],
  ["16030393", "THÁI THỊ HIỆP 💫 General Affairs Division"],
  ["16050584", "ĐOÀN THỊ LO 💫 General Affairs Division"],
  ["16050586", "VŨ VĂN CHUÂN 💫 General Affairs Division"],
  ["18080781", "TRẦN THỊ THU HƯƠNG 💫 General Affairs Division"],
  ["18080814", "NGÔ THỊ HẰNG 💫 General Affairs Division"],
  ["21121245", "TRẦN THỊ DIỆU MY 💫 General Affairs Division"],
  ["21121263", "TRẦN VĂN HÀO 💫 General Affairs Division"],
  ["23010003", "LÊ THỊ NGA 💫 General Affairs Division"],
  ["23120476", "LÊ THỊ MỪNG 💫 General Affairs Division"],
  ["06060038", "PHẠM SANH HẢI 💫 Heatset"],
  ["12050177", "NGUYỄN THỊ ÁI 💫 Heatset"],
  ["12120296", "BÙI TUẤN ĐẠT 💫 Heatset"],
  ["15050412", "NGUYỄN TẤN THỌ 💫 Heatset"],
  ["19090799", "TẠ HOÀNG THÀNH 💫 Heatset"],
  ["21050586", "TRẦN THANH TUẤN 💫 Heatset"],
  ["22020184", "NGUYỄN ĐỨC TRỌNG 💫 Heatset"],
  ["23090267", "NGUYỄN THẾ HIỀN 💫 Heatset"],
  ["23090269", "NGUYỄN NHẬT TẢO 💫 Heatset"],
  ["00090020", "PHẠM THỊ BÍCH VÂN 💫 Inspection (Zipper)"],
  ["04030010", "NGÔ THỊ LUYẾN 💫 Inspection (Zipper)"],
  ["05010006", "VÒNG CẤM MÙI 💫 Inspection (Zipper)"],
  ["05070021", "MAI LÊ THÚY BÌNH 💫 Inspection (Zipper)"],
  ["06020009", "QUÁCH THỊ NGỌC THỦY 💫 Inspection (Zipper)"],
  ["06020010", "NGUYỄN HUỲNH MINH TRANG 💫 Inspection (Zipper)"],
  ["06020012", "HUỲNH THỊ THANH GIANG 💫 Inspection (Zipper)"],
  ["06020019", "NGUYỄN THỊ DIỄM THÚY 💫 Inspection (Zipper)"],
  ["06120046", "NGÔ THỊ ĐÔNG 💫 Inspection (Zipper)"],
  ["06120049", "TRẦN THỊ HỒNG GẤM 💫 Inspection (Zipper)"],
  ["06120050", "ĐỖ NGỌC LÝ 💫 Inspection (Zipper)"],
  ["07030006", "HOÀNG THỊ HIÊN 💫 Inspection (Zipper)"],
  ["09020010", "NGUYỄN THỊ HƯƠNG 💫 Inspection (Zipper)"],
  ["11030065", "LÊ THỊ MINH 💫 Inspection (Zipper)"],
  ["12010053", "PHẠM THỊ NHẬT HÀ 💫 Inspection (Zipper)"],
  ["12030118", "NGUYỄN THỊ OANH 💫 Inspection (Zipper)"],
  ["12030120", "VŨ THỊ PHƯƠNG THẢO 💫 Inspection (Zipper)"],
  ["12040153", "NGUYỄN THỊ THU THỦY 💫 Inspection (Zipper)"],
  ["12040154", "TRẦN THỊ THANH TRANG 💫 Inspection (Zipper)"],
  ["12070370", "LÊ THỊ HƯƠNG 💫 Inspection (Zipper)"],
  ["13020225", "LÀY CẨM VÂN 💫 Inspection (Zipper)"],
  ["13040632", "PHẠM THỊ THÚY HÀ 💫 Inspection (Zipper)"],
  ["13060837", "NGUYỄN THỊ HẠNH 💫 Inspection (Zipper)"],
  ["13060844", "TRẦN THỊ YẾN 💫 Inspection (Zipper)"],
  ["13091230", "TRỊNH THỊ HẰNG 💫 Inspection (Zipper)"],
  ["13121549", "PHẠM THỊ NGỌC CHÂM 💫 Inspection (Zipper)"],
  ["14010052", "ĐÀM THỊ THU HIỀN 💫 Inspection (Zipper)"],
  ["14020284", "NGUYỄN THỊ HUYỀN DUNG 💫 Inspection (Zipper)"],
  ["14020301", "LÊ THỊ KIM QUYÊN 💫 Inspection (Zipper)"],
  ["14020342", "NGUYỄN THỊ THANH ĐÀI 💫 Inspection (Zipper)"],
  ["14020351", "HỒ XUÂN HƯƠNG 💫 Inspection (Zipper)"],
  ["14030555", "NGUYỄN NGỌC NHÃ KHANH 💫 Inspection (Zipper)"],
  ["14090829", "TRƯƠNG THỊ TUYẾN 💫 Inspection (Zipper)"],
  ["14090915", "TÔ THỊ NGỌC THI 💫 Inspection (Zipper)"],
  ["14111042", "VŨ NGUYỄN QUỲNH NHƯ 💫 Inspection (Zipper)"],
  ["14111080", "PHAN THANH THỦY 💫 Inspection (Zipper)"],
  ["15030235", "VŨ NGUYỄN THANH HẰNG 💫 Inspection (Zipper)"],
  ["15030243", "NGUYỄN NGỌC THANH HẰNG 💫 Inspection (Zipper)"],
  ["15030323", "NGUYỄN NGỌC NHẤT LINH 💫 Inspection (Zipper)"],
  ["15030331", "PHẠM THỊ XÍ 💫 Inspection (Zipper)"],
  ["15030349", "TRẦN NGỌC NHIÊN 💫 Inspection (Zipper)"],
  ["15070576", "TRƯƠNG THỊ PHƯƠNG THẢO 💫 Inspection (Zipper)"],
  ["15070637", "MAI THỊ VÂN 💫 Inspection (Zipper)"],
  ["15101227", "NGUYỄN XUÂN TÚ 💫 Inspection (Zipper)"],
  ["15111442", "HUỲNH HOÀNG NAM 💫 Inspection (Zipper)"],
  ["16090847", "BÙI THỊ YẾN 💫 Inspection (Zipper)"],
  ["16090850", "LÊ THỊ HOÀI THƠ 💫 Inspection (Zipper)"],
  ["16100875", "VÕ THỊ HỒNG TÂM 💫 Inspection (Zipper)"],
  ["16100881", "NGUYỄN ĐẶNG QUỲNH TRANG 💫 Inspection (Zipper)"],
  ["16100885", "LÊ THỊ TIẾN 💫 Inspection (Zipper)"],
  ["16110940", "NGUYỄN THỊ BÌNH MINH 💫 Inspection (Zipper)"],
  ["18100999", "NGUYỄN THỊ LAN VY 💫 Inspection (Zipper)"],
  ["18101007", "NGUYỄN THỊ THU TRANG 💫 Inspection (Zipper)"],
  ["13020206", "LÊ CẢNH HIẾU 💫 Knitting cord"],
  ["18101038", "NGUYỄN VIỆT SANG 💫 Knitting cord"],
  ["19111229", "NGUYỄN MINH ĐOÀN 💫 Knitting cord"],
  ["19121306", "LÊ HOÀNG ANH DŨNG 💫 Knitting cord"],
  ["13020216", "LÊ THỊ TUYẾT NHUNG 💫 Material inspection"],
  ["13040642", "TRẦN Ý NGHĨA 💫 Material inspection"],
  ["14090896", "PHẠM THỊ NGỌC 💫 Material inspection"],
  ["15010003", "HUỲNH THỊ ĐIỆN 💫 Material inspection"],
  ["15060515", "ĐÀO THỊ THANH CHI 💫 Material inspection"],
  ["15060516", "PHAN THỊ THỦY TIÊN 💫 Material inspection"],
  ["18010005", "TRỊNH THỊ MAI NHI 💫 Material inspection"],
  ["18010032", "NGUYỄN THỊ KIM YẾN 💫 Material inspection"],
  ["18050490", "TRỊNH THỊ DIỄM HƯƠNG 💫 Material inspection"],
  ["18060626", "NGUYỄN THỊ THÙY TRANG 💫 Material inspection"],
  ["18090871", "HUỲNH THỊ YẾN NHI 💫 Material inspection"],
  ["18101029", "TRẦN THỊ HẰNG 💫 Material inspection"],
  ["19100926", "PHAN THỊ NHUNG 💫 Material inspection"],
  ["21020077", "HUỲNH THỊ MỸ DUYÊN 💫 Material inspection"],
  ["21030285", "NGUYỄN THỊ TÂN 💫 Material inspection"],
  ["21040398", "ĐẶNG THỊ KIM THẢO 💫 Material inspection"],
  ["21040416", "ĐỖ THỊ HÀ LY 💫 Material inspection"],
  ["21040486", "NGÔ VĂN TÀI 💫 Material inspection"],
  ["21050527", "PHẠM THỊ TUYẾT NGA 💫 Material inspection"],
  ["21060663", "KSOR H'ĐÓI 💫 Material inspection"],
  ["21060665", "NGUYỄN THỊ NGỌC HÀ 💫 Material inspection"],
  ["21121275", "NGUYỄN THỊ NHÂM 💫 Material inspection"],
  ["22010026", "TRẦN THỊ KIM ĐÔNG 💫 Material inspection"],
  ["22020224", "NGUYỄN THỊ PHƯƠNG THANH 💫 Material inspection"],
  ["22020228", "LANG THÙY TRANG 💫 Material inspection"],
  ["22040493", "TRẦN THỊ BÍCH NGỌC 💫 Material inspection"],
  ["22040497", "H'NEK ÊBAN 💫 Material inspection"],
  ["23080199", "DƯƠNG THỊ HOÀI THƯƠNG 💫 Material inspection"],
  ["23080201", "NGUYỄN THỊ HỒNG LOAN 💫 Material inspection"],
  ["23080204", "PHẠM NGỌC TRÂM 💫 Material inspection"],
  ["23080205", "TRẦN HUYỀN DIỆU 💫 Material inspection"],
  ["23080206", "NGUYỄN THỊ CHÚC LY 💫 Material inspection"],
  ["23090270", "NGUYỄN NGỌC NHƯ Ý 💫 Material inspection"],
  ["23090271", "NGUYỄN THỊ TUYẾT SƯƠNG 💫 Material inspection"],
  ["23090272", "TRẦN THỊ MINH THUẬN 💫 Material inspection"],
  ["23090273", "LÊ THỊ CHÚC MUỘI 💫 Material inspection"],
  ["23090274", "NGUYỄN HOÀNG YẾN VY 💫 Material inspection"],
  ["24020088", "VÕ THỊ THANH NGÂN 💫 Material inspection"],
  ["24020089", "TRẦN THÚY VY 💫 Material inspection"],
  ["24020091", "ĐÀO LÊ THỊ LOAN 💫 Material inspection"],
  ["24020092", "ĐẶNG THỊ MỸ TRANG 💫 Material inspection"],
  ["24020096", "NGUYỄN THỊ KIM PHƯỢNG 💫 Material inspection"],
  ["24020097", "TRƯƠNG THỊ HẢI 💫 Material inspection"],
  ["24020098", "HUỲNH NGỌC GIANG 💫 Material inspection"],
  ["24020100", "LÊ HOÀI THU 💫 Material inspection"],
  ["24020101", "MAI THANH THỦY 💫 Material inspection"],
  ["04100015", "NGUYỄN THỊ KHÁNH LINH 💫 Personnel Affairs Division"],
  ["06110043", "NGUYỄN KHẮC GIÁC 💫 Personnel Affairs Division"],
  ["11010058", "NGUYỄN MAI KHANH 💫 Personnel Affairs Division"],
  ["12100409", "LÊ THỊ HẰNG 💫 Personnel Affairs Division"],
  ["13060863", "TRẦN TẤN QUỐC 💫 Personnel Affairs Division"],
  ["22080739", "ĐOÀN UYỂN NHI 💫 Personnel Affairs Division"],
  ["99090060", "BÙI THÚY HÒA 💫 Personnel Affairs Division"],
  ["16040490", "NGUYỄN HUỲNH TỐ NGUYÊN 💫 PF C Division"],
  ["23090281", "NGUYỄN HỒNG THẮM 💫 PF C Division"],
  ["13060854", "NGUYỄN TIẾN DŨNG 💫 Plating Division"],
  ["13101375", "BÙI THỊ TUYẾT SƯƠNG 💫 Plating Division"],
  ["13121525", "LÂM HOÀNG BẢO 💫 Plating Division"],
  ["14010036", "TRẦN PHƯƠNG DU 💫 Plating Division"],
  ["14010061", "VŨ QUANG ĐÔI 💫 Enameling Division"],
  ["14020091", "NGUYỄN THỊ CẨM LOAN 💫 Plating Division"],
  ["14020114", "NGUYỄN KIÊN ĐỊNH 💫 Plating Division"],
  ["14080717", "TRƯƠNG THỊ CẨM NHUNG 💫 Plating Division"],
  ["15010041", "VÕ DUY CẢNH 💫 Plating Division"],
  ["15010043", "VÕ THỊ BÍCH TUYỀN 💫 Plating Division"],
  ["15050451", "NGUYỄN THỊ MỸ CHI 💫 Plating Division"],
  ["16060623", "TRẦN NGUYỄN TRUNG NGUYÊN 💫 Plating Division"],
  ["17040243", "TRẦN CÔNG THANH 💫 Plating Division"],
  ["17050417", "HUỲNH THANH LAM 💫 Plating Division"],
  ["17080676", "VÕ BẢO SƠN 💫 Plating Division"],
  ["17100813", "VÕ HỮU BẢO 💫 Plating Division"],
  ["18060637", "DƯƠNG TẤN LỘC 💫 Plating Division"],
  ["19030221", "DƯƠNG NGỌC YẾN 💫 Plating Division"],
  ["20090427", "HOÀNG VĂN HÙNG 💫 Plating Division"],
  ["21030229", "PHAN HOÀNG TÔN 💫 Plating Division"],
  ["21060707", "CAO MẠNH CƯỜNG 💫 Plating Division"],
  ["21060708", "BÙI VĂN NGHĨ 💫 Plating Division"],
  ["21111039", "NGUYỄN THANH HẢI 💫 Plating Division"],
  ["22090878", "LÊ THỊ NGỌC DƯ 💫 Plating Division"],
  ["22090880", "NGUYỄN THÀNH TRÍ 💫 Plating Division"],
  ["22090881", "NGUYỄN CƯỜNG THỊNH 💫 Plating Division"],
  ["23020009", "NGUYỄN HOÀNG SANG 💫 Plating Division"],
  ["23020023", "PHẠM ĐÌNH LỢI 💫 Plating Division"],
  ["23070144", "VÕ THỊ THU AN 💫 Plating Division"],
  ["23070145", "NGUYỄN THANH PHỤNG 💫 Plating Division"],
  ["23070146", "NGUYỄN THỊ THANH TUYỀN 💫 Plating Division"],
  ["23070159", "NGUYỄN LƯU VŨ 💫 Plating Division"],
  ["00090019", "VŨ THỊ NHUNG 💫 Quality Control"],
  ["06020021", "VŨ THỊ MINH 💫 Quality Control"],
  ["12050170", "NGUYỄN THỊ THU THẢO 💫 Quality Control"],
  ["12120442", "HOÀNG NGỌC PHI PHƯỢNG 💫 Quality Control"],
  ["13040505", "BÙI HỮU HẠNH 💫 Quality Control"],
  ["13040634", "NGUYỄN THỊ MINH XUÂN 💫 Quality Control"],
  ["14020306", "LẠI THỊ KIM OANH 💫 Quality Control"],
  ["15030320", "TRẦN THỊ NGỌC VÂN 💫 Quality Control"],
  ["16030276", "NGUYỄN NGỌC KHÁNH CHÂU 💫 Quality Control"],
  ["16100928", "NGUYỄN THỊ HỒNG NHUNG 💫 Quality Control"],
  ["16110944", "TRƯƠNG THỊ HỒNG THẮM 💫 Quality Control"],
  ["18030099", "NGUYỄN THỊ NHƯ 💫 Quality Control"],
  ["18070696", "NGUYỄN THỊ ÁNH 💫 Quality Control"],
  ["19010023", "AO THỊ NHỰT TRINH 💫 Quality Control"],
  ["22050562", "PHẠM THỊ CẨM TIÊN 💫 Quality Control"],
  ["22080747", "HỒ HẢI YẾN 💫 Quality Control"],
  ["23120444", "NGUYỄN THỊ HỒNG GẤM 💫 Quality Control"],
  ["98090001", "HOÀNG THỊ MỘNG ĐIỆP 💫 Quality Control"],
  ["99020024", "QUÁCH THỊ CẨM LOAN 💫 Quality Control"],
  ["99100066", "PHẠM ĐÌNH QUỐC DIỄM KIỀU 💫 Quality Control"],
  ["14090772", "BÙI MINH ĐỨC 💫 Research & Development Center"],
  ["15091018", "HOÀNG THỊ THÚY 💫 Research & Development Center"],
  ["16020216", "HỒ THỊ HỒNG HẠNH 💫 Research & Development Center"],
  ["17040258", "PHAN VĂN TOÀN 💫 Research & Development Center"],
  ["17070539", "BÙI VĂN NẠP 💫 Research & Development Center"],
  ["17090746", "NGUYỄN THANH TÙNG 💫 Research & Development Center"],
  ["17110889", "LÊ ĐĂNG HOÀNG 💫 Research & Development Center"],
  ["17110894", "LÊ HOÀNG KIM CHI 💫 Research & Development Center"],
  ["18060627", "HUỲNH VĂN CHI 💫 Research & Development Center"],
  ["19030247", "NGUYỄN HƯNG KHÁNH 💫 Research & Development Center"],
  ["19040278", "NGÔ MINH KHẢI 💫 Research & Development Center"],
  ["20030319", "NGUYỄN THỐNG TRỊ 💫 Research & Development Center"],
  ["20040333", "NGUYỄN VĂN THI 💫 Research & Development Center"],
  ["21030231", "NGUYỄN THỊ TUYẾT 💫 Research & Development Center"],
  ["21040443", "ĐỖ TẤN ĐẠT 💫 Research & Development Center"],
  ["21040464", "ĐỖ THỊ THÚY HẰNG 💫 Research & Development Center"],
  ["22020122", "TRẦN NHÂN HẬU 💫 Research & Development Center"],
  ["22030437", "PHAN MẠNH MINH 💫 Research & Development Center"],
  ["22090934", "NGUYỄN THỊ HUỲNH NHƯ 💫 Research & Development Center"],
  ["23060114", "NGÔ HOÀI THƯƠNG 💫 Research & Development Center"],
  ["23060115", "ĐINH THỊ HIỀN LƯƠNG 💫 Research & Development Center"],
  ["23060136", "ĐINH TRỌNG HIẾU 💫 Research & Development Center"],
  ["23100332", "PHẠM QUANG VINH 💫 Research & Development Center"],
  ["23110406", "TRẦN XUÂN LỢI 💫 Research & Development Center"],
  ["23120475", "TRIỆU THÀNH TÍN 💫 Research & Development Center"],
  ["24010005", "ĐÀO THANH DỰ 💫 Research & Development Center"],
  ["24010006", "ĐỖ ĐỨC TOÀN 💫 Research & Development Center"],
  ["24030141", "VÕ THU NGÂN 💫 Research & Development Center"],
  ["12110279", "HUỲNH VĂN HIỀN 💫 Rubber - In house"],
  ["13040516", "VŨ THỊ HỒNG ÂN 💫 Rubber - In house"],
  ["13040641", "NGUYỄN THỊ BÍCH GIANG 💫 Rubber - In house"],
  ["19101055", "RAH LAN H'NGUÊT 💫 Rubber - In house"],
  ["22020145", "NGUYỄN CÀ CHUÔL 💫 Rubber - In house"],
  ["22020229", "DƯƠNG KIM YẾN 💫 Rubber - In house"],
  ["22020302", "NGUYỄN THÚY NHI 💫 Rubber - In house"],
  ["22030392", "NGUYỄN THANH NGA 💫 Rubber - In house"],
  ["23090290", "HỒ SỶ AN 💫 Rubber - In house"],
  ["13040552", "BÙI THỊ THÙY TRANG 💫 Sewing Section"],
  ["13101419", "NGUYỄN VĂN VIỄN 💫 Sewing Section"],
  ["18030095", "NGUYỄN THỊ THANH CÚC 💫 Sewing Section"],
  ["18030163", "VÕ ÁNH DƯƠNG 💫 Sewing Section"],
  ["18060642", "ĐỖ THỊ THU DIỄM 💫 Sewing Section"],
  ["18070662", "TRẦN THỊ NHƯ Ý 💫 Sewing Section"],
  ["18100955", "PHAN ANH BẢO NGỌC 💫 Sewing Section"],
  ["20100571", "NGUYỄN CU ĐEN 💫 Sewing Section"],
  ["21060774", "CHÂU TIẾN ĐẠT 💫 Sewing Section"],
  ["22080758", "NGUYỄN MINH NHỰT 💫 Sewing Section"],
  ["23060105", "PHAN THỊ YẾN NHI 💫 Sewing Section"],
  ["23070165", "NGUYỄN HOÀI SƠN 💫 Sewing Section"],
  ["23080179", "LÊ TRƯỜNG SINH 💫 Sewing Section"],
  ["23080207", "NGUYỄN THỊ SA 💫 Sewing Section"],
  ["23100317", "NGUYỄN CÔNG ANH HOÀNG 💫 Sewing Section"],
  ["12080346", "TRẦN MINH PHƯƠNG 💫 Slider Assembling Division"],
  ["13010022", "NGUYỄN THỊ MỘNG TUYỀN 💫 Slider Assembling Division"],
  ["13010023", "TRƯƠNG THỊ THANH TÔNG 💫 Slider Assembling Division"],
  ["13010024", "HUỲNH THỊ TRANG 💫 Slider Assembling Division"],
  ["13010043", "LÊ THỊ TUYẾT MAI 💫 Slider Assembling Division"],
  ["13020241", "NGUYỄN THỊ XUYÊN 💫 Slider Assembling Division"],
  ["13020243", "VÕ KIM THOA 💫 Slider Assembling Division"],
  ["13030299", "PHẠM THỊ HOA 💫 Slider Assembling Division"],
  ["13040513", "ĐÀO THỊ DƯƠNG 💫 Slider Assembling Division"],
  ["13040602", "TRẦN THỊ TRÚC HÀ 💫 Slider Assembling Division"],
  ["13050766", "BÙI TÁ GIANG 💫 Slider Assembling Division"],
  ["13050776", "TRẦN KIM CÚC 💫 Slider Assembling Division"],
  ["13050779", "BÙI THỊ THANH TRÚC 💫 Slider Assembling Division"],
  ["13121611", "ĐẶNG THỊ ÁNH HỒNG 💫 Slider Assembling Division"],
  ["14020145", "NGUYỄN THỊ NGỌC TRÂM 💫 Slider Assembling Division"],
  ["14020149", "TRẦN THỊ NGUYỆN 💫 Slider Assembling Division"],
  ["14080698", "NGUYỄN THỊ THANH TRÚC 💫 Slider Assembling Division"],
  ["14090889", "TRẦN THỊ ANH THƯ 💫 Slider Assembling Division"],
  ["14100936", "NGUYỄN HOÀNG ÁNH TUYẾT 💫 Slider Assembling Division"],
  ["14111137", "NGUYỄN AN 💫 Slider Assembling Division"],
  ["14121217", "VÕ THỊ TUYẾT 💫 Slider Assembling Division"],
  ["15010047", "NGUYỄN THỊ YẾN 💫 Slider Assembling Division"],
  ["15010088", "LA HOÀNG NGỌC VÂN 💫 Slider Assembling Division"],
  ["15020109", "NGUYỄN THỊ NAM 💫 Slider Assembling Division"],
  ["15030140", "LÊ THỊ HƯƠNG 💫 Slider Assembling Division"],
  ["15060498", "TRƯƠNG ANH KIM TƯỚC 💫 Slider Assembling Division"],
  ["15060509", "NGUYỄN THỊ THÙY TRANG 💫 Slider Assembling Division"],
  ["15060510", "NGUYỄN THỊ NGỌC HÀ 💫 Slider Assembling Division"],
  ["15060514", "ĐẶNG THỊ TUYẾT 💫 Slider Assembling Division"],
  ["15070584", "HUỲNH THỊ TRẮNG 💫 Slider Assembling Division"],
  ["15090883", "VÕ THỊ HỒNG GẤM 💫 Slider Assembling Division"],
  ["15090887", "NGUYỄN THỊ THU HƯƠNG 💫 Slider Assembling Division"],
  ["15090888", "NGUYỄN THỊ PHƯƠNG DUNG 💫 Slider Assembling Division"],
  ["15091025", "NGUYỄN HOÀNG YẾN 💫 Slider Assembling Division"],
  ["16070708", "KIỀU QUỐC TÀI 💫 Slider Assembling Division"],
  ["17100830", "ĐẶNG NGỌC CHƯƠNG 💫 Slider Assembling Division"],
  ["18030154", "VŨ MINH PHỤNG 💫 Slider Assembling Division"],
  ["19020146", "MAI VĂN THẮNG 💫 Slider Assembling Division"],
  ["19090881", "NGUYỄN THỊ THANH HẰNG 💫 Slider Assembling Division"],
  ["20120823", "BẠCH VĂN TUẤN 💫 Slider Assembling Division"],
  ["21010019", "PHẠM NGỌC HỮU PHƯỚC 💫 Slider Assembling Division"],
  ["21050587", "NGUYỄN THỊ HỒNG AN 💫 Slider Assembling Division"],
  ["21050647", "LÊ THỊ THU HIỀN 💫 Slider Assembling Division"],
  ["21060734", "TRẦN THỊ HUYỀN TRÂN 💫 Slider Assembling Division"],
  ["21060800", "MAI THỊ KIM ANH 💫 Slider Assembling Division"],
  ["21111068", "NGUYỄN THỊ HỒNG MY 💫 Slider Assembling Division"],
  ["21111129", "TRỊNH MINH THƯƠNG 💫 Slider Assembling Division"],
  ["21111168", "NGUYỄN HOÀNG NAM 💫 Slider Assembling Division"],
  ["21121173", "LÂM THỊ LY NA 💫 Slider Assembling Division"],
  ["21121198", "LÊ HOÀI ÂN 💫 Slider Assembling Division"],
  ["22010050", "NGUYỄN HỒNG PHONG 💫 Slider Assembling Division"],
  ["22020141", "NGUYỄN HỮU NHÀN 💫 Slider Assembling Division"],
  ["22090786", "NGUYỄN CÔNG TUẤN 💫 Slider Assembling Division"],
  ["22090883", "NGUYỄN THỊ HỒNG ĐOAN 💫 Slider Assembling Division"],
  ["22090884", "PHAN THỊ PHƯƠNG DUNG 💫 Slider Assembling Division"],
  ["23090293", "NGUYỄN THẾ DINH 💫 Slider Assembling Division"],
  ["23090294", "NGUYỄN BẢO ANH 💫 Slider Assembling Division"],
  ["23090299", "BẠCH NGỌC PHÚ 💫 Slider Assembling Division"],
  ["24020099", "TRỊNH MINH NHỰT TÀI 💫 Slider Assembling Division"],
  ["24030150", "NGUYỄN TRÍ DANH 💫 Slider Assembling Division"],
  ["24030151", "NGUYỄN MINH QUÂN 💫 Slider Assembling Division"],
  ["24030162", "HỒ THỊ THỦY TIÊN 💫 Slider Assembling Division"],
  ["24030219", "LÊ NGUYỄN YẾN NA 💫 Slider Assembling Division"],
  ["13111431", "ĐÀM VĂN TÍNH 💫 Slider BZ"],
  ["14020181", "TRẦN ĐỨC HÙNG 💫 Slider BZ"],
  ["14020239", "NGUYỄN TRỌNG HOÀN 💫 Slider BZ"],
  ["15111420", "PHẠM ĐÌNH VŨ 💫 Slider BZ"],
  ["15121511", "NGUYỄN THỊ HỒNG HẠNH 💫 Slider BZ"],
  ["15121515", "TRANG THỊ THÙY LINH 💫 Slider BZ"],
  ["16080752", "NGUYỄN CHIẾN NGỌC DŨNG 💫 Slider BZ"],
  ["18090920", "NGUYỄN HOÀNG DUY 💫 Slider BZ"],
  ["19050312", "LÊ GIA TUẤN 💫 Slider BZ"],
  ["19090746", "NGUYỄN NGỌC HẢI MY 💫 Slider BZ"],
  ["20090489", "LÊ MINH QUÂN 💫 Slider BZ"],
  ["22030397", "LÊ MINH VŨ 💫 Slider BZ"],
  ["23020018", "LÊ QUANG HẬU 💫 Slider BZ"],
  ["23120477", "HỒ ANH THƯƠNG 💫 Slider BZ"],
  ["24010029", "DƯƠNG CHÍ THIỆN 💫 Slider BZ"],
  ["12100393", "NGUYỄN MINH TÙNG 💫 Slider Division"],
  ["13030370", "NGUYỄN THỊ HUỲNH ANH 💫 Slider Division"],
  ["13081177", "NGUYỄN TRÍ HƯNG 💫 Slider Division"],
  ["14100976", "TRẦN CẢNH NẾT 💫 Slider Division"],
  ["18050550", "ÂU THỊ QUỲNH NHƯ 💫 Slider Division"],
  ["18090846", "TRẦN THỊ QUỲNH NHƯ 💫 Slider Division"],
  ["20030189", "NGUYỄN HỮU HIỂN 💫 Slider Division"],
  ["20100610", "TRƯƠNG CHÍ NGUYỄN 💫 Slider Division"],
  ["22040510", "NGUYỄN MINH QUÂN 💫 Slider Division"],
  ["23090245", "PHẠM THỊ HẢI NINH 💫 Slider Division"],
  ["24030191", "NGUYỄN VĂN ĐỨC 💫 Slider Division"],
  ["24040248", "NGUYỄN THỊ THÙY 💫 Slider Division"],
  ["24040263", "NGUYỄN THỊ HẰNG 💫 Slider Division"],
  ["24050377", "ĐINH VĂN DƯƠNG 💫 Slider Division"],
  ["13091260", "ĐÀO THỊ KIM THUẬN 💫 Special Chain"],
  ["15111417", "NGUYỄN HUY THUẬT 💫 Special Chain"],
  ["19020126", "PHAN CHÍ TOÀN 💫 Special Chain"],
  ["14050654", "PHẠM HOÀNG MINH 💫 Special Puller"],
  ["17040256", "NGUYỄN ĐỨC TÙNG 💫 Special Puller"],
  ["18111067", "LƯU THỊ NHUNG 💫 Special Puller"],
  ["20090486", "PHẠM THỊ THỦY 💫 Special Puller"],
  ["23070143", "TRẦN VĂN HOÀNG 💫 Special Puller"],
  ["23090246", "LƯƠNG KHÁNH HOÀNG 💫 Special Puller"],
  ["18121143", "NGUYỄN TIẾN DŨNG 💫 Twist cord"],
  ["19050318", "LÊ HOÀNG MINH 💫 Twist cord"],
  ["19101071", "LÊ CHÍ TRÍ 💫 Twist cord"],
  ["19111271", "HUỲNH CÔNG BÌNH 💫 Twist cord"],
  ["21111137", "TRẦN VĂN KHỞI 💫 Twist cord"],
  ["22070683", "VŨ ĐỨC TRƯỜNG 💫 Twist cord"],
  ["21111145", "HOÀNG NGỌC CHÂU 💫 VFO Assembling Division"],
  ["06020015", "TRẦN XUÂN THỦY 💫 Weaving Section"],
  ["07100020", "NGUYỄN THỊ THẢO 💫 Weaving Section"],
  ["07120024", "LƯU THỊ MỸ CHÂU 💫 Weaving Section"],
  ["10050028", "NGÔ THỊ LỆ NGỌC 💫 Weaving Section"],
  ["12100403", "MAI VĂN QUANG 💫 Weaving Section"],
  ["13081097", "HUỲNH TRÚC TRINH 💫 Weaving Section"],
  ["13121600", "ĐINH HIẾN THÀNH 💫 Weaving Section"],
  ["14010031", "HUỲNH THỊ XUÂN ĐÀO 💫 Weaving Section"],
  ["15070619", "LÂM HOÀNG OANH 💫 Weaving Section"],
  ["17070498", "HỒ THỊ KIM NGÂN 💫 Weaving Section"],
  ["18101049", "ĐẶNG THỊ KIM NGÂN 💫 Weaving Section"],
  ["19020085", "HUỲNH THANH LIÊM 💫 Weaving Section"],
  ["19020087", "NGUYỄN CHÍ NGHĨA 💫 Weaving Section"],
  ["19020139", "HÀ PHÚC THIỆN 💫 Weaving Section"],
  ["19101074", "NGUYỄN THỊ KÝ 💫 Weaving Section"],
  ["20110686", "PHẠM PHÚ CƯỜNG 💫 Weaving Section"],
  ["20110753", "NGUYỄN MINH NHỰT KHANH 💫 Weaving Section"],
  ["21040390", "ĐOÀN DUY THÁI 💫 Weaving Section"],
  ["21040504", "BÙI THỊ DIỆU HIỀN 💫 Weaving Section"],
  ["21060727", "LÊ HỒNG HẢO 💫 Weaving Section"],
  ["21060740", "NGUYỄN THỊ VÂN 💫 Weaving Section"],
  ["21060758", "THÂN THỊ HỒNG HOA 💫 Weaving Section"],
  ["22080752", "LÊ THỊ THÙY TRANG 💫 Weaving Section"],
  ["23090247", "LÊ MINH PHƯỚC 💫 Weaving Section"],
  ["24030143", "PHAN HOÀNG MỸ 💫 Weaving Section"],
  ["24050331", "NGUYỄN VĂN HẢI ĐĂNG 💫 Weaving Section"],
  ["99020040", "NGUYỄN THÀNH SƠN 💫 Weaving Section"],
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

function removeWinnerFromData(winnerCode) {
  const index = data.findIndex((item) => item[0] === winnerCode);
  if (index !== -1) {
    data.splice(index, 1);
  }
}

function spin() {
  let spinTime = 2800000; // 10 seconds
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
      removeWinnerFromData(finalItem[0]);
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

function downloadExcel() {
  // Create a workbook and worksheet
  const wb = XLSX.utils.book_new();
  const ws_data = [["Mã", "Tên", "Giải thưởng"]]; // Column headers

  // Add data
  winners.forEach((winner) => {
    ws_data.push([winner.code, winner.name, winner.prize]);
  });

  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  // Append worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Danh Sách Trúng Thưởng");

  // Write the workbook and trigger download
  XLSX.writeFile(wb, "DanhSachTrungThuong.xlsx");
}

// Add event listener to download button
document
  .getElementById("downloadButton")
  .addEventListener("click", downloadExcel);
