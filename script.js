function locoInit() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#avatar"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#avatar", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#avatar").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoInit();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
    ./avatar img/0001.png
    ./avatar img/0002.png
    ./avatar img/0003.png
    ./avatar img/0004.png
    ./avatar img/0005.png
    ./avatar img/0006.png
    ./avatar img/0007.png
    ./avatar img/0008.png
    ./avatar img/0009.png
    ./avatar img/0010.png
    ./avatar img/0011.png
    ./avatar img/0012.png
    ./avatar img/0013.png
    ./avatar img/0014.png
    ./avatar img/0015.png
    ./avatar img/0016.png
    ./avatar img/0017.png
    ./avatar img/0018.png
    ./avatar img/0019.png
    ./avatar img/0020.png
    ./avatar img/0021.png
    ./avatar img/0022.png
    ./avatar img/0023.png
    ./avatar img/0024.png
    ./avatar img/0025.png
    ./avatar img/0026.png
    ./avatar img/0027.png
    ./avatar img/0028.png
    ./avatar img/0029.png
    ./avatar img/0030.png
    ./avatar img/0031.png
    ./avatar img/0032.png
    ./avatar img/0033.png
    ./avatar img/0034.png
    ./avatar img/0035.png
    ./avatar img/0036.png
    ./avatar img/0037.png
    ./avatar img/0038.png
    ./avatar img/0039.png
    ./avatar img/0040.png
    ./avatar img/0041.png
    ./avatar img/0042.png
    ./avatar img/0043.png
    ./avatar img/0044.png
    ./avatar img/0045.png
    ./avatar img/0046.png
    ./avatar img/0047.png
    ./avatar img/0048.png
    ./avatar img/0049.png
    ./avatar img/0050.png
    ./avatar img/0051.png
    ./avatar img/0052.png
    ./avatar img/0053.png
    ./avatar img/0054.png
    ./avatar img/0055.png
    ./avatar img/0056.png
    ./avatar img/0057.png
    ./avatar img/0058.png
    ./avatar img/0059.png
    ./avatar img/0060.png
    ./avatar img/0061.png
    ./avatar img/0062.png
    ./avatar img/0063.png
    ./avatar img/0064.png
    ./avatar img/0065.png
    ./avatar img/0066.png
    ./avatar img/0067.png
    ./avatar img/0068.png
    ./avatar img/0069.png
    ./avatar img/0070.png
    ./avatar img/0071.png
    ./avatar img/0072.png
    ./avatar img/0073.png
    ./avatar img/0074.png
    ./avatar img/0075.png
    ./avatar img/0076.png
    ./avatar img/0077.png
    ./avatar img/0078.png
    ./avatar img/0079.png
    ./avatar img/0080.png
    ./avatar img/0081.png
    ./avatar img/0082.png
    ./avatar img/0083.png
    ./avatar img/0084.png
    ./avatar img/0085.png
    ./avatar img/0086.png
    ./avatar img/0087.png
    ./avatar img/0088.png
    ./avatar img/0089.png
    ./avatar img/0090.png
    ./avatar img/0091.png
    ./avatar img/0092.png
    ./avatar img/0093.png
    ./avatar img/0094.png
    ./avatar img/0095.png
    ./avatar img/0096.png
    ./avatar img/0097.png
    ./avatar img/0098.png
    ./avatar img/0099.png
    ./avatar img/0100.png
    ./avatar img/0101.png
    ./avatar img/0102.png
    ./avatar img/0103.png
    ./avatar img/0104.png
    ./avatar img/0105.png
    ./avatar img/0106.png
    ./avatar img/0107.png
    ./avatar img/0108.png
    ./avatar img/0109.png
    ./avatar img/0110.png
    ./avatar img/0111.png
    ./avatar img/0112.png
    ./avatar img/0113.png
    ./avatar img/0114.png
    ./avatar img/0115.png
    ./avatar img/0116.png
    ./avatar img/0117.png
    ./avatar img/0118.png
    ./avatar img/0119.png
    ./avatar img/0120.png
    ./avatar img/0121.png
    ./avatar img/0122.png
    ./avatar img/0123.png
    ./avatar img/0124.png
    ./avatar img/0125.png
    ./avatar img/0126.png
    ./avatar img/0127.png
    ./avatar img/0128.png
    ./avatar img/0129.png
    ./avatar img/0130.png
    ./avatar img/0131.png
    ./avatar img/0132.png
    ./avatar img/0133.png
    ./avatar img/0134.png
    ./avatar img/0135.png
    ./avatar img/0136.png
    ./avatar img/0137.png
    ./avatar img/0138.png
    ./avatar img/0139.png
    ./avatar img/0140.png
    ./avatar img/0141.png
    ./avatar img/0142.png
    ./avatar img/0143.png
    ./avatar img/0144.png
    ./avatar img/0145.png
    ./avatar img/0146.png
    ./avatar img/0147.png
    ./avatar img/0148.png
    ./avatar img/0149.png
    ./avatar img/0150.png
    ./avatar img/0151.png
    ./avatar img/0152.png
    ./avatar img/0153.png
    ./avatar img/0154.png
    ./avatar img/0155.png
    ./avatar img/0156.png
    ./avatar img/0157.png
    ./avatar img/0158.png
    ./avatar img/0159.png
    ./avatar img/0160.png
    ./avatar img/0161.png
    ./avatar img/0162.png
    ./avatar img/0163.png
    ./avatar img/0164.png
    ./avatar img/0165.png
    ./avatar img/0166.png
    ./avatar img/0167.png
    ./avatar img/0168.png
    ./avatar img/0169.png
    ./avatar img/0170.png
    ./avatar img/0171.png
    ./avatar img/0172.png
    ./avatar img/0173.png
    ./avatar img/0174.png
    ./avatar img/0175.png
    ./avatar img/0176.png
    ./avatar img/0177.png
    ./avatar img/0178.png
    ./avatar img/0179.png
    ./avatar img/0180.png
    ./avatar img/0181.png
    ./avatar img/0182.png
    ./avatar img/0183.png
    ./avatar img/0184.png
    ./avatar img/0185.png
    ./avatar img/0186.png
    ./avatar img/0187.png
    ./avatar img/0188.png
    ./avatar img/0189.png
    ./avatar img/0190.png
    ./avatar img/0191.png
    ./avatar img/0192.png
    ./avatar img/0193.png
    ./avatar img/0194.png
    ./avatar img/0195.png
    ./avatar img/0196.png
    ./avatar img/0197.png
    ./avatar img/0198.png
    ./avatar img/0199.png
    ./avatar img/0200.png
    ./avatar img/0201.png
    ./avatar img/0202.png
    ./avatar img/0203.png
    ./avatar img/0204.png
    ./avatar img/0205.png
    ./avatar img/0206.png
    ./avatar img/0207.png
    ./avatar img/0208.png
    ./avatar img/0209.png
    ./avatar img/0210.png
    ./avatar img/0211.png
    ./avatar img/0212.png
    ./avatar img/0213.png
    ./avatar img/0214.png
    ./avatar img/0215.png
    ./avatar img/0216.png
    ./avatar img/0217.png
    ./avatar img/0218.png
    ./avatar img/0219.png
    ./avatar img/0220.png
    ./avatar img/0221.png
    ./avatar img/0222.png
    ./avatar img/0223.png
    ./avatar img/0224.png
    ./avatar img/0225.png
    ./avatar img/0226.png
    ./avatar img/0227.png
    ./avatar img/0228.png
    ./avatar img/0229.png
    ./avatar img/0230.png
    ./avatar img/0231.png
    ./avatar img/0232.png
    ./avatar img/0233.png
    ./avatar img/0234.png
    ./avatar img/0235.png
    ./avatar img/0236.png
    ./avatar img/0237.png
    ./avatar img/0238.png
    ./avatar img/0239.png
    ./avatar img/0240.png
    ./avatar img/0241.png
    ./avatar img/0242.png
    ./avatar img/0243.png
    ./avatar img/0244.png
    ./avatar img/0245.png
    ./avatar img/0246.png
    ./avatar img/0247.png
    ./avatar img/0248.png
    ./avatar img/0249.png
    ./avatar img/0250.png
    ./avatar img/0251.png
    ./avatar img/0252.png
    ./avatar img/0253.png
    ./avatar img/0254.png
    ./avatar img/0255.png
    ./avatar img/0256.png
    ./avatar img/0257.png
    ./avatar img/0258.png
    ./avatar img/0259.png
    ./avatar img/0260.png
    ./avatar img/0261.png
    ./avatar img/0262.png
    ./avatar img/0263.png
    ./avatar img/0264.png
    ./avatar img/0265.png
    ./avatar img/0266.png
    ./avatar img/0267.png
    ./avatar img/0268.png
    ./avatar img/0269.png
    ./avatar img/0270.png
    ./avatar img/0271.png
    ./avatar img/0272.png
    ./avatar img/0273.png
    ./avatar img/0274.png
    ./avatar img/0275.png
    ./avatar img/0276.png
    ./avatar img/0277.png
    ./avatar img/0278.png
    ./avatar img/0279.png
    ./avatar img/0280.png
    ./avatar img/0281.png
    ./avatar img/0282.png
    ./avatar img/0283.png
    ./avatar img/0284.png
    ./avatar img/0285.png
    ./avatar img/0286.png
    ./avatar img/0287.png
    ./avatar img/0288.png
    ./avatar img/0289.png
    ./avatar img/0290.png
    ./avatar img/0291.png
    ./avatar img/0292.png
    ./avatar img/0293.png
    ./avatar img/0294.png
    ./avatar img/0295.png
    ./avatar img/0296.png
    ./avatar img/0297.png
    ./avatar img/0298.png
    ./avatar img/0299.png
    ./avatar img/0300.png
    ./avatar img/0301.png
    ./avatar img/0302.png
    ./avatar img/0303.png
    ./avatar img/0304.png
    ./avatar img/0305.png
    ./avatar img/0306.png
    ./avatar img/0307.png
    ./avatar img/0308.png
    ./avatar img/0309.png
    ./avatar img/0310.png
    ./avatar img/0311.png
    ./avatar img/0312.png
    ./avatar img/0313.png
    ./avatar img/0314.png
    ./avatar img/0315.png
    ./avatar img/0316.png
    ./avatar img/0317.png
    ./avatar img/0318.png
    ./avatar img/0319.png
    ./avatar img/0320.png
    ./avatar img/0321.png
    ./avatar img/0322.png
    ./avatar img/0323.png
    ./avatar img/0324.png
    ./avatar img/0325.png
    ./avatar img/0326.png
    ./avatar img/0327.png
    ./avatar img/0328.png
    ./avatar img/0329.png
    ./avatar img/0330.png
    ./avatar img/0331.png
    ./avatar img/0332.png
    ./avatar img/0333.png
    ./avatar img/0334.png
    ./avatar img/0335.png
    ./avatar img/0336.png
    ./avatar img/0337.png
    ./avatar img/0338.png
    ./avatar img/0339.png
    ./avatar img/0340.png
    ./avatar img/0341.png
    ./avatar img/0342.png
    ./avatar img/0343.png
    ./avatar img/0344.png
    ./avatar img/0345.png
    ./avatar img/0346.png
    ./avatar img/0347.png
    ./avatar img/0348.png
    ./avatar img/0349.png
    ./avatar img/0350.png
    ./avatar img/0351.png
    ./avatar img/0352.png
    ./avatar img/0353.png
    ./avatar img/0354.png
    ./avatar img/0355.png
    ./avatar img/0356.png
    ./avatar img/0357.png
    ./avatar img/0358.png
    ./avatar img/0359.png
    ./avatar img/0360.png
    ./avatar img/0361.png
    ./avatar img/0362.png
    ./avatar img/0363.png
    ./avatar img/0364.png
    ./avatar img/0365.png
    ./avatar img/0366.png
    ./avatar img/0367.png
    ./avatar img/0368.png
    ./avatar img/0369.png
    ./avatar img/0370.png
    ./avatar img/0371.png
    ./avatar img/0372.png
    ./avatar img/0373.png
    ./avatar img/0374.png
    ./avatar img/0375.png
    ./avatar img/0376.png
    ./avatar img/0377.png
    ./avatar img/0378.png
    ./avatar img/0379.png
    ./avatar img/0380.png
    ./avatar img/0381.png
    ./avatar img/0382.png
    ./avatar img/0383.png
    ./avatar img/0384.png
    ./avatar img/0385.png
    ./avatar img/0386.png
    ./avatar img/0387.png
    ./avatar img/0388.png
    ./avatar img/0389.png
    ./avatar img/0390.png
    ./avatar img/0391.png
    ./avatar img/0392.png
    ./avatar img/0393.png
    ./avatar img/0394.png
    ./avatar img/0395.png
    ./avatar img/0396.png
    ./avatar img/0397.png
    ./avatar img/0398.png
    ./avatar img/0399.png
    ./avatar img/0400.png
    ./avatar img/0401.png
    ./avatar img/0402.png
    ./avatar img/0403.png
    ./avatar img/0404.png
    ./avatar img/0405.png
    ./avatar img/0406.png
    ./avatar img/0407.png
    ./avatar img/0408.png
    ./avatar img/0409.png
    ./avatar img/0410.png
    ./avatar img/0411.png
    ./avatar img/0412.png
    ./avatar img/0413.png
    ./avatar img/0414.png
    ./avatar img/0415.png
    ./avatar img/0416.png
    ./avatar img/0417.png
    ./avatar img/0418.png
    ./avatar img/0419.png
    ./avatar img/0420.png
    ./avatar img/0421.png
    ./avatar img/0422.png
    ./avatar img/0423.png
    ./avatar img/0424.png
    ./avatar img/0425.png
    ./avatar img/0426.png
    ./avatar img/0427.png
    ./avatar img/0428.png
    ./avatar img/0429.png
    ./avatar img/0430.png
    ./avatar img/0431.png
    ./avatar img/0432.png
    ./avatar img/0433.png
    ./avatar img/0434.png
    ./avatar img/0435.png
    ./avatar img/0436.png
    ./avatar img/0437.png
    ./avatar img/0438.png
    ./avatar img/0439.png
    ./avatar img/0440.png
    ./avatar img/0441.png
    ./avatar img/0442.png
    ./avatar img/0443.png
    ./avatar img/0444.png
    ./avatar img/0445.png
    ./avatar img/0446.png
    ./avatar img/0447.png
    ./avatar img/0448.png
    ./avatar img/0449.png
    ./avatar img/0450.png
    ./avatar img/0451.png
    ./avatar img/0452.png
    ./avatar img/0453.png
    ./avatar img/0454.png
    ./avatar img/0455.png
    ./avatar img/0456.png
    ./avatar img/0457.png
    ./avatar img/0458.png
    ./avatar img/0459.png
    ./avatar img/0460.png
    ./avatar img/0461.png
    ./avatar img/0462.png
    ./avatar img/0463.png
    ./avatar img/0464.png
    ./avatar img/0465.png
    ./avatar img/0466.png
    ./avatar img/0467.png
    ./avatar img/0468.png
    ./avatar img/0469.png
 `;
    return data.split("\n")[index];
}

const frameCount = 469;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `.page1>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#avatar`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

ScrollTrigger.create({
    trigger: ".page1>canvas",
    pin: true,
    // markers:true,
    scroller: `#avatar`,
    start: `top top`,
    end: `600% top`,
});

gsap.to(".page2", {
    scrollTrigger: {
        trigger: `.page2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#avatar`
    }
})
gsap.to(".page3", {
    scrollTrigger: {
        trigger: `.page3`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#avatar`
    }
})
gsap.to(".page4", {
    scrollTrigger: {
        trigger: `.page4`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#avatar`
    }
})
