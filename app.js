stringMessage1 = (msg1) => {
    console.log(msg1);
};

function stringMessage2() {
    setTimeout(() => {
        console.log("It's time to party!")
    }, 2000);
};

function getWords() {
    console.log("Word One");

    setTimeout(() => {
        console.log("Word Two")
    }, 3000);

    setTimeout(() => {
        console.log("Word Three")
    }, 5000);

    setTimeout(() => {
        console.log("Final Word")
    }, 6000);
}

stringMessage1("What time is it...");
stringMessage2();
getWords();