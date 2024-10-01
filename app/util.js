export const remoteTranslate3D = () => {
    for (let i = 0; i < 6; i++) {
        const element = document.getElementsByClassName("swiper-slide")[i];
        let j = element.style.transform;
        element.style.transform = j.replace(/translate3d\(([^,]+), ([^,]+), [^)]+\)/, 'translate3d($1, $2, 0px)');
        // console.log(element.style.transform.match(/calc\([^)]+\s-\s(\d+px)\)/))
    }
    if (window) {
        const newWidth = window.innerWidth;
        if (newWidth <= 900) {
            setTimeout(() => {
                const activeElement = document.getElementsByClassName("swiper-slide-active")[0];
                const nextElement = document.getElementsByClassName("swiper-slide-next")[0];
                const siblingElement = nextElement.nextElementSibling;

                activeElement.style.transform = activeElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(0, $2, 0)'
                );
                nextElement.style.transform = nextElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(20px, -258px, 0)'
                );
                // nextElement.style.transform = updatedTransform;
                siblingElement.style.transform = siblingElement.style.transform.replace(
                    /translate3d\(([^,]+), ([^,]+), ([^)]+)\)/,
                    'translate3d(40px, -300px, 0)'
                );
            }, 100)
        }
    }
}