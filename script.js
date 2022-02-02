// let nota 

// function convertnota(valor){
//     if (valor < 60 ) {
//         nota = 'F'
//     } else if (valor >= 60 && valor <= 69){
//         nota = 'D'
//     }else if (valor >= 70 && valor <= 79){
//         nota = 'C'
//     }else if (valor >= 80 && valor <= 89){
//         nota = 'B'
//     }else if (valor >= 90){
//         nota = 'A'
//     }
//     console.log(nota)
// }
// convertnota(50)

// let family = {
//     receitas: [2500, 100, 100.34, 100.65],
//     despesas: [1000, 500.45]
// }
// console.log(family)
// function soma(array) {
//     let total = 0;
//     for (let value of array) {
//         console.log(value);
//         total += value;
//     }
//     return total
// }
// function saldo() {
//     const totreceitas = soma(family.receitas)
//     const totdespesas = soma(family.despesas)
//     const saldo = totreceitas - totdespesas;
//     const balance = saldo >=0;
//     let text = "negativo"
//     if (balance) {
//         text = 'positivo'
//     }
//     console.log(totreceitas)
//     console.log(totdespesas)
//     console.log(`seu saldo é ${text}: ${saldo.toFixed(2)} `)
// }
// sistemarec(family)    
//     // let receitas = []
//     // let despesas = []
//     saldo = receitas - despesas
//     if (saldo < 0) {
//         saldopos = 'negativo'
//     } else {
//         saldopos = 'positivo'
//     }
//  console.log(saldopos)    
//  console.log(saldo)    

// Celsius
let temp
let valor = 0;
    
function convertCF(temp, valor) {
    let valortemp = 0;
    if (temp === 'C') {
        F = valor * 9/5 + 32;
        let tem = 'F'
        // return valortemp
    console.log(`A temperatura é: ${F}  ${tem}`)

    } else{
        C = (valor - 32) * 5/9
        let tem = 'C'

        // return valortemp
    console.log(`A temperatura é: ${C}  ${tem}`)

    }
}
// C = (F - 32) * 5/9;
// F = C * 9/5 + 32
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists =  degree.toUpperCase().includes('F')
    //fluxo de erro 
    if (!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }
    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit -32) * 5/9
    let degreeLetter = 'C';
    



// fluxo alternativo C -> F
if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C",""));
    updatedDegree = updatedDegree.toFixed(2);
    formula = celsius => celsius * 9/5 + 32;
    degreeLetter = 'F';
}

return formula(updatedDegree) + degreeLetter
}

try {
    console.log(transformDegree('69F'));
    console.log(transformDegree('21C'));
    console.log(transformDegree('69Z'));
} catch (error) {
    console.log(error.message)
}


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
function contarCatg(params) {

    const totcateg = booksByCategory.length
    console.log(`Total de categoria:  `,totcateg);

    for (let category of booksByCategory) {
        console.log(`Total de livros da categoria:  `,category.category);
        console.log(category.books.length);
    }
    
    let authors = [];
    for (let category of booksByCategory) {
        for(let book of category.books){
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)  
            }
        }
    }
    console.log(`Total autor:`, authors.length)
    
    // console.log(`O Array tem ${totcateg} categorias e ${xautor} autores.`)
}
function bookOfAuguto() {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books){
            if (book.author === 'Augusto Cury') {
                books.push(book.title)  
            }
        }
    }
    console.log(`Total Auguto Cury:`, books.length)
    console.log(`Livro de Auguto Cury:`, books)
}
function bookOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books){
            if (book.author === author) {
                books.push(book.title)  
            }
        }
    }
    console.log(`Total Auguto Cury:`, books.length)
    console.log(`Livro do autor: ${author} : ${books.join(", ")}`)
}

contarCatg();
bookOfAuguto();
bookOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter');