

let card = document.getElementById('cont')


async function loadData(){

    const response = await fetch('/api/load')


    const data = await response.json()

    let str = ""

    data.forEach(element => {
        
        str+=`
        <div class="card">
                <div class="m2">
                   
                    <img src="${element.image_arr[0]}" alt="no preview" srcset="" class="images">
                    <hr>
                </div>

                <div class="bt">
                    <label for=""> ${element.name}</label> <br>
                    <label for="">${element.price}</label><br>
                    <a href="view.html?id=${element._id}" style="text-decoration: none;"><button id="btn" style="width: auto;">View Details</button></a>
                </div>
            </div>
        

        
        `
    });
    card.innerHTML = str

}



loadData()