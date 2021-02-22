stringMessage1 = (msg1) => {
    console.log(msg1);
};

function stringMessage2() {
    setTimeout(() => {
        console.log("It's time to party!")
    }, 2000);
};

stringMessage1("What time is it...");
stringMessage2();