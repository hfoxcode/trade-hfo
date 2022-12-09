import React from "react";

export default function DenemeWidget() {
    // Kullanıcı sayısı
    let buyer = 10000;

    // Yüzde kaçı kazandı
    let challengeWinnerPercentage;

    let firstMonthWinnerPercentage;

    let totalIncome;











    for (let i = 0; i < 21; i++) {
        challengeWinnerPercentage = i;

        // Fon Miktarı
        let fund = 10000;

        // İlk ay yüzde kaçı kazandı
        for (let j = 0; j < 21; j++) {
            firstMonthWinnerPercentage = j;

            // Challenge'ı kazanan kişi sayısı.
            let challengeWinnerCount = buyer * (challengeWinnerPercentage / 100);

            //
            let price = 150; // 100$
            let firstIncome = buyer * price;

            let winnerIncome = challengeWinnerCount * (firstMonthWinnerPercentage / 100) * ((fund * 10) / 100) * (25 / 100);

            let loserOutcome = challengeWinnerCount * ((100 - firstMonthWinnerPercentage) / 100) * ((fund * 10) / 100);


            totalIncome = firstIncome + winnerIncome - loserOutcome;

            console.log("challengeWinnerPercentage: " + challengeWinnerPercentage + " firstMonthWinnerPercentage: " + firstMonthWinnerPercentage + " totalIncome: " + totalIncome);
        }

    }


}