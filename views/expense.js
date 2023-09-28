const ul = document.querySelector('ul')


window.addEventListener('load' ,async ()=>{
    const response = await axios.get('http://localhost:4000/user');
    console.log(response)
    response.data.result[0].forEach(users =>{
        display(users);
    })

})  

function add(event){
    event.preventDefault();
    const id= Math.random();
    const amount= event.target.amount.value;
    const description= event.target.description.value;
    const category= event.target.category.value;

    const user={
        id,amount,description,category
    }
    axios.post('http://127.0.0.1:4000/user/expense', user).then((user)=>{
       console.log(user)
       display(user);
    })
}

function display(data){
    const li = document.createElement('li');
        console.log(data)
        const span1= document.createElement('span');
        const span2= document.createElement('span');
        const span3= document.createElement('span');
        span1.textContent = data.amount;
        span2.textContent = data.description;
        span3.textContent= data.category;

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);

        const button= document.createElement('button');
        button.textContent = "DELETE";
        button.onclick  =()=>{
            axios.delete('http://localhost:4000/user/delete/' + data.id)
            .then((res)=>{
                if(res.status == 200)
                    ul.removeChild(li)
                
            })
            .catch(e => console.log(e))
        }
        li.appendChild(button);
        ul.appendChild(li);
}