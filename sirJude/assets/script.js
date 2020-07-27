
    function validateForm()
    {
        let formName = document.getElementById("name").value;
        let formAge = document.getElementById("age").value;
        let errorM = document.getElementById("errorMessage");

        if(formName == "")
        {
            document.getElementById("name").focus();
            errorM.style.display = "block";
        }else if(formAge == ""){
            document.getElementById("age").focus();
            errorM.style.display = "block";
        }else{
            errorM.style.display = "none";
            createItem();
        }
    }

    function clearForm()
    {
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    }

    function createItem()
    {

        //! create variable use let or var
        //todo get value of textboxes
        let formName = document.getElementById("name").value;
        let formAge = document.getElementById("age").value;

        //! count elements inside items div
        let countDiv = document.getElementById("items").childElementCount;

        //! create div element
        let divElement = document.createElement("div");
        divElement.setAttribute("style","margin-left:10px; margin-top:10px; padding: 10px; border: 1px solid blue; width:20%")
        divElement.setAttribute("id", "item"+(countDiv+1));
        divElement.setAttribute("class", "item"+(countDiv+1));

        //! create element for div
        const nameLabelElement = document.createElement("h5");
        nameLabelElement.innerHTML = "Name:";

        const ageLabelElement = document.createElement("h5");
        ageLabelElement.innerHTML = "Age:";

        let nameValue = document.createElement("span");
        nameValue.innerHTML = "&nbsp;&nbsp;"+formName;
        

        let ageValue = document.createElement("span");
        ageValue.innerHTML = "&nbsp;&nbsp;"+formAge;

        //! create div element name items
        let ParentElement = document.getElementById("items");

        //! append divElement to Parent Element
        document.getElementById("items").appendChild(divElement);

        //! append all element to divElement
        divElement.appendChild(nameLabelElement);
        divElement.appendChild(nameValue);
        divElement.appendChild(ageLabelElement);
        divElement.appendChild(ageValue);
        
        clearForm();
    }