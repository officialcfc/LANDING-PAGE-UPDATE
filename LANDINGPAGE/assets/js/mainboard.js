document.addEventListener("DOMContentLoaded", () => {
    const totalHours = 216;
    const workedHours = 189;
    const shortageHours = 23;
    const overtimeHours = 56;
  
    // Calculate percentages for progress bars
    document.querySelector(".progress.worked").style.width = `${(workedHours / totalHours) * 100}%`;
    document.querySelector(".progress.shortage").style.width = `${(shortageHours / totalHours) * 100}%`;
    document.querySelector(".progress.overtime").style.width = `${(overtimeHours / totalHours) * 100}%`;
  });
  