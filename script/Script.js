document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    alert("A pagina foi totalmente carregada e Js foi implantado!")

    //adicionando o evento de carregamento do documento (html)

    //evento para chamar o alert
    // alert("A página foi totalmente carregada e js foi implantado!")
    const form = document.querySelector('form')
    form.addEventListener('submit', loadUserData);


    //chamando a função para carregar os usuários
    loaduserDatalist();
})


function loadUserData(event) {
    event.preventDefault();
    let listUser = [] //array - vetores
    //capturando os valores e colocando eles dentro de um objeto (userData)
    const userData = {
        //capturando os valores e colocando eles dentro das propriedades ou também atributos
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }

    if (localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'))
    }
    
    listUser.push(userData)
    localStorage.setItem('users', JSON.stringify(listUser))

    console.log(listUser);
    window.location.reload();
}
const loaduserDatalist = () => {

    const tableData = document.getElementById('tableBodylist');
    if (localStorage.getItem('users')) {
        const listUser = JSON.parse(localStorage.getItem('users'))
        // json -> objeto
        let template = ""
        listUser.forEach(user => {
            template += `
            <tr>
                <td> ${user.name} </td>
                <td> ${user.email} </td>
                <td> ${user.age} </td>
            </tr>
            `

        });

        tableData.innerHTML = template
    }else{
        alert("nenhum usuário cadastrado")
    }
    }

