import openpyxl

# Mở file Excel với chế độ 'data_only' để lấy giá trị thay vì công thức
wb = openpyxl.load_workbook(r'C:\Users\Admin\Desktop\quaysotrungthuong\solve_list\list_name.xlsx', data_only=True)

# Lấy danh sách tất cả các sheet
sheets = wb.sheetnames

# Lấy sheet thứ hai
sheet = wb[sheets[1]]

# Đọc dữ liệu từ sheet và in hai cột đầu tiên
for row in sheet.iter_rows(min_row=1, max_col=3, max_row=sheet.max_row, values_only=True):
    if row[0] is not None and row[2] is not None:  # Kiểm tra nếu cả hai cột không rỗng
        col1 = row[0]
        col2 = row[1]
        col3 = row[2]
        print(f'["{col1}", "{col2.upper()} 🟢 {col3.upper()}"],')

# Đóng file Excel
wb.close()
