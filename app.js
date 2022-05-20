fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {

        if (data.total === 12) {
            const ul = document.querySelector('ul');
            data.data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.email;
                ul.appendChild(li)
            });
        } else {
            throw 'status code' + data

        }
    })
    .catch(err => {
        const h3 = document.createElement('h3');
        h3.textContent = err;
        h3.style.color = 'red';
        document.body.appendChild(h3)

    })