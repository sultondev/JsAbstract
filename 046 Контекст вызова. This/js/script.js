function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum())
}


// showThis(4, 10);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
}


obj.sum();



//// 1) this = window
//// 2) Контекст у методов объекта - сам объекту. Тоисть this = своюму радителю