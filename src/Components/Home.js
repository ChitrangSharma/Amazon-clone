import React from 'react'
import "../Styles/Home.css"
import SimpleImageSlider from "react-simple-image-slider";
import Product from './Product';

// const images = [
//     { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/HomeEss_1500x600_V3._CB670265509_.jpg" },
//     { url: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB670768292_.jpg" },
   
//   ];

 

function Home() {
    return (
        <div className="home">

<div className="home__container">
{/* <SimpleImageSlider
        width={896}
        height={400}
        images={images}
        css transition-duration property
        Arrow Size
       
      /> */}
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/HomeEss_1500x600_V3._CB670265509_.jpg" alt="image"/>

      {/* poducts */}
      <div className="home__row">
      <Product title="The lean startup"
          price={29.99}
          image={"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"}
          rating ={5}
      />

      </div>
      <div className="home__row">
         <Product
             title="The lean startup"
          price={29.99}
          image={"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"}
          rating ={5}
         />
        <Product
            title="The lean startup"
          price={29.99}
          image={"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"}
          rating ={5}
        /> 
        <Product
            title="The lean startup"
          price={29.99}
          image={"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"}
          rating ={5}
        />
      </div>

      <div className="home__row">
      <Product/>

      </div>

     

</div>            
        </div>
    )
}

export default Home
