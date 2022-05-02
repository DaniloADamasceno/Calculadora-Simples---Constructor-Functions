function Calculadora() {

    this.display = document.querySelector('.display'); // Para selecionar o display 

    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    };

    this.capturaEnter = () => { // para capturar o evento de apertar Enter 
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.capturaClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el); // Adicionar o numero que esta sendo clicado no Display
            if (el.classList.contains('btn-clear')) this.Clear(); // para acionar o botão de CLEAR (Limpar Display)
            if (el.classList.contains('btn-del')) this.Del(); // para acionar o botão de DELETAR ( <<) 'Deletar um caractere '
            if (el.classList.contains('btn-eq')) this.realizaConta(); // para acionar o botão de =
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText; // Capturar todos os numeros digitados
        this.display.focus(); // para o foco ir para o Display 
    };

    this.Clear = () => this.display.value = ''; // para apagar tudo que esta no Display
    this.Del = () => this.display.value = this.display.value.slice(0, -1); // Para deletar uma caractere Digitado 

    this.realizaConta = () => {
        try {
            const acc_Calc = eval(this.display.value);

            if (!acc_Calc) {
                alert('Invalid operation.');
                return;
            }

            this.display.value = String(acc_Calc);
        } catch (e) {
            alert('Invalid operation.');
            return;
        }
    };

}


const calculadora = new Calculadora();
calculadora.inicia();