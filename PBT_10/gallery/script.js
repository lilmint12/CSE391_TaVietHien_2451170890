let page = 1;
let loading = false;
async function loadMorePhotos(){

    if(loading) return;

    loading = true;

    indicator.style.display = "block";

    const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=20`
    );

    const photos = await res.json();

    renderPhotos(photos);

    page++;

    loading = false;

    indicator.style.display = "none";
}
function renderPhotos(photos){

    photos.forEach(photo => {

        gallery.insertAdjacentHTML(
            "beforeend",
            `
            <img
                class="photo lazy"
                data-src="${photo.download_url}"
                alt=""
            >
        `
        );
    });

    observeImages();
}
const observer =
new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        loadMorePhotos();
    }
});
observer.observe(
    document.querySelector(
        "#load-trigger"
    )
);
const imageObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const img = entry.target;

            img.src =
                img.dataset.src;

            imageObserver.unobserve(img);
        }
    });
});
function observeImages(){

    document
        .querySelectorAll(".lazy")
        .forEach(img => {
            imageObserver.observe(img);
        });
}
gallery.addEventListener(
"click",
e => {

    if(e.target.tagName === "IMG"){

        modal.style.display = "flex";

        modalImg.src =
            e.target.src;
    }
});