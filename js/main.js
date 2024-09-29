(function ($) {

    
    // Testimonal
    document.addEventListener('DOMContentLoaded', function () {
        let currentIndex = 0;
        const items = document.querySelectorAll('#carouselExampleIndicators .carousel-item');
        const indicators = document.querySelectorAll('#carouselExampleIndicators .carousel-indicators li');

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }

        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                currentIndex = i;
                showItem(currentIndex);
            });
        });

        setInterval(nextItem, 3000);
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });




    // ChangeIn
    let BarberName = document.getElementById("barberName");
    let BarberAbt = document.getElementById("barberAbt");
    let BarberImg = document.getElementById("barberImg");
    let reyas = document.getElementById("reyas");
    let roobie = document.getElementById("roobesh");
    let nithish = document.getElementById("nithish");
    let vishwa = document.getElementById("vish");

    reyas.addEventListener("click", function () {
        BarberName.style.textTransform = "uppercase";
        BarberName.innerHTML = "reyas";
        BarberImg.src = "img/reyas.jpg";
        BarberAbt.innerText = "I am a highly experienced senior hairstylist with over 30 years of expertise in the beauty industry. My journey in hairstyling has been marked by a deep passion for creating stunning and personalized looks that enhance the natural beauty of my clients. Over the years, I have honed my skills in a wide range of hair techniques, from precision cuts and innovative coloring to sophisticated updos and trendsetting styles. My extensive experience has allowed me to work with a diverse clientele, understanding the unique needs and preferences of each individual. I am committed to continuous learning, staying updated with the latest trends, and adopting cutting-edge techniques to ensure my clients always leave my chair feeling confident and satisfied. Whether it's a classic style or a bold, modern look, I take pride in my ability to deliver exceptional results that reflect both my creativity and technical proficiency. My dedication to the craft and my clients' satisfaction has earned me a reputation as a trusted and sought-after hairstylist in the industry.";
        console.log("work");
    });

    roobie.addEventListener("click", function () {
        BarberName.style.textTransform = "uppercase";
        BarberName.innerHTML = "roobesh";
        BarberImg.src = "img/roobesh.jpg";
        BarberAbt.innerText = "I am a seasoned hair color specialist with over 10 years of experience in the beauty industry. My expertise lies in creating vibrant, customized color solutions that complement and enhance my clients' natural beauty. From subtle balayage and sun-kissed highlights to bold, fashion-forward color transformations, I have mastered a wide range of techniques to deliver stunning results. Throughout my career, I have worked with diverse hair types and tones, allowing me to develop a keen eye for detail and a deep understanding of color theory. My approach is both artistic and technical, ensuring that each client leaves with a color that not only suits their style but also enhances their overall look. Staying current with the latest trends and innovations in hair color is a priority for me. I regularly attend workshops and advanced training sessions to refine my skills and introduce fresh ideas to my clients. My dedication to excellence and personalized service has made me a trusted name in the industry, and I take pride in helping clients achieve their dream hair color."
        console.log("work");
    });
    nithish.addEventListener("click", function () {
        BarberName.style.textTransform = "uppercase";
        BarberName.innerHTML = "nithish";
        BarberImg.src = "img/nithish.jpg";
        BarberAbt.innerText = "I am a master barber with over 8 years of experience in the grooming industry, dedicated to the art of precision cutting and classic barbering techniques. My journey as a barber has been driven by a passion for delivering sharp, clean cuts and refined grooming services that leave my clients looking and feeling their best. Specializing in traditional and modern barbering styles, I excel in creating everything from timeless, tailored haircuts to contemporary, trendsetting looks. My expertise extends to hot towel shaves, beard sculpting, and detailed fades, ensuring each client receives a personalized experience that caters to their individual style and grooming needs. Throughout my career, I have built a loyal clientele by consistently providing top-notch service and attention to detail. I stay updated with the latest trends and tools in barbering, combining classic techniques with innovative approaches to meet the evolving preferences of my clients. As a master barber, my commitment is to elevate the grooming experience, offering expert advice and services that go beyond just a haircut. Whether it's a traditional shave or a modern hairstyle, I take pride in delivering results that reflect my craftsmanship and dedication to the profession.";
        console.log("work");
    });
    vishwa.addEventListener("click", function () {
        BarberName.style.textTransform = "uppercase";
        BarberName.innerHTML = "vishwa";
        BarberImg.src = "img/vishwa.jpg";
        BarberAbt.innerText = "I am a senior hairstylist with over 30 years of experience in the beauty industry, specializing in crafting elegant and personalized hairstyles that bring out the best in my clients. My extensive career has been dedicated to mastering a wide range of styling techniques, from precision cuts and luxurious blowouts to intricate updos and innovative color treatments. Throughout my years in the industry, I have developed a deep understanding of different hair types, textures, and styles, allowing me to create looks that are both flattering and easy to maintain. I am passionate about staying current with the latest trends and techniques, ensuring that my clients receive the highest level of service and the most up-to-date styles. My approach to hairstyling is rooted in a commitment to excellence and a personalized touch. I believe that every client deserves to feel confident and beautiful, and I take pride in delivering results that exceed their expectations. Whether it's a sophisticated cut for a special occasion or a fresh, modern style for everyday wear, I am dedicated to helping my clients look and feel their best. As a trusted and experienced hairstylist, I have built lasting relationships with my clients, who appreciate my attention to detail, creativity, and genuine care for their satisfaction. My goal is to continue providing exceptional hairstyling services that enhance my clients' natural beauty and leave them feeling inspired and empowered.";
        console.log("work");
    });

    // breadcrum
    const pageTitle = "Price Planning"; // You can modify this based on the page logic
    document.title = pageTitle;
    document.getElementById('dynamic-title').innerText = pageTitle;

    // Dynamic breadcrumb setup
    const breadcrumbItems = [
        { name: "Home", link: "./price.html" },
        { name: "Pages", link: "#Pages" },
        { name: pageTitle, link: "#", active: true }
    ];

    const breadcrumbList = document.getElementById('dynamic-breadcrumb');
    breadcrumbItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item';
        if (item.active) {
            li.classList.add('text-secondary', 'active');
            li.setAttribute('aria-current', 'page');
            li.innerText = item.name;
            console.log("wer");

        } else {
            const anchor = document.createElement('a');
            anchor.href = item.link;
            anchor.classList.add('text-white');
            anchor.innerText = item.name;
            li.appendChild(anchor);
            console.log("wkj l");

        }
        breadcrumbList.appendChild(li);
        console.log("sudru");

    });

    // model
   

})(jQuery);

