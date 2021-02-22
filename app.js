stringMessage1 = (msg1) => {
    console.log(msg1);
};

stringMessage2 = () => {
    setTimeout(() => {
        console.log("It's time to party!")
    }, 2000);
};

getWords = () => {
    // Log a word instantly
    console.log("Word One");

    // After 3 seconds, log another word
    setTimeout(() => {
        console.log("Word Two")
    }, 3000);

    // 2 secs after that, log a third word
    setTimeout(() => {
        console.log("Word Three")
    }, 5000);

    // Finally 1 second after the 3rd word, log a final word
    setTimeout(() => {
        console.log("Final Word")
    }, 6000);
};

done = () => {
    console.log("Job's done!");
}

countdown = (num, callback) => {

}

stringMessage1("What time is it...");
stringMessage2();
getWords();