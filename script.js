// Lấy danh sách người tham dự
let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
  })
  .catch((error) => {
    console.error("Lỗi khi tải dữ liệu từ file JSON:", error);
  });

// Lấy danh sách cơ cấu giải thưởng
let prizes = [];

async function fetchPrizes() {
  try {
    const response = await fetch(
      "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/prizes"
    );
    prizes = await response.json();
    updatePrizeCounter();
  } catch (error) {
    console.error("Error fetching prizes:", error);
  }
}

fetchPrizes();

// Tạo các biến xử lý
let currentPrizeIndex = 0;
let currentCount = 0;

const boxes = document.querySelectorAll(".box");
const spinButton = document.getElementById("spinButton");
const reSpinButton = document.getElementById("reSpinButton");
const result = document.getElementById("result");
const prizeCounter = document.getElementById("prizeCounter");

const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

// Random số
function getRandomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

// Cập nhật hiển thị số lượng giải quay
function updatePrizeCounter() {
  // Tìm giải thưởng hiện tại
  let currentPrize = prizes.find((prize) => prize.spun < prize.count);

  if (currentPrize) {
    // Cập nhật thông tin giải thưởng hiện tại
    prizeCounter.textContent = `💥 Đã quay ${currentPrize.spun} / ${currentPrize.count} GIẢI ${currentPrize.name} 💥`;
  } else {
    // Nếu không còn giải thưởng nào
    prizeCounter.textContent = "🎊 ĐẶC BIỆT 🎊";
  }
}
// Post MOCKAPI
function postPrizeUpdate(prize) {
  const apiUrl = "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/prizes"; // URL API của bạn

  // Tạo một đối tượng chứa dữ liệu cần gửi
  const data = {
    name: prize.name,
    spun: prize.spun,
    count: prize.count,
  };

  // Kiểm tra ID của phần thưởng
  if (!prize.id) {
    console.error("Prize ID is undefined. Cannot update prize.");
    return; // Thoát hàm nếu ID không xác định
  }

  // Gửi yêu cầu PUT đến API
  fetch(apiUrl + `/${prize.id}`, {
    // Thêm ID để cập nhật đúng phần thưởng
    method: "PUT", // Sử dụng PUT để cập nhật
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((updatedPrize) => {
      console.log("Prize updated successfully:", updatedPrize);
    })
    .catch((error) => {
      console.error("Error updating prize:", error);
    });
}

// Giải thưởng tiếp theo
function nextPrize() {
  const currentPrize = prizes[currentPrizeIndex];

  if (currentPrize.spun < currentPrize.count) {
    currentPrize.spun++;
  } else {
    currentPrizeIndex++;
  }
  postPrizeUpdate(currentPrize);

  updatePrizeCounter();
}
// Tự động xóa khỏi danh sách
function removeWinnerFromData(winnerCode) {
  const index = data.findIndex((item) => item[0] === winnerCode);
  if (index !== -1) {
    data.splice(index, 1);
  }
}

// Danh sách đã quay
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

// xử lý quay
function spin() {
  if (data.length === 0) {
    console.log("Chưa có dữ liệu, vui lòng đợi...");
    return;
  }

  let spinTime = 2800000;
  let interval = 100;
  let totalInterval = 0;
  result.textContent = "";
  winSound.pause();
  winSound.currentTime = 0;

  spinSound.play();
  spinButton.style.display = "none"; // Ẩn nút quay
  reSpinButton.style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  const spinInterval = setInterval(() => {
    if (totalInterval >= spinTime) {
      clearInterval(spinInterval);
      let finalItem;

      do {
        finalItem = data[Math.floor(Math.random() * data.length)];
      } while (spinHistory.includes(finalItem[0]));

      const finalDigits = finalItem[0].split("");
      boxes.forEach((box, index) => (box.textContent = finalDigits[index]));

      const resultInfo = finalItem[1].split(",");
      const currentPrize = prizes[currentPrizeIndex];
      result.innerHTML = `
        <h1>${resultInfo[0] || "Chưa có thông tin"}</h1>
        <p style="color: red;text-align: center;">GIẢI ${
          currentPrize.name || "Chưa có thông tin giải"
        }</p>
        <p>${resultInfo[1] || "Chưa có thông tin"}</p>
        <p>${resultInfo[2] || "Chưa có thông tin"}</p>
        <p>${resultInfo[3] || "Chưa có thông tin"}</p>
        <p>${resultInfo[4] || "Chưa có thông tin"}</p>
        <p>${resultInfo[5] || "Chưa có thông tin"}</p>
      `;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("result").style.display = "block";
      spinSound.pause();
      spinSound.currentTime = 0;
      winSound.play();
      removeWinnerFromData(finalItem[0]);
      saveSpinHistory();
      spinButton.style.display = "block";
      reSpinButton.style.display = "block";
    } else {
      boxes.forEach((box) => (box.textContent = getRandomDigit()));
      totalInterval += interval;
      interval *= 1.1;
    }
  }, interval);
}
document.addEventListener("click", function (event) {
  const resultDiv = document.getElementById("result");
  const overlay = document.getElementById("overlay");

  if (overlay.style.display === "block" && !resultDiv.contains(event.target)) {
    resultDiv.style.display = "none";
    overlay.style.display = "none";
  }
});
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

// Slide
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

// Danh sách người thắng
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
// Tự động xóa trùng nhau
function autoRemoveDuplicates() {
  setTimeout(() => {
    removeDuplicates();
  }, 10);
}

// Mock API danh sách đã lưu
const apiUrl = "https://67055d6f031fd46a830faee3.mockapi.io/members"; // Đường dẫn tới API member

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
    name: result.textContent || "Chưa rõ tên",
    prize: prizes[currentPrizeIndex].name,
  };

  // Gửi yêu cầu POST tới MockAPI
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentWinner),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Người trúng thưởng đã được lưu:", data);
      const saveSuccessMessage = document.getElementById("saveSuccessMessage");
      saveSuccessMessage.style.display = "block";
      result.textContent = ""; // Xóa kết quả sau khi lưu
      setTimeout(() => {
        saveSuccessMessage.style.display = "none";
      }, 1000);
      showWinnerList(); // Gọi hàm để hiển thị danh sách
    })
    .catch((error) => {
      console.error("Lỗi khi lưu người trúng thưởng:", error);
    });
}
// Lưu người thắng
document.getElementById("saveButton").addEventListener("click", () => {
  saveWinner();
});
// Danh sách người thắng
function showWinnerList() {
  const winnerList = document.getElementById("winnerList");
  winnerList.innerHTML = ""; // Xóa danh sách cũ

  // Gửi yêu cầu GET đến MockAPI để lấy danh sách người thắng
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((winners) => {
      winners.forEach((winner) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = `${winner.code} - ${winner.name} - Giải ${winner.prize}`;
        winnerList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Lỗi khi lấy danh sách người thắng từ MockAPI:", error);
    });
}

document.getElementById("listButton").addEventListener("click", () => {
  showWinnerList(); // Gọi hàm để hiển thị danh sách người thắng
  const winnerListModal = new bootstrap.Modal(
    document.getElementById("winnerListModal")
  );
  winnerListModal.show();
});

// Mặc định giải thưởng
const defaultPrizes = [
  {
    name: "BA",
    count: 7,
    spun: 0,
    id: "1",
  },
  {
    name: "NHÌ",
    count: 5,
    spun: 1,
    id: "2",
  },
  {
    name: "NHẤT",
    count: 3,
    spun: 1,
    id: "3",
  },
  {
    name: "ĐẶC BIỆT",
    count: 1,
    spun: 1,
    id: "4",
  },
];
// Tạo delay post
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Reset giải thưởng
async function resetPrizes() {
  const apiUrl = "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/prizes"; // Đường dẫn tới API

  // Xóa tất cả dữ liệu trong prizes
  const prizesResponse = await fetch(apiUrl);
  const prizes = await prizesResponse.json();

  for (const prize of prizes) {
    await fetch(`${apiUrl}/${prize.id}`, {
      method: "DELETE",
    });
  }

  console.log("Đã xóa tất cả dữ liệu trong prizes.");

  // Sau khi xóa, thêm lại dữ liệu mặc định
  for (const prize of defaultPrizes) {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prize),
    });

    if (!response.ok) {
      console.error(`Lỗi khi thêm prize: ${prize.name}`, response.statusText);
    } else {
      console.log(`Thêm prize: ${prize.name} thành công.`);
    }

    await delay(500); // Tạm dừng 500ms giữa các POST request
  }

  console.log("Đã thêm lại dữ liệu mặc định vào prizes.");
}
// Xóa tất cả người thắng + số lượng đã quay
async function deleteAllWinners() {
  const memberApiUrl = "https://67055d6f031fd46a830faee3.mockapi.io/members"; // Endpoint cho members
  const testApiUrl = "https://6702a224bd7c8c1ccd3f6b8a.mockapi.io/test"; // Endpoint cho test

  try {
    // Xóa tất cả người thắng từ members
    const membersResponse = await fetch(memberApiUrl);
    const members = await membersResponse.json();

    for (const member of members) {
      await fetch(`${memberApiUrl}/${member.id}`, {
        method: "DELETE", // Phương thức DELETE cho từng bản ghi
      });
    }
    console.log("Đã xóa tất cả người thắng trong members.");

    // Xóa tất cả người thắng từ test
    const testResponse = await fetch(testApiUrl);
    const tests = await testResponse.json();

    for (const test of tests) {
      await fetch(`${testApiUrl}/${test.id}`, {
        method: "DELETE", // Phương thức DELETE cho từng bản ghi
      });
    }
    console.log("Đã xóa tất cả người thắng trong test.");

    // Reset dữ liệu prizes về trạng thái mặc định
    await resetPrizes(); // Gọi hàm reset dữ liệu prizes
  } catch (error) {
    console.error("Lỗi khi xóa dữ liệu:", error);
  }
}
// Xử lý
document.getElementById("deleteButton").addEventListener("click", () => {
  const confirmation = confirm("Bạn có chắc chắn muốn xóa tất cả người thắng?");
  if (confirmation) {
    deleteAllWinners();

    // Hiển thị nền đen với hiệu ứng loading
    document.getElementById("loadingOverlay").style.display = "flex";

    // Sau 4 giây, tải lại trang
    setTimeout(() => {
      location.reload();
    }, 9000);
  }
});

// Tải danh sách excel
function downloadExcel() {
  // Gửi yêu cầu GET tới MockAPI để lấy danh sách người thắng
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((winners) => {
      // Chuyển đổi dữ liệu thành dạng phù hợp để xuất Excel
      const worksheetData = winners.map((winner) => ({
        Code: winner.code,
        Name: winner.name,
        Prize: winner.prize,
      }));

      // Tạo một worksheet từ dữ liệu
      const worksheet = XLSX.utils.json_to_sheet(worksheetData);

      // Tạo một workbook và thêm worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Winners");

      // Xuất file Excel
      XLSX.writeFile(workbook, "winners_list.xlsx");

      console.log("File Excel đã được tải về");
    })
    .catch((error) => {
      console.error("Lỗi khi tải danh sách người thắng:", error);
    });
}
document
  .getElementById("downloadButton")
  .addEventListener("click", downloadExcel);

// Gửi lịch sử quay lên MOCK
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
