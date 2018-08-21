function validateForm() {
				var x = document.forms["form"]["firstName"].value;
				var len=x.length;
				if (x == "") {
					text = "*Required field";
					document.getElementById("requiredFirstName").innerHTML = text;
					return false;
				}
				var index=0;
				for(index=0;index<len;index++)
					{
					if((x.charCodeAt(index)>=97&&x.charCodeAt(index)<=122)||(x.charCodeAt(index)>=65&&x.charCodeAt(index)<=90))
						{
						}
					else if(x[index]==" ")
						{
						if((index+1<len&&x[index+1]==" ")||(index==len-1&&x[index]==" "))
							{
							text = "*Remove extra space";
							document.getElementById("requiredFirstName").innerHTML = text;
							return false;
							}
						text = "*Only first name";
						document.getElementById("requiredFirstName").innerHTML = text;
						return false;
						}
					else
						{
						text = "*only alphabets";
						document.getElementById("requiredFirstName").innerHTML = text;
						return false;
						}
					}
				document.getElementById("requiredFirstName").innerHTML ="";
				x = document.forms["form"]["LastName"].value;
				len=x.length;
				for(index=0;index<len;index++)
					{
					if((x.charCodeAt(index)>=97&&x.charCodeAt(index)<=122)||(x.charCodeAt(index)>=65&&x.charCodeAt(index)<=90))
						{
						}
					else if(x[index]==" ")
						{
						if((index+1<len&&x[index+1]==" ")||(index==len-1&&x[index]==" "))
							{
							text = "*Remove extra space";
							document.getElementById("lastName").innerHTML = text;
							return false;
							}
						text = "*Only Last name";
						document.getElementById("lastName").innerHTML = text;
						return false;
						}
					else
						{
						text = "*Only alphabets";
						document.getElementById("lastName").innerHTML = text;
						return false;
						}
					}
				document.getElementById("lastName").innerHTML ="";
				x = document.forms["form"]["PhoneNumber"].value;
				len=x.length;
				if (x == "") {
					text = "*Required field";
					document.getElementById("Pnumber").innerHTML = text;
					return false;
				}
				if(len>10)
					{
					text = "*Only 10 digits allowed";
					document.getElementById("Pnumber").innerHTML = text;
					return false;
					}
				for(index=0;index<len;index++)
					{
					if((x.charCodeAt(index)>=48&&x.charCodeAt(index)<=57))
						{
						}
					else
						{
						text = "*Only numbers";
						document.getElementById("Pnumber").innerHTML = text;
						return false;
						}
					}
				document.getElementById("Pnumber").innerHTML ="";
				document.getElementById("cities").innerHTML ="";
				x = document.forms["form"]["Email"].value;
				len=x.length;
				var reg=/^[a-zA-Z0-9]+[a-zA-Z0-9._]*@([a-zA-Z]{2,})\.([a-zA-Z]+)$/;
				if(reg.test(x)==false)
					{
					text = "*Invalid email address";
					document.getElementById("EmailID").innerHTML = text;
					return false;
					}
				document.getElementById("EmailID").innerHTML ="";
				x=document.getElementById("city").value;
				if(x=="select")
					{
					text = "*Select a city";
					document.getElementById("cities").innerHTML = text;
					return false;
					}
				if(document.getElementById("male").checked == false&&document.getElementById("female").checked==false&&document.getElementById("trans").checked==false)
					{
					text = "*Select a gender";
					document.getElementById("radio").innerHTML = text;
					return false;
					}
			}