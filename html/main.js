var count = 0;
var thisCount = 0;
var music = $("#music")[0];
console.log(music);
music.play();
music.play("loop");

const loaderIndicator = document.querySelector(".loading-percent");

window.addEventListener("message", (e) => {
    if (e.data.eventName === "loadProgress") {
        const loaded = parseInt(e.data.loadFraction * 100);
        $(".loading").css("width", `${loaded}%`);
        loaderIndicator.innerHTML = `${loaded}%`;
    }
});




window.addEventListener("message", function(e) {
    if (e.data.eventName === "loadProgress") {
        loadProgress(parseInt(e.data.loadFraction * 100));
        $(".loading-percent").text(loadProgress(parseInt(e.data.loadFraction * 100)));
        // $(".loading").css("width", `${(e.data.loadFraction * 100).toFixed(0)}%`);
    }
});

window.addEventListener('message', function(e) {
    (handlers[e.data.eventName] || function() {})(e.data);
});

$(document).ready(function() {
    Sounds.forEach((item, index) => {
        let template3 = `
        <source id="sound"  src="./sound/${item.music}.mp3">
      `;

        $("#music").append(template3);
    });
})

$(document).ready(function() {
    $(".logo").attr('src', `./images/${logo}`);
    $(":root").css("--strokecolor", `${strokecolor}`);
    $(":root").css("--gradient", `${maincolor}`);
    $(":root").css("--lights", `${lightscolor}`);
})


$(document).ready(function() {
    Socials.forEach((item, index) => {
        let template2 = `
        <div class="social-box" >
            <a target="_blank" href="${item.link}">
            <img src="./images/${item.socialicon}" class="social-icon">
            <p class="social-name">${item.socialname}</p>
            <p class="copy-clip">${item.copytext}</p>
        </div>
        <script>
      `;


        $(".social-wrapper").append(template2);
    });
})






$(document).ready(function() {
    Staffs.forEach((item, index) => {
        let template = `
        <div class="admin-box">
            <img src="./images/${item.profilepicture}" class="pp">
            <p class="admin-rank">${item.rank}</p>
            <p class="admin-description">${item.description}</p>
        </div>
      `;

        $(".admin-wrapper").append(template);
    });
})

$(document).ready(function() {
    LoadingBarColor.forEach((item, index) => {
        let template4 = `
        <svg class="loading-svg" viewBox="0 0 566 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8357 1.30419e-08L31.9876 3.65173e-08L23.5699 23.5696L8.41797 23.5696L16.8357 1.30419e-08Z" fill="url(#paint0_radial_31_23)"/>
                            <path d="M9.12747 23.0696L17.1881 0.5L31.2781 0.5L23.2175 23.0696L9.12747 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M38.7214 1.30419e-08L53.8733 3.65173e-08L45.4556 23.5696L30.3037 23.5696L38.7214 1.30419e-08Z" fill="url(#paint1_radial_31_23)"/>
                            <path d="M31.0132 23.0696L39.0738 0.5L53.1638 0.5L45.1032 23.0696L31.0132 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M60.6077 1.30419e-08L75.7596 3.65173e-08L67.3418 23.5696L52.1899 23.5696L60.6077 1.30419e-08Z" fill="url(#paint2_radial_31_23)"/>
                            <path d="M52.8994 23.0696L60.96 0.5L75.0501 0.5L66.9895 23.0696L52.8994 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M82.4939 1.30419e-08L97.6458 3.65173e-08L89.2281 23.5696L74.0762 23.5696L82.4939 1.30419e-08Z" fill="url(#paint3_radial_31_23)"/>
                            <path d="M74.7857 23.0696L82.8463 0.5L96.9363 0.5L88.8757 23.0696L74.7857 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M104.38 1.30419e-08L119.532 3.65173e-08L111.114 23.5696L95.9619 23.5696L104.38 1.30419e-08Z" fill="url(#paint4_radial_31_23)"/>
                            <path d="M96.6714 23.0696L104.732 0.5L118.822 0.5L110.761 23.0696L96.6714 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M126.266 1.30419e-08L141.418 3.65173e-08L133 23.5696L117.848 23.5696L126.266 1.30419e-08Z" fill="url(#paint5_radial_31_23)"/>
                            <path d="M118.558 23.0696L126.618 0.5L140.708 0.5L132.648 23.0696L118.558 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M148.152 1.30419e-08L163.304 3.65173e-08L154.886 23.5696L139.734 23.5696L148.152 1.30419e-08Z" fill="url(#paint6_radial_31_23)"/>
                            <path d="M140.444 23.0696L148.504 0.5L162.594 0.5L154.534 23.0696L140.444 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M170.038 1.30419e-08L185.19 3.65173e-08L176.772 23.5696L161.62 23.5696L170.038 1.30419e-08Z" fill="url(#paint7_radial_31_23)"/>
                            <path d="M162.33 23.0696L170.39 0.5L184.48 0.5L176.42 23.0696L162.33 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M191.924 1.30419e-08L207.076 3.65173e-08L198.658 23.5696L183.506 23.5696L191.924 1.30419e-08Z" fill="url(#paint8_radial_31_23)"/>
                            <path d="M184.216 23.0696L192.276 0.5L206.366 0.5L198.306 23.0696L184.216 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M213.81 1.30419e-08L228.962 3.65173e-08L220.544 23.5696L205.393 23.5696L213.81 1.30419e-08Z" fill="url(#paint9_radial_31_23)"/>
                            <path d="M206.102 23.0696L214.163 0.5L228.253 0.5L220.192 23.0696L206.102 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M235.696 1.30419e-08L250.848 3.65173e-08L242.43 23.5696L227.278 23.5696L235.696 1.30419e-08Z" fill="url(#paint10_radial_31_23)"/>
                            <path d="M227.988 23.0696L236.048 0.5L250.138 0.5L242.078 23.0696L227.988 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M257.582 1.30419e-08L272.734 3.65173e-08L264.316 23.5696L249.165 23.5696L257.582 1.30419e-08Z" fill="url(#paint11_radial_31_23)"/>
                            <path d="M249.874 23.0696L257.935 0.5L272.025 0.5L263.964 23.0696L249.874 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M279.469 1.30419e-08L294.62 3.65173e-08L286.203 23.5696L271.051 23.5696L279.469 1.30419e-08Z" fill="url(#paint12_radial_31_23)"/>
                            <path d="M271.76 23.0696L279.821 0.5L293.911 0.5L285.85 23.0696L271.76 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M301.354 1.30419e-08L316.506 3.65173e-08L308.088 23.5696L292.937 23.5696L301.354 1.30419e-08Z" fill="url(#paint13_radial_31_23)"/>
                            <path d="M293.646 23.0696L301.707 0.5L315.797 0.5L307.736 23.0696L293.646 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M323.24 1.30419e-08L338.392 3.65173e-08L329.975 23.5696L314.823 23.5696L323.24 1.30419e-08Z" fill="url(#paint14_radial_31_23)"/>
                            <path d="M315.532 23.0696L323.593 0.5L337.683 0.5L329.622 23.0696L315.532 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M345.127 1.30419e-08L360.279 3.65173e-08L351.861 23.5696L336.709 23.5696L345.127 1.30419e-08Z" fill="url(#paint15_radial_31_23)"/>
                            <path d="M337.418 23.0696L345.479 0.5L359.569 0.5L351.509 23.0696L337.418 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M367.012 1.30419e-08L382.164 3.65173e-08L373.747 23.5696L358.595 23.5696L367.012 1.30419e-08Z" fill="url(#paint16_radial_31_23)"/>
                            <path d="M359.304 23.0696L367.365 0.5L381.455 0.5L373.394 23.0696L359.304 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M388.899 1.30419e-08L404.051 3.65173e-08L395.633 23.5696L380.481 23.5696L388.899 1.30419e-08Z" fill="url(#paint17_radial_31_23)"/>
                            <path d="M381.19 23.0696L389.251 0.5L403.341 0.5L395.28 23.0696L381.19 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M410.785 1.30419e-08L425.937 3.65173e-08L417.519 23.5696L402.367 23.5696L410.785 1.30419e-08Z" fill="url(#paint18_radial_31_23)"/>
                            <path d="M403.077 23.0696L411.137 0.5L425.227 0.5L417.167 23.0696L403.077 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M432.671 1.30419e-08L447.823 3.65173e-08L439.405 23.5696L424.253 23.5696L432.671 1.30419e-08Z" fill="url(#paint19_radial_31_23)"/>
                            <path d="M424.962 23.0696L433.023 0.5L447.113 0.5L439.052 23.0696L424.962 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M454.557 1.30419e-08L469.709 3.65173e-08L461.291 23.5696L446.139 23.5696L454.557 1.30419e-08Z" fill="url(#paint20_radial_31_23)"/>
                            <path d="M446.849 23.0696L454.909 0.5L468.999 0.5L460.939 23.0696L446.849 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M476.443 1.30419e-08L491.595 3.65173e-08L483.177 23.5696L468.025 23.5696L476.443 1.30419e-08Z" fill="url(#paint21_radial_31_23)"/>
                            <path d="M468.735 23.0696L476.795 0.5L490.886 0.5L482.825 23.0696L468.735 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M498.329 1.30419e-08L513.481 3.65173e-08L505.064 23.5696L489.912 23.5696L498.329 1.30419e-08Z" fill="url(#paint22_radial_31_23)"/>
                            <path d="M490.621 23.0696L498.682 0.5L512.772 0.5L504.711 23.0696L490.621 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M520.215 1.30419e-08L535.367 3.65173e-08L526.949 23.5696L511.797 23.5696L520.215 1.30419e-08Z" fill="url(#paint23_radial_31_23)"/>
                            <path d="M512.507 23.0696L520.567 0.5L534.657 0.5L526.597 23.0696L512.507 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M542.101 1.30419e-08L557.253 3.65173e-08L548.835 23.5696L533.684 23.5696L542.101 1.30419e-08Z" fill="url(#paint24_radial_31_23)"/>
                            <path d="M534.393 23.0696L542.454 0.5L556.544 0.5L548.483 23.0696L534.393 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M0 0L10.1013 1.56503e-08L1.68354 23.5696L0 23.5696V0Z" fill="url(#paint25_radial_31_23)"/>
                            <path d="M0.5 0.5L9.39176 0.5L1.33118 23.0696L0.5 23.0696V0.5Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <path d="M565.671 23.5696L555.57 23.5696L563.987 -9.44811e-06L565.671 -9.29832e-06L565.671 23.5696Z" fill="url(#paint26_radial_31_23)"/>
                            <path d="M565.171 23.0696L556.279 23.0696L564.34 0.49999L565.171 0.49999L565.171 23.0696Z" stroke="${item.stroke}" stroke-opacity="0.76"/>
                            <defs>
                            <radialGradient id="paint0_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2028 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint1_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.0885 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint2_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.9747 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint3_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.861 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint4_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(107.747 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint5_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(129.633 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint6_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(151.519 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint7_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173.405 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint8_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(195.291 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint9_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(217.177 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint10_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(239.063 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint11_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260.949 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint12_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(282.836 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint13_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304.721 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint14_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326.608 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint15_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(348.494 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint16_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(370.38 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint17_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(392.266 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint18_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(414.152 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint19_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(436.038 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint20_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(457.924 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint21_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(479.81 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint22_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(501.696 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint23_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(523.582 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint24_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(545.468 13.5258) rotate(90) scale(25.9277 25.6213)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint25_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.05063 13.5258) rotate(90) scale(25.9277 10.9806)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint26_radial_31_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(560.62 10.0439) rotate(-90) scale(25.9277 10.9806)">
                            <stop stop-color="${item.startcolor}" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="${item.stopcolor}" stop-opacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>
      `;

        $(".loading").append(template4);
    });
})