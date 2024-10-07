let data = [];

fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
  })
  .catch((error) => {
    console.error("Lỗi khi tải dữ liệu từ file JSON:", error);
  });

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
  document.getElementById("result").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  const spinInterval = setInterval(() => {
    if (totalInterval >= spinTime) {
      clearInterval(spinInterval);
      const finalItem = data[Math.floor(Math.random() * data.length)];
      const finalDigits = finalItem[0].split("");
      boxes.forEach((box, index) => (box.textContent = finalDigits[index]));

      const resultInfo = finalItem[1].split(",");

      // Cập nhật nội dung HTML
      result.innerHTML = `
        <h1>${resultInfo[0] || "Chưa có thông tin"}</h1>
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
      reSpinButton.style.display = "block";
      removeWinnerFromData(finalItem[0]);
      saveSpinHistory();
    } else {
      boxes.forEach((box) => (box.textContent = getRandomDigit()));
      totalInterval += interval;
      interval *= 1.1;
    }
  }, interval);
}
document.addEventListener("click", function (event) {
  document.addEventListener("click", function (event) {
    const resultDiv = document.getElementById("result");
    const overlay = document.getElementById("overlay");

    if (
      overlay.style.display === "block" &&
      !resultDiv.contains(event.target)
    ) {
      resultDiv.style.display = "none";
      overlay.style.display = "none";
    }
  });
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
