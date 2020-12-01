    //main Function
    var fun = (function() {
        //header_start
        var body = document.getElementById('body');
        var div = document.createElement('div');
        body.appendChild(div);
        div.setAttribute('class', 'sub_header')
        div.setAttribute('id', 'myHome');
        var body = document.getElementById('body');
        var header = document.createElement('header');
        body.appendChild(header);
        header.setAttribute("id", "my_header")
        var hed = document.getElementsByTagName('header')[0].innerHTML += "<div class='container-fluid'><div class='row'></div></div>";

        //banner section start
        var section = document.createElement('section');
        body.appendChild(section);
        section.setAttribute('class', 'Section');

        //jason data
        var arr = [{
                logo: "Jai Ambey Nursing Home",

            },
            {
                nav01: "Home",
                nav02: "About",
                nav03: "Services",
                nav04: "Gallery",
                nav05: "Contact Us"
            }, {
                banner: "img/jay_ambey_nurshing_home_banner.png",
                banner01: "img/jay_ambey_nurshing_home_banner-01.png",
                moarq_text: "Treatment facility by 'Ayushman Card' <u>Jai Ambey Nursing Home and Netralaya</u> <i>Address</i> Maharana Pratap Chowk,Near Ring Road 2 Chandel Nagar Bilaspur Chhattisgarh(495001)"
            }, {
                timing: "OPD Timing - 10:00am to 2:00pm & 6:00 pm to 8:00pm",
                phone: "07752-407782",
            }, {
                article01_head: "Hospital OverView",
                article01_para: "Jai Ambey Nursing Home & Netralaya in Ring Road, Bilaspur-chhattisgarh is a top player in the category Nursing Homes in the Bilaspur-chhattisgarh. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bilaspur-chhattisgarh. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.",
                article01_img: "img/jay_ambey_nusring_home_image.png"
            }, {
                article02_heading: "Available facilities in Jay Ambey Nursing Home",
            }
        ];
        var mysubHeader = function() {
            document.querySelector('.sub_header').innerHTML += `

                <div class="container">
                <div class="row">
                <div class="col-md-6">
                <div class="timing text-center">

                <span><img src="img/icons8-clock-64.png"><b>${arr[3].timing}</b></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="phone text-center">
                <span><img src="img/icons8-phone-24.png"><a href="tel:${arr[3].phone}"><b>${arr[3].phone}</a></b></span>&nbsp;&nbsp;&nbsp;
                <span><a href="tel:${arr[3].phone}"><b>${arr[3].phone}</a></b></span>
                </div>
                </div>
                </div>

                </div>

                `;
            var Myheader = function() {
                document.querySelector('header>.container-fluid>.row').innerHTML += `
               
                <div class="col-md-6">
                <div class="Logo_Jay_Ambey_Nurshing_Home">
                <span class="logo"><img src="img/logo-ambey.png"><h1>${arr[0].logo}</h1></span>
                <img src="img/menu.png" class="menu_btn" onclick="menu()">
                </div>
                </div>
                <div class="col-md-6">
                <div class="Navigation_Jay_Ambey_Nurshing_Home pad-10">
                <ul class="nav navbar-nav">
                <li><a href="#myHome"><b>${arr[1].nav01}</b></a></li>
                <li><a href="#myAbout"><b>${arr[1].nav02}</b></a></li>
                <li><a href="#nursing"><b>${arr[1].nav03}</b></a></li>
                <li><a href="#mygallery"><b>${arr[1].nav04}</b></a></li>
                <li><a href="#myContact"><b>${arr[1].nav05}</b></a></li>

                </ul>
                </div>
                </div>
    `;
                var myBnner_section = (function() {
                    document.querySelector('section').innerHTML += `

                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                    <div class="item active">
                    <img src="${arr[2].banner}" alt="Los Angeles">
                    </div>

                    <div class="item">
                    <img src="${arr[2].banner01}" alt="Chicago">
                    </div>


                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                    </a>
                    </div>
                    <marquee><p>Note :  ${arr[2].moarq_text}</p></marquee>
                   
                    `;
                    //article01 start
                    var article = function() {
                        //article01-strat
                        var article = document.createElement('article');
                        body.appendChild(article);
                        article.setAttribute('class', 'article01');
                        article.setAttribute('id', 'myAbout')
                        article.innerHTML += "<div class='container'><div class='row'></div></div>";
                        document.querySelector('.article01>.container>.row').innerHTML += `
                            <div class="col-md-12">
                            <div class="heading">
                            <h2>${arr[4].article01_head}</h2>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="about_para">
                            <p>${arr[4].article01_para}</p>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="about_img">
                            <img src="${arr[4].article01_img}" class="img-responsive">
                            </div>
                            </div>
                            <div class="text-left tab">
                            <a  class="tablinks" onclick="MyTab(event,'nursing')">Nursing Home Facilities</a>
                            <a  class="tablinks" onclick="MyTab(event,'netralaya')">Netralay  Facilities</a>
                            </div>
                            `;
                        //jason 02
                        var article03 = function() {
                            var article02 = document.createElement('article');
                            body.appendChild(article02);
                            article02.setAttribute('class', "article02 tab_content");
                            article02.setAttribute('id', "nursing");

                            document.querySelector('.article02').innerHTML += "<div class='container'><div class='row'></div></div>";

                            document.querySelector('.article02>.container>.row').innerHTML += `
                            <div class="col-md-12">
                            <div class="services_heading">
                            
                            <h3>${arr[5].article02_heading}</h3>
                           
                            </div>
                            </div>
                            `;
                            var Service_Data = function(image, Head_para) {
                                this.image = image;
                                this.Head_para = Head_para;

                            }
                            var Service01 = new Service_Data("img/1200px-Right_Inguinal_Hernia.jpg", "Hernia");
                            var Service02 = new Service_Data("img/hidrocele.jpg", "Hidrocele");
                            var Service03 = new Service_Data("img/piles.jpg", "Piles");
                            var Service04 = new Service_Data("img/anal-fissure.jpg", "Fisher Piles");
                            var Service05 = new Service_Data("img/appendix-stock.jpg", "Apendix");
                            var Service06 = new Service_Data("img/Perforation.jpg", "Perforation");
                            var Service07 = new Service_Data("img/kidney Stone.jpg", "kidney Stone");
                            var Service08 = new Service_Data("img/03_LSP_Gallbladder-Removal_A1.jpg", "gall Bladder");
                            var Service09 = new Service_Data("img/diabetes.png", "Diabetes");
                            var Service10 = new Service_Data("img/heart-dieses.jpg", "Heart Disease");
                            var Service11 = new Service_Data("img/asthma disease.jpg", "Asthma Disease");
                            var Service12 = new Service_Data("img/obstetric.png", "Obstetric");
                            var Service13 = new Service_Data("img/fracture.png", "Fracture");
                            var Service14 = new Service_Data("img/pathological.jpg", "Pathological");
                            var Service15 = new Service_Data("img/biochemistry.jpg", "Biochemistry");
                            var Service16 = new Service_Data("img/X-rays.jpg", "X-rays & ECG");

                            var arr01 = [Service01, Service02, Service03, Service04, Service05, Service06, Service07, Service08, Service09, Service10, Service11, Service12, Service13, Service14, Service15, Service16];

                            for (var i in arr01) {
                                document.querySelector('.article02>.container>.row').innerHTML += `
                            <div class="col-md-3">
                            <div class="Service_image text-center">
                            <img src="${arr01[i].image}" >
                            <ul>
                            <li><b>${arr01[i].Head_para}</b></li>

                            </ul>
                            </div>
                            </div>`;

                            }


                            (function() {
                                var article04 = document.createElement('article');
                                body.appendChild(article04);
                                article04.setAttribute("class", "article04 tab_content");
                                article04.setAttribute("id", "netralaya");
                                article04.innerHTML += "<div class='container'><div class='row'><h4>Facility available for the eyes in Jai Ambey Nursing Home</h4></div></div>"
                                var ntralay_data = function(image01, n_para) {
                                    this.image01 = image01;
                                    this.n_para = n_para;
                                }
                                var ne_service01 = new ntralay_data("img/cataract-surgery.jpg", "Cataract Surgery");

                                var ne_service02 = new ntralay_data("img/phoco.jpg", "Phoco Surgery");

                                var ne_service03 = new ntralay_data("img/eye-examination.jpg", "Eye-Examination");
                                var ne_service04 = new ntralay_data("img/applanation.jpg", "Applanation");

                                var ne_service05 = new ntralay_data("img/contact-lenses.jpg", "Contact-lenses");

                                var ne_service06 = new ntralay_data("img/sonography.png", "Sonography");

                                var ne_service07 = new ntralay_data("img/what-is-lasik-recovery-side-effects.jpg", "green laser eye treatment");
                                var ne_service08 = new ntralay_data("img/Eyelid-Surgery.jpg", "Eyelid-Surgery");
                                arr02 = [ne_service01, ne_service02, ne_service03, ne_service04, ne_service05, ne_service06, ne_service07, ne_service08];
                                for (var i in arr02) {
                                    document.querySelector('.article04>.container>.row').innerHTML += `
                                      <div class="col-md-3">
                                         <div class="Service_image text-center">
                                             <img src="${arr02[i].image01}">
                                             <ul>
                                                <li>${arr02[i].n_para}</li>
                                             </ul>
                                         </div>
                                      </div>
                                    `;
                                }
                            })(); //jason data02
                            var galery = (function() {
                                    var article06 = document.createElement('article');
                                    body.appendChild(article06);
                                    article06.setAttribute('id', 'mygallery');
                                    article06.setAttribute("class", "article06");
                                    article06.innerHTML += "<div class='container-fluid'><div class='row'><h4>Our Gallery</h5></div></div>";
                                    var g_img = function(gallery_img) {
                                        this.gallery_img = gallery_img;
                                    }
                                    var img01 = new g_img("img/1200px-Right_Inguinal_Hernia.jpg");
                                    var img02 = new g_img("img/03_LSP_Gallbladder-Removal_A1.jpg");
                                    var img03 = new g_img("img/asthma disease.jpg");
                                    var img04 = new g_img("img/phoco.jpg");
                                    arr03 = [img01, img02, img03, img04];
                                    for (var i in arr03) {
                                        document.querySelector('.article06>.container-fluid>.row').innerHTML += `
                                    <div class="col-md-3">
                                       <div class="gallery_img">
                                          <img src="${arr03[i].gallery_img}">
                                       </div>
                                    </div>
                                    `;
                                    }
                                    var banner_div = (function() {
                                        var bann_div = document.createElement('div');
                                        body.appendChild(bann_div);
                                        bann_div.innerHTML += `
                                          <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="baner_div">
                                                        <img src="img/ambulance-banner.png" class="bnner_abulence">
                                                    </div>
                                                </div>
                                             </div>
                                          </div>
                                        `;
                                        var address = function() {
                                            var article05 = document.createElement('article');
                                            body.appendChild(article05);
                                            article05.setAttribute('class', 'article05');
                                            article05.setAttribute('id', 'myContact')
                                            article05.innerHTML += "<div class='container'><div class='row'></div></div>";
                                            var data = [{
                                                adress: "ring road no 2 Durga medical store ,bhatia petrolpump, Jarahbhata, Bilaspur, Chhattisgarh 495001",
                                                phone: "07752-407782",
                                                email: "company@gmail.com"

                                            }]
                                            document.querySelector('.article05>.container>.row').innerHTML += `
                                            <div class="col-md-6">
                                                <div class="address">
                                                     <h5>Connect With Us</h5>
                                                    <ul>
                                                       <li> ${data[0].adress}</li>
                                                       <li> <a href="tel:07752407782">${data[0].phone}</li>
                                                       <li> <a href="mailto:07752407782">${data[0].email}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="address">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29577.682744539463!2d82.11173992985472!3d22.079782568053286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.0839975!2d82.1169542!4m5!1s0x3a280b677467fbf9%3A0xa2b2515b77ff3f1f!2sjay%20ambey%20nusrhing%20home!3m2!1d22.074307899999997!2d82.1357494!5e0!3m2!1sen!2sin!4v1606825466192!5m2!1sen!2sin" width="100%" height="290" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div>
                                        </div>
                                            `;
                                            (function() {
                                                var footer = document.createElement('footer');
                                                body.appendChild(footer);
                                                footer.innerHTML += "<div class='container'><div class='row'></div></div>";
                                                var Footer_Data = [{
                                                        footer_nav01: "Home",
                                                        footer_nav02: "About",
                                                        footer_nav03: "Gallery",
                                                        footer_nav04: "COntact Us"
                                                    }, {
                                                        footer_Service01: "Nursing Home",
                                                        footer_Service02: "Netralay",
                                                        footer_Service03: "24 Hours Avaiabel facility",
                                                    },
                                                    {
                                                        footer_adsress: "ring road no 2 Durga medical store ,bhatia petrolpump, Jarahbhata, Bilaspur, Chhattisgarh 495001",
                                                        footer_phone: "07752407782",
                                                        footer_email: "company@gmail.com"
                                                    }
                                                ];
                                                document.querySelector('footer>.container>.row').innerHTML += `
                                                <div class="col-md-4">
                                                    <div class="footer_nav">
                                                    <p>My Navigation</p>
                                                       <ul>
                                                            <li><a href="">${Footer_Data[0].footer_nav01}</a></li>
                                                            <li><a href="">${Footer_Data[0].footer_nav02}</a> </li>
                                                            <li><a href="">${Footer_Data[0].footer_nav03}</a>
                                                            </li>
                                                            <li><a href="">${Footer_Data[0].footer_nav04}</a>
                                                            </li>
                                                       </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="footer_nav">
                                                    <p>Our facilities</p>
                                                       <ul>
                                                            <li><a href="">${Footer_Data[1].footer_Service01}</a>
                                                            </li>
                                                            <li><a href="">${Footer_Data[1].footer_Service02}</a>
                                                            </li>
                                                            <li><a href="">${Footer_Data[1].footer_Service03}</a>
                                                            </li>
                                                         </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                <div class="footer_nav">
                                                 <p>Address</p>
                                                   <ul>
                                                        <li><a href="">${Footer_Data[2].footer_adsress}</a>
                                                        </li>
                                                        <li><a href="">${Footer_Data[2].footer_phone}</a>
                                                        </li>
                                                        <li><a href="">${Footer_Data[2].footer_email}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                            <div class="footer_bottom"></div>
                                                `;

                                            })(); //footer function
                                        }
                                        address(); //contact function

                                    })(); //banner03 
                                })() //galery fubction

                        }
                        article03(); //Services function//


                    }
                    article(); //article01 function

                })(); //Section_banner function
            }
            Myheader(); //MyHeader function
        }
        mysubHeader(); //Sub-header

    })(); //jason function