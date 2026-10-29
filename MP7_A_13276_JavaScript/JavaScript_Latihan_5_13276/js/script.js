function fn_ValForm(){
            var sMsg ="";

            if(document.getElementById("nama").value == ""){
                sMsg += "\n* Anda belum mengisikan nama";
            }
            if(document.getElementById("email").value == ""){
                sMsg += "\n* Anda belum mengisikan email";
            }
            if(document.getElementById("umur").value == ""){
                sMsg += "\n* Anda belum mengisikan umur";
                
                
            }
            if(document.getElementById("kategori").value == ""){
                sMsg += "\n* Anda belum memilih lomba";
            }

            var sUmur;

            if(sUmur >= 10 && sUmur <=18){
                if(sUmur <= 14){
                    alert("Kategori junior")
                }else{
                    alert("Kategori senior")
                }   
            }else{
                alert("Pilihan tidak valid")
            }



            

            if(sMsg != ""){
                alert("Peringatan:\n" + sMsg);
                return false;
            }else{
                return true;
            }

        }
