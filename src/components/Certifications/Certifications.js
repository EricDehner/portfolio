import "./Certifications.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import certification1 from "./Assets/62cb9cd49689cc00240c544d.png"
import certification2 from "./Assets/6331c8ea4cec60000ee7452f.png"
import certification3 from "./Assets/637860435e7c43000fb8ba31.png"
import certification5 from "./Assets/6591b7f56793b078ee710009.png"
import certification4 from "./Assets/637860435e7c43000fb8ba34.png"
import certification6 from "./Assets/6591b7f56793b02e0e710014.png"

const Certifications = () => {
    if (window.innerWidth <= 425) {
        return (
            <article className="certifications_container">
                <div className="topWave_container">
                    <svg className="topWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,320L0,320Z"></path></svg>
                </div>
                <h2 className="certifications_title">CERTIFICACIONES</h2>
                <div className="certifications">
                    <Swiper slidesPerView={1} spaceBetween={70} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/62cb9cd49689cc00240c544d" target="_blank" rel="noreferrer"><img className="certification" src={certification1} alt="Certification" /></a></SwiperSlide>
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6331c8ea4cec60000ee7452f" target="_blank" rel="noreferrer"><img className="certification" src={certification2} alt="Certification" /></a></SwiperSlide>
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba31" target="_blank" rel="noreferrer"><img className="certification" src={certification3} alt="Certification" /></a></SwiperSlide>
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b078ee710009" target="_blank" rel="noreferrer"><img className="certification" src={certification4} alt="Certification" /></a></SwiperSlide>
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba34" target="_blank" rel="noreferrer"><img className="certification" src={certification5} alt="Certification" /></a></SwiperSlide>
                        <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b02e0e710014" target="_blank" rel="noreferrer"><img className="certification" src={certification6} alt="Certification" /></a></SwiperSlide>

                    </Swiper>
                </div>
                <div className="bottomWave_container">
                    <svg className="bottomWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path></svg>
                </div>
            </article>)
    }
    if (window.innerWidth <= 1200) {
        return (<article className="certifications_container">
            <div className="topWave_container">
                <svg className="topWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,320L0,320Z"></path></svg>
            </div>
            <h2 className="certifications_title">CERTIFICACIONES</h2>
            <div className="certifications">
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/62cb9cd49689cc00240c544d" target="_blank" rel="noreferrer"><img className="certification" src={certification1} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6331c8ea4cec60000ee7452f" target="_blank" rel="noreferrer"><img className="certification" src={certification2} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba31" target="_blank" rel="noreferrer"><img className="certification" src={certification3} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b078ee710009" target="_blank" rel="noreferrer"><img className="certification" src={certification4} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba34" target="_blank" rel="noreferrer"><img className="certification" src={certification5} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b02e0e710014" target="_blank" rel="noreferrer"><img className="certification" src={certification6} alt="Certification" /></a></SwiperSlide>
                </Swiper>
            </div>
            <div className="bottomWave_container">
                <svg className="bottomWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path></svg>
            </div>
        </article>)
    }
    if (window.innerWidth <= 1440) {
        return (<article className="certifications_container">
            <div className="topWave_container">
                <svg className="topWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,320L0,320Z"></path></svg>
            </div>
            <h2 className="certifications_title">CERTIFICACIONES</h2>
            <div className="certifications">
                <Swiper slidesPerView={2} spaceBetween={60} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/62cb9cd49689cc00240c544d" target="_blank" rel="noreferrer"><img className="certification" src={certification1} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6331c8ea4cec60000ee7452f" target="_blank" rel="noreferrer"><img className="certification" src={certification2} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba31" target="_blank" rel="noreferrer"><img className="certification" src={certification3} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b078ee710009" target="_blank" rel="noreferrer"><img className="certification" src={certification4} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba34" target="_blank" rel="noreferrer"><img className="certification" src={certification5} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b02e0e710014" target="_blank" rel="noreferrer"><img className="certification" src={certification6} alt="Certification" /></a></SwiperSlide>
                </Swiper>
            </div>
            <div className="bottomWave_container">
                <svg className="bottomWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path></svg>
            </div>
        </article>)
    }

    return (
        <article className="certifications_container">
            <div className="topWave_container">
                <svg className="topWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,320L0,320Z"></path></svg>
            </div>
            <h2 className="certifications_title">CERTIFICACIONES</h2>
            <div className="certifications">
                <Swiper slidesPerView={2} spaceBetween={60} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/62cb9cd49689cc00240c544d" target="_blank" rel="noreferrer"><img className="certification" src={certification1} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6331c8ea4cec60000ee7452f" target="_blank" rel="noreferrer"><img className="certification" src={certification2} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba31" target="_blank" rel="noreferrer"><img className="certification" src={certification3} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b078ee710009" target="_blank" rel="noreferrer"><img className="certification" src={certification4} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/637860435e7c43000fb8ba34" target="_blank" rel="noreferrer"><img className="certification" src={certification5} alt="Certification" /></a></SwiperSlide>
                    <SwiperSlide ><a href="https://www.coderhouse.com/certificados/6591b7f56793b02e0e710014" target="_blank" rel="noreferrer"><img className="certification" src={certification6} alt="Certification" /></a></SwiperSlide>
                </Swiper>
            </div>
            <div className="bottomWave_container">
                <svg className="bottomWave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90"><path fill="rgb(16, 16, 16)" fillOpacity="1" d="M0,64L1440,32L1440,0L0,0Z"></path></svg>
            </div>
        </article>
    )
}
export default Certifications