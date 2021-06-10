let calculator = {
    read(n1,n2) {
       this.n1 = n1;
       this.n2 = n2;
    },
    sum() {
    return  this.n1 + this.n2;
    },
    mul() {
    return  this.n1 * this.n2;
    },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
