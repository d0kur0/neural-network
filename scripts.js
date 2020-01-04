const uploadArea = document.querySelector('.upload-file__area');
const uploadField = document.querySelector(".upload-file__input");
const progress = document.querySelector(".progress");
const result = document.querySelector('.result');

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const startProgress = () => {
    const progressOuterLine = progress.querySelector(".progress__outer-line");
    const progressLabel = progress.querySelector(".progress__label");

    let width = 0;
    let timeoutCallback = () => {
        width = width + randomInteger(1, 5);
        width = width > 100 ? 100 : width;

        if (width > 10) {
            progressLabel.textContent = "Image processing";
        }

        progressOuterLine.style.width = `${width}%`;

        if (width < 100) {
            setTimeout(timeoutCallback, randomInteger(200, 1000));
        } else {
            progress.classList.add('hidden');
            result.classList.remove('hidden');
        }
    };
    let timeout = setTimeout(timeoutCallback, 0)
};

uploadArea.addEventListener("click", e => {
    uploadField.click();
});

uploadField.addEventListener("change", e => {
    uploadArea.classList.add("hidden");
    progress.classList.remove('hidden');

    startProgress();
});

result.querySelector('.result__download').addEventListener("click", e => {
    const video = result.querySelector('.result__view-video');
    const wrapper = result.querySelector('.result__view-wrapper');

    wrapper.classList.remove("hidden");
    video.addEventListener("ended", () => video.play());
    video.play();
});