<template>
    <q-layout view="lHh lpr lFf">
        <q-page-container>
            <q-page>
                <div class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <!-- <img class="navbar-brand-logo" src="img/logo.svg" alt="Elephant"> -->
                            <p>FACTURACION DIGITAL</p>
                        </a>
                        </div>
                        <nav id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                    
                                <router-link  to="/auth" >LOG IN</router-link>
                            </li>
                            <li>
                                <div class="navbar-btn-group">
                                    <router-link class="navbar-btn btn btn-primary btn-block" to="/registro" >Registrarse</router-link>
                                </div>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    <div class="masthead">
                    <div class="masthead-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                <div class="row">
                                    <div class="col-sm-10 col-sm-offset-1">
                                    <h3 class="masthead-heading">The fastest way to build Modern Admin APPS for any platform, browser, or device.</h3>
                                    <p class="masthead-lead">Elephant is a front-end template created to help you develop modern web applications, fast and in a professional manner. Built on top of Bootstrap, it includes a large collection of HTML, CSS, and JS components that is simple to use and easy to customise.</p>
                                    </div>
                                    <div class="col-sm-12 col-sm-offset-0">
                                    <img class="masthead-img" src="img/newspaper.svg" alt="Elephant">
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="container">
                            <h1>FAQs</h1>
                            <hr class="half-rule">
                            <div class="row">
                            <div class="col-sm-6">
                                <ul class="faq-list">
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="01s">
                                    <h4 class="faq-question">Quisque iaculis eleifend lacus nullam?</h4>
                                    <p class="faq-answer">Ut a velit at neque mattis molestie. Nullam scelerisque faucibus est sit amet semper. Ut pellentesque, odio id volutpat egestas, urna mauris dictum urna, tincidunt semper volutpat.</p>
                                </li>
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="02s">
                                    <h4 class="faq-question">Cras lobortis purus id maximus amet?</h4>
                                    <p class="faq-answer">Praesent eleifend mattis finibus. Proin fringilla facilisis convallis. Cras facilisis in nisi non dignissim. Phasellus fringilla massa auctor, sollicitudin dolor quis, ultricies nulla. Phasellus amet.</p>
                                </li>
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="03s">
                                    <h4 class="faq-question">Donec pellentesque purus at neque posuere?</h4>
                                    <p class="faq-answer">Aenean condimentum urna nunc, vitae semper ipsum porttitor ac. Etiam commodo quam consequat gravida ullamcorper. Phasellus et imperdiet ligula. Proin sit amet nullam.</p>
                                </li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="faq-list">
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="04s">
                                    <h4 class="faq-question">Etiam in scelerisque augue in amet?</h4>
                                    <p class="faq-answer">Nulla id neque sit amet augue imperdiet auctor. Phasellus lobortis, ante quis posuere luctus, quam sapien efficitur neque, sed auctor ante ligula in elit. Integer aliquet gravida mi, nec mollis libero vestibulum vel.</p>
                                </li>
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="05s">
                                    <h4 class="faq-question">Vestibulum sit amet malesuada amet?</h4>
                                    <p class="faq-answer">Sed scelerisque sem eget urna viverra, id iaculis leo pulvinar. Aenean quis arcu dui. Donec justo lorem, hendrerit at elit sit amet, euismod vehicula dui. Fusce sed tincidunt sem, et sed.</p>
                                </li>
                                <li class="faq" data-animation-name="fadeInLeft" data-animation-delay="06s">
                                    <h4 class="faq-question">Interdum et malesuada fames ac ante ipsum primis in orci aliquam?</h4>
                                    <p class="faq-answer">Maecenas pellentesque ante ante, quis ullamcorper metus maximus id. Ut at laoreet mi, non aliquam sapien. Aenean id dolor at lacus aliquet faucibus sed dictum amet.</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    <!-- ##FOOTER## -->
                    <div class="footer">
                        <div class="container">
                            <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <h4 class="footer-heading">Elephant</h4>
                                <p>
                                <small>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ac fermentum nibh, sit amet volutpat.</small>
                                </p>
                                <div class="social-list">
                                <a class="social-list-item" href="#">
                                    <span class="icon icon-twitter"></span>
                                </a>
                                <a class="social-list-item" href="#">
                                    <span class="icon icon-facebook"></span>
                                </a>
                                <a class="social-list-item" href="#">
                                    <span class="icon icon-linkedin"></span>
                                </a>
                                <a class="social-list-item" href="#">
                                    <span class="icon icon-vimeo"></span>
                                </a>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-2 col-md-offset-2">
                                <h4 class="footer-heading">Elephant</h4>
                                <ul class="footer-links">
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Elephant Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Elephant Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Staff
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div class="col-sm-4 col-md-2">
                                <h4 class="footer-heading">Help</h4>
                                <ul class="footer-links">
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Elephant Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Forums
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div class="col-sm-4 col-md-2">
                                <h4 class="footer-heading">Upgrade</h4>
                                <ul class="footer-links">
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Personal
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Organization
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Organization Plus
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span class="icon icon-angle-right"></span>
                                    Enterprise
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <p>© 2017 Elephant, LLC. All rights reserved.</p>
                        </div>
                    </div>
            </q-page>
        </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'

export default defineComponent({

    name: 'LandingPage',
    
    setup() {
        const scripts = [
            'elephant.min.js',
            'landing-page.min.js',
            'vendor.min.js'
        ];

        onBeforeMount(() => {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('page-loaded');

            const link = document.createElement('link')
            link.setAttribute('rel', "stylesheet" );
            link.setAttribute('href', "https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700" );
            document.head.appendChild(link);
        }),
        onMounted(() => {
            const externalScript = document.createElement('script')
            externalScript.setAttribute('src', "https://code.jquery.com/jquery-3.6.1.min.js" )
            document.head.appendChild(externalScript);

            scripts.forEach(el => {

                const externalScript = document.createElement('script')
                externalScript.setAttribute('src', `./../js/${el}` )
                document.head.appendChild(externalScript)
            });
        })
    }
})
</script>

<style scoped>
    @import "./../css/elephant.min.css";
    @import "./../css/landing-page.min.css";
    @import "./../css/vendor.min.css";
</style>


