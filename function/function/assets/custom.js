const marksInput = document.getElementById("marks");
const message = document.getElementById("message");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");

function computeGrade(n) {
  if (n < 33) return { grade: "Fail", status: "fail" };
  if (n === 33) return { grade: "D", status: "pass" };
  if (n <= 45) return { grade: "C", status: "pass" };
  if (n <= 59) return { grade: "B", status: "pass" };
  if (n <= 74) return { grade: "A-", status: "pass" };
  if (n <= 89) return { grade: "A", status: "pass" };
  return { grade: "A+", status: "pass" };
}

function showResult(text, kind) {
  message.textContent = text;
  if (kind === "pass") {
    message.style.color = "#0f5132";
    message.style.background = "#d1e7dd";
    message.style.padding = "8px 12px";
    message.style.borderRadius = "8px";
  } else if (kind === "fail") {
    message.style.color = "#842029";
    message.style.background = "#f8d7da";
    message.style.padding = "8px 12px";
    message.style.borderRadius = "8px";
  } else {
    message.style.color = "#664d03";
    message.style.background = "#fff3cd";
    message.style.padding = "8px 12px";
    message.style.borderRadius = "8px";
  }
}

const listenarFuntion = function () {
  const raw = marksInput.value.trim();

  if (raw === "") {
    showResult("Marks din (0–100).", "error");
    return;
  }

  const num = Number(raw); //30

  if (Number.isNaN(num)) {
    showResult("Numeric value din.", "error");
    return;
  }

  if (num < 0 || num > 100) {
    showResult("0 theke 100 moddhe number din.", "error");
    return;
  }

  // convert to integer for grading
  const mark = Math.floor(num); //30
  const res = computeGrade(mark);
  if (res.status === "fail") {
    showResult(`Marks: ${mark} — Result: FAIL (grade: ${res.grade})`, "fail");
  } else {
    showResult(`Marks: ${mark} — PASS — Grade: ${res.grade}`, "pass");
  }
};

checkBtn.addEventListener("click", listenarFuntion);

clearBtn.addEventListener("click", () => {
  marksInput.value = "";
  message.textContent = "--";
  message.style.color = "";
  message.style.background = "transparent";
  message.style.padding = "";
  message.style.borderRadius = "";
});

function MyFunc() {}
