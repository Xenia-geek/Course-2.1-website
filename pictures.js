        window.onload = function (e) {          
                var image = document.getElementById("image");
                var maxWidth = "48%";
                var minWidth = "45%";           
                if (document.documentElement.clientWidth > 768) {
                    image.onmouseover = function (e) { //����������� ��� ������ ������� �� �������
                    this.style.width = maxWidth;
                };
                    image.onmouseout = function (e) { //����������� ��� ������ ������� �� ��������
                    this.style.width = minWidth; 
                };
                };          
        };                  