


import '../App.css'

function NewsContainer (){
    // let data = [
    //     {
    //         img:"https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg",
    //         heading : "Hello World",
    //         description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta recusandae porro ad maxime? Veritatis."

    //     },
    //     {
    //         img:"https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg",
    //         heading : "Hello World",
    //         description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta recusandae porro ad maxime? Veritatis."

    //     },
    //     {
    //         img:"https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg",
    //         heading : "Hello World",
    //         description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta recusandae porro ad maxime? Veritatis."

    //     }
    // ]

    
    return (
        <div className="News" style={{'--quantity':'2'}}>
        <div className="news-cont" >
          <img src="https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg" alt="" />
          <div className="content">

          <h3>Hello World</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta recusandae porro ad maxime? Veritatis.</p>
          </div>
        </div>
        <div className="news-cont" >
          <img src="https://www.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg" alt="" />
          <div className="content">

          <h3>Hello World</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta recusandae porro ad maxime? Veritatis.</p>
          </div>
        </div>
      </div>
    );
}

export default NewsContainer;