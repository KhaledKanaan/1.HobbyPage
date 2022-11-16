var date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    document.getElementById("date").innerHTML = `${day}.${month}.${year}`;