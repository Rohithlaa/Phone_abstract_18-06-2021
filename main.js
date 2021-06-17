var API_Key = "RMH04Gt3UGfpMAQ10FIyBNlWo4UEv5mk"
const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_Key}`
async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    var temp=""
    for(var i=0;i<data.results.length;i++){
        document.getElementById('data').innerHTML = " "
        temp += "<tr>"
        temp+= "<td>" + i + "</td>"
        temp+= "<td>" + data.results[i].display_name+"</td>"
        temp+= "<td>" + data.results[i].list_name+"</td>"
        temp+= "<td>" + data.results[i].newest_published_date+"</td>"
        temp+= "<td>" + data.results[i].oldest_published_date+"</td>"
        temp+= "<td>"+data.results[i].updated+"</td></tr>"
    }
    document.getElementById('data').innerHTML = temp
    var foot = ""
    foot+="<p>"+data.copyright+"</p>"
    document.getElementById('foot').innerHTML=foot
}
funcName(url)
