function validateForm(){
	var name=document.getElementById('name').value;
	var lastName=document.getElementById('lastname').value;
	var mail=document.getElementById('input-email').value;
	var password=document.getElementById('input-password').value;
	var biciTypes= document.querySelector('select').value;

	if( name == null || name.length <=2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false) {
		var nameDiv = document.getElementsByClassName('name-container')[0];
        var labelSpan = document.createElement('span');
        var nodoMessage = document.createTextNode('Ingresa un nombre válido!');
        labelSpan.appendChild(nodoMessage);
        nameDiv.appendChild(labelSpan);
		return false;
	} else if (name.substring(0,1) == name.substring(0,1).toUpperCase() == false){
		 var nameDiv = document.getElementsByClassName('name-container')[0];
        var labelSpan = document.createElement('span');
        var nodoMessage = document.createTextNode('Ingresa la primera letra en mayúscula');
        labelSpan.appendChild(nodoMessage);
        nameDiv.appendChild(labelSpan);
		return false;
	}

    if( lastName == null || lastName.length <=2 || /^\s+$/.test(lastName) || /^[a-zA-Z]*$/.test(lastName)==false){
		var nameDiv = document.getElementsByClassName('lastName-container')[0];
        var labelSpan = document.createElement('span');
        var nodoMessage = document.createTextNode('Ingresa un apellido válido!');
        labelSpan.appendChild(nodoMessage);
        nameDiv.appendChild(labelSpan);
		return false;    
	}
	else if (lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false){
		var nameDiv = document.getElementsByClassName('lastName-container')[0];
        var labelSpan = document.createElement('span');
        var nodoMessage = document.createTextNode('Ingresa la primera letra en mayúscula');
        labelSpan.appendChild(nodoMessage);
        nameDiv.appendChild(labelSpan);
		return false;
	}

    if (mail == null || mail.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail) != true){
		var nameDiv = document.getElementsByClassName('email-container')[0];
        var labelSpan = document.createElement('span');
        var nodoMessage = document.createTextNode('Ingresa una dirección de correo electrónico válida');
        labelSpan.appendChild(nodoMessage);
        nameDiv.appendChild(labelSpan);
		return false;  
	}

	if (password == null|| password.length<6){
	    var labelSpan = document.createElement('span');
        var secondLabelSpan = document.getElementById('input-password');
        var fatherElement= secondLabelSpan.parentNode;
        fatherElement.insertBefore(labelSpan, secondLabelSpan);
        var nodoMessage = document.createTextNode('Contraseña debe tener minimo 6 dígitos');
        labelSpan.appendChild(nodoMessage);
		return false;
	}
	else if (password=='123456'|| password =='098754' || password == 'password'){
		var labelSpan = document.createElement('span');
        var secondLabelSpan = document.getElementById('input-password');
        var fatherElement= secondLabelSpan.parentNode;
        fatherElement.insertBefore(labelSpan, secondLabelSpan);
        var nodoMessage = document.createTextNode('Contraseña no segura, elige otra');
        labelSpan.appendChild(nodoMessage);
		return false;
	}
	if (biciTypes == 0) {
		var labelSpan = document.createElement('span');
        var secondLabelSpan= document.querySelector('select');
        var fatherElement = secondLabelSpan.parentNode;
        fatherElement.insertBefore(labelSpan, secondLabelSpan);
        var nodoMessage = document.createTextNode('Elige tu tipo de bici!');
        labelSpan.appendChild(nodoMessage);
		return false;
	}
}