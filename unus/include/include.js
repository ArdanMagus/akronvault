//alert(1)
fetch('sidebar.html') 
    .then(response => response.text()) 
    .then(data => { 
    document.getElementById('sidebar-container').innerHTML = data; 
}); 
