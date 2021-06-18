const API_KEY = "01956d8fc9344def92ef5cd741734660"
async function details(){
    var phone_Number = document.getElementById('phone').value
    if(phone_Number.length < 12){
        alert("Please Enter Complete Number")
        alert("Please give Country code without + sign")
    }
    else if( phone_Number.length > 12){
        alert("Required only 12 number")
    }else{
        var temp=""
        const URL = `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${+phone_Number}`
        const response = await fetch(URL)
        var data = await response.json()
        document.getElementById('phone').value = ""
        if(data.location != "" && data.carrier !== "" ){
            document.getElementById('number').innerHTML = "Phone: "+data.phone
            document.getElementById('SIM').innerHTML = "SIM: " + data.carrier
            document.getElementById('Status').innerHTML = "Status:"+ data.valid ? "SIM IS ACTIVE" : "NOT-ACTIVE"
            document.getElementById('location').innerHTML = "Location: " + data.location  
        }
        else{
            alert(`Entered Number ${data.phone} is Invalid Number`)
        }   
    }    
}


