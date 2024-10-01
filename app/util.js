export const remoteTranslate3D = () => {
    for (let i = 0; i < 6; i++) {
        const element = document.getElementsByClassName("swiper-slide")[i];
        let j = element.style.transform;
        element.style.transform = j.replace(/translate3d\(([^,]+), ([^,]+), [^)]+\)/, 'translate3d($1, $2, 0px)');
    }
    if (window) {
        const newWidth = window.innerWidth;
        if (newWidth <= 900) {
            setTimeout(() => {
                // const activeElement = document.getElementsByClassName("swiper-slide-active")[0];
                // const nextElement = document.getElementsByClassName("swiper-slide-next")[0];
                // const siblingElement = nextElement.nextElementSibling;
                document.getElementsByClassName("swiper-slide")[0].style.visibility = "hidden";
                document.getElementsByClassName("swiper-slide")[1].style.visibility = "hidden";
                document.getElementsByClassName("swiper-slide")[2].style.visibility = "hidden";

                document.getElementsByClassName("swiper-slide")[3].style.visibility = "visible";
                document.getElementsByClassName("swiper-slide")[4].style.visibility = "visible";
                document.getElementsByClassName("swiper-slide")[5].style.visibility = "visible";

                const activeElement = document.getElementsByClassName("swiper-slide")[3];
                const nextElement = document.getElementsByClassName("swiper-slide")[4];
                const siblingElement = document.getElementsByClassName("swiper-slide")[5];
                
                activeElement.style.transform = activeElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(0, $2, 0)'
                );
                nextElement.style.transform = nextElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(20px, -258px, 0)'
                );
                siblingElement.style.transform = siblingElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(40px, -300px, 0)'
                );
            }, 1)
        } else {
            document.getElementsByClassName("swiper-slide")[0].style.visibility = "visible";
            document.getElementsByClassName("swiper-slide")[1].style.visibility = "visible";
            document.getElementsByClassName("swiper-slide")[2].style.visibility = "visible";
            document.getElementsByClassName("swiper-slide")[3].style.visibility = "visible";
            document.getElementsByClassName("swiper-slide")[4].style.visibility = "visible";
            document.getElementsByClassName("swiper-slide")[5].style.visibility = "visible";
        }
    }
}