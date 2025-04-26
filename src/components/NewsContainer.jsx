import { Swiper, SwiperSlide,} from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useState,useEffect } from "react";
// import PropTypes from 'prop-types';
import "swiper/css";
import 'swiper/css/pagination';
import "../App.css";

function NewsContainer(prop) {
  let defaultImage = "https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg?semt=ais_hybrid"
  const [articles,Setarticles] = useState([])
  const [loading,Setloading] = useState(false);




  async function getData(catogary) {
    let url = `https://newsapi.org/v2/top-headlines?category=${catogary}&sources=${prop.source}&apiKey=${prop.apiKey}&pageSize=${prop.pageSize}`
    if(catogary === "palestine"){
      url = `https://newsapi.org/v2/everything?q=palestine&apiKey=${prop.apiKey}&pageSize=${prop.pageSize}`
    }
    try{
      
      Setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      Setloading(false);
      Setarticles(parsedData.articles);
      
      
    }catch(err){
      console.log(err);
    }
    
    
  }

  useEffect(()=>{
    getData("technology");


  },[]);
  useEffect(()=>{

    getData(prop.category);



  },[prop.category]);



  return (
    <div className="News">
      {loading && <div className="loading"></div>}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        
        
        >
        

        {!loading && articles && articles.map((elem) => {
          if(elem.description !== null){
            return (
              <SwiperSlide key={elem.url}>
                
              <div className="news-cont">
                <img
                  src={elem.urlToImage?elem.urlToImage:defaultImage}
                  alt="news-image"
                  loading="lazy"
                />
                <div className="content">
                  <h3>{elem.title.slice(0,40)}...</h3>
                  <p>
                    {elem.description.slice(0,88)}...
                  </p>
                  <div className="btn-cont">
                  <a href={elem.url} target="_blank"><button className="news-btn">Read more</button></a>
                  <div className="writen-date">{elem.publishedAt.slice(0,10)}</div>
                  <div className="source">{elem.source.name.slice(0,14)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
  
            );
          }
          
        })}
      </Swiper>
    </div>
  );
}

// NewsContainer.protoTypes ={
//   catogary : PropTypes.string
// }
export default NewsContainer;
