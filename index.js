let notifications = document. querySelector ( '.notifications' );
function validateForm() {
    let personName = document.getElementById("person_name").value;
    let crushName = document.getElementById("crush_name").value;
    let regex = /[^a-zA-Z\s]/;
    if (personName == "" || crushName == "") {
        createToast('error', 'fa-solid fa-circle-info', 'Cannot Find Name', 'Please fill Both Box.');
        return false;
    } else if (regex.test(personName) || regex.test(crushName)) {
        createToast('warning', 'fa-solid fa-triangle-exclamation', 'Warning', 'Names should not contain numbers or special characters.');
        return false;
    }
    return true;
}

       
		calculate-btn.addEventListener('click', () => {
			validateForm()
		});

		function  createToast( type, icon, title, text ){
         let newToast = document. createElement ( 'div' );
        newToast.innerHTML = `
            <div class = "toast ${type}">
                <i class = "${icon}"></i>
                <div class = "content">
                    <div class = "title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class = "fa-solid fa-xmark" onclick = "( this.parentElement). remove ( )"></i>
            </div>`;
        notifications. appendChild ( newToast );
        newToast.timeOut =  setTimeout (
            ( )=>newToast. remove ( ), 5000
        )
    }
