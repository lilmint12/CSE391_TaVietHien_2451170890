const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

let g = 0, k = 0, tb = 0, y = 0;
let max = -1, min = 11;
let bName = "", wName = "";
let tM = 0, tP = 0, tC = 0;
let tMale = 0, cMale = 0, tFemale = 0, cFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let avg = Math.round((s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3) * 10) / 10;
    let xl = "";

    if (avg >= 8.0) { xl = "Giỏi"; g++; } 
    else if (avg >= 6.5) { xl = "Khá"; k++; } 
    else if (avg >= 5.0) { xl = "Trung bình"; tb++; } 
    else { xl = "Yếu"; y++; }

    console.log(`| ${i + 1}   | ${s.name.padEnd(6)} | ${avg.toFixed(1)}  | ${xl.padEnd(11)} |`);

    if (avg > max) { max = avg; bName = s.name; }
    if (avg < min) { min = avg; wName = s.name; }

    tM += s.math; tP += s.physics; tC += s.cs;

    if (s.gender === "M") { tMale += avg; cMale++; } 
    else { tFemale += avg; cFemale++; }
}

console.log("\n--- THỐNG KÊ ---");
console.log(`Xếp loại -> Giỏi: ${g} | Khá: ${k} | TB: ${tb} | Yếu: ${y}`);
console.log(`Cao nhất: ${bName} (${max}) | Thấp nhất: ${wName} (${min})`);
console.log(`TB môn -> Toán: ${(tM/8).toFixed(1)} | Lý: ${(tP/8).toFixed(1)} | Máy tính: ${(tC/8).toFixed(1)}`);
console.log(`TB giới tính -> Nam: ${(tMale/cMale).toFixed(1)} | Nữ: ${(tFemale/cFemale).toFixed(1)}`);