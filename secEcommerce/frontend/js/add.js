


//function to convert image  to base64
function convertBase64(file){

    return new Promise((resolve,reject)=>{
        //create object of file reader class
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        //when reading is done
        fileReader.onload = ()=>{
            resolve(fileReader.result)
        }

        //if error then reject with error
        fileReader.onerror = ()=>{
            reject(fileReader.error)
        }
    })
}


let preview = document.getElementById('preview')
let image_arr = []
let str = ""

document.getElementById('image').addEventListener('change',async(e)=>{
    const files = e.target.files
    
    for(const file of files){
        const base64 = await convertBase64(file)
        image_arr.push(base64)
        str+=`<img src=${base64}>`
    }
    preview.innerHTML = str
    
    
})




async function sendBack(e){

    e.preventDefault()

    let name = document.getElementById('name').value
    let brand = document.getElementById('brand').value
    let ram = document.getElementById('ram').value
    let rom = document.getElementById('rom').value
    let price = document.getElementById('price').value
    let color = document.getElementById('color').value
    let qty = document.getElementById('qty').value

    let data = {name,brand,ram,rom,price,color,qty,image_arr}

    
    let options = {
        
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify(data)
    }
    console.log(data);

    try{
        const response = await fetch('/api/add',options)

    if(response.status===201){
        alert("Data Added Successfully")
        window.location.href = "/"
    }

    else{
        alert("Please fill all the fields")
    }

    }

    catch(err){
        alert(response.error)
        console.log(err);
    }

    

    















}





