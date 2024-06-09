function calculateResults() {
    // Kurul notları ve kredilerini al
    const credits = [7, 10, 7, 6, 8, 6, 8];
    const grades = [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value),
        parseFloat(document.getElementById('grade5').value),
        parseFloat(document.getElementById('grade6').value),
        parseFloat(document.getElementById('grade7').value)
    ];

    // Kurul ortalamasını hesapla
    let totalCredits = 0;
    let weightedSum = 0;
    
    for (let i = 0; i < grades.length; i++) {
        totalCredits += credits[i];
        weightedSum += grades[i] * credits[i];
    }

    const committeeAverage = weightedSum / totalCredits;
    
    // Final notunu hesapla
    const anatomi_zilli_avg = parseFloat(document.getElementById('anatomi_zilli_avg').value);
    const anatomi_zilli = parseFloat(document.getElementById('anatomi_zilli').value);
    const fizyoloji_sozlu = parseFloat(document.getElementById('fizyoloji_sozlu').value);
    const histoloji_sozlu = parseFloat(document.getElementById('histoloji_sozlu').value);
    const final_test2 = parseFloat(document.getElementById('final_test2').value);
    const tus_dus = parseFloat(document.getElementById('tus_dus').value);
    
    let final_score = (anatomi_zilli_avg * 12.5 + anatomi_zilli * 12.5 + fizyoloji_sozlu * 15 + histoloji_sozlu * 10 + final_test2 * 50) / 100;
    final_score += tus_dus * 0.1;
    
    // Yıl sonu ortalamasını hesapla
    const committeeContribution = committeeAverage * 0.6;
    const finalContribution = final_score * 0.4;
    const overall_grade = committeeContribution + finalContribution;

    // Sonuçları göster
    let resultText = `Kurul Ortalamanız: ${committeeAverage.toFixed(2)}<br>Final Notunuz: ${final_score.toFixed(2)}<br>Yıl Sonu Ortalamanız: ${overall_grade.toFixed(2)} - `;
    if (overall_grade >= 60) {
        resultText += `<span style="color: green;">✔ Geçtiniz</span>`;
    } else {
        const neededScore = (60 - committeeContribution) / 0.4;
        resultText += `<span style="color: red;">✘ Kaldınız</span> - Geçmek için finalde almanız gereken not: ${neededScore.toFixed(2)}`;
    }

    document.getElementById('results').innerHTML = resultText;
}
