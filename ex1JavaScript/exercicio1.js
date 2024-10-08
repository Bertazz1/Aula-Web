//Criar referencias aos elementos que queremos manipular

const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3")


frm.addEventListener("submit",(e) =>{
    e.preventDefault();

    
    const nome=frm.value;
    const nota1=Number(frm.inNota1.value);
    const nota2=Number(frm.inNota2.value);
    const nota3=Number(frm.inNota3.value);
    const nota4=Number(frm.inNota4.value);
    const media=(nota1+nota2+nota3+nota4)/4;

    console.log(nome);
    resp1.innerText = `Olá ${nome} seja bem vindo, sua média é: ${media}`;
    if(media>=7.0){
        resp2.innerText =`Você foi aprovado`
        resp2.style.color = "green"
    }else if(media<=6.9&&media>=4){
    resp2.innerText =`Você está de recuperação`
    resp2.style.color = "blue"
    }else{ resp2.innerText =`Você mamou`
    resp2.style.color = "red"}
})

    