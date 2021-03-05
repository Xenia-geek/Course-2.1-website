        window.onload = function (e) {          
                var image = document.getElementById("image");
                var maxWidth = "48%";
                var minWidth = "45%";           
                if (document.documentElement.clientWidth > 768) {
                    image.onmouseover = function (e) { //срабатывает при заходе курсора на элемент
                    this.style.width = maxWidth;
                };
                    image.onmouseout = function (e) { //срабатывает при выходе курсора из элемента
                    this.style.width = minWidth; 
                };
                };          
        };                  