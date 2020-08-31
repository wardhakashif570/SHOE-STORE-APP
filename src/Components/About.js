import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.background}>
            <section>
                <div className="container-fluid">
                    <h1 className="text-center text-capitalize pt-5">About Us</h1>
                    <hr className=" w-50 mx-auto pb-5" />

                    <div className="row mb-5 ">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="images/aboutus.jpg" className="img-fluid" height="100px" width="650px" alt="bkg" />
                        </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <h1 className="text-center text-capitalize">ONLINE SHOE STORE</h1>
                            <hr className=" w-50 " />
                            <p className={styles.fml}> Online Boutique offers a wide range of apparel to fit any woman’s unique sense of style. Our clothing and accessories are
                             carefully curated to provide our customers the latest fashions. To keep our customers in style we post new arrivals daily, as 
                             well as offer stylist picks to help any indecisive shoppers. Impressions Online Boutique is a fashionista’s best place to create
                             the perfect wardrobe.Beyond helping you look your best, Impressions Online Boutique strives to make every purchase a positive 
                             experience. Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times,
                             and a hassle-free return policy. We value your feedback, whether positive or constructive and we are continuously working to 
                             improve your experience.If you are a first-time visitor or long-standing customer, we hope you will be thrilled with every aspect of your Impressions Online Boutique shopping experience.</p>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}
export default About;