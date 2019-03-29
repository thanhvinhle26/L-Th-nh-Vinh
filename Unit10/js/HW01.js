
		function load()
		{  

			var formDangKy=document.getElementsByTagName('form')[0];
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
			var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
			{if(formDangKy.hoVaTen.value.trim()=="")
			{
				document.getElementById('nameloc').innerHTML="Yêu cầu nhập đầy đủ họ tên";
				document.getElementById('nameloc').style.color = 'red';
				return false;
			}
			else if(formDangKy.hoVaTen.value.length<=8)
			{
				document.getElementById('nameloc').innerHTML="Yêu cầu nhập họ tên lớn hơn 8 kí tự";
				document.getElementById('nameloc').style.color = 'red';
				return false;
			}
			else {
				document.getElementById('nameloc').innerHTML="";
			}
		}
		{
			if(formDangKy.email.value.trim()=="")
			{
				document.getElementById('emailloc').innerHTML="Yêu cầu nhập đầy đủ email";
				document.getElementById('emailloc').style.color = 'red';
				return false;
			}
			
			else if(!filter.test(formDangKy.email.value))
			{
				document.getElementById('emailloc').innerHTML="Yêu cầu nhập đúng định dạng mail";
				document.getElementById('emailloc').style.color = 'red';
				return false;
			}
			else {
				document.getElementById('emailloc').innerHTML="";
			}
		}
			{
				if(formDangKy.sdt.value.trim()=="")
				{
					document.getElementById('sdtloc').innerHTML="Yêu cầu nhập đầy đủ SĐT";
					document.getElementById('sdtloc').style.color = 'red';
					return false;
				}

				else if(!vnf_regex.test(formDangKy.sdt.value))
				{
					document.getElementById('sdtloc').innerHTML="Yêu cầu SĐT bằng số";
					document.getElementById('sdtloc').style.color = 'red';
					return false;
				}
				else {
					document.getElementById('sdtloc').innerHTML="";
				}
			}
			{
				if(formDangKy.pass.value.trim()=="")
				{
					document.getElementById('mkloc').innerHTML="Yêu cầu nhập đầy đủ mật khẩu";
					document.getElementById('mkloc').style.color = 'red';
					return false;
				}
				else {
					document.getElementById('mkloc').innerHTML="";
				}
			}
			if(formDangKy.repass.value.trim()=="")
			{
				document.getElementById('xnmkloc').innerHTML="Yêu cầu xác nhận mật khẩu";
				document.getElementById('xnmkloc').style.color = 'red';
				return false;
			}
			
			if(formDangKy.pass.value!=formDangKy.repass.value)
			{
				document.getElementById('xnmkloc').innerHTML="Mật khẩu xác nhận phải giống mật khẩu nhập";
				document.getElementById('xnmkloc').style.color = 'red';
				return false;
			}
			
			




			alert("Đăng kí thành công");




		}

	