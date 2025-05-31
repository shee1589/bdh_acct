// static/script.js

// 샘플 데이터: 학번 + 이름 → 계정 정보 (ID, PW)
const studentAccounts = {
  "20230123_홍길동": {
    id: "20230123@school.edu",
    pw: "gildong123!"
  },
  "20230124_김영희": {
    id: "20230124@school.edu",
    pw: "younghee456!"
  },
  // 추가 데이터는 여기에 계속 넣으면 됨
};

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 기본 제출 막기

  const studentId = document.getElementById("student-id").value.trim();
  const studentName = document.getElementById("student-name").value.trim();
  const resultBox = document.getElementById("result");

  const key = `${studentId}_${studentName}`;
  const account = studentAccounts[key];

  if (account) {
    resultBox.innerHTML = `
      <p><strong>아이디:</strong> ${account.id}</p>
      <p><strong>비밀번호:</strong> ${account.pw}</p>
    `;
  } else {
    resultBox.innerHTML = `<p>일치하는 계정 정보를 찾을 수 없습니다.</p>`;
  }

  resultBox.style.display = "block";
});
