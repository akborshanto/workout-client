
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Gallery = () => {


  

  const itemData = [
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-4-1300x650.jpg",
      title: "Breakfast",
     
  cols:2,
      feature: "Fuel your workout with a nutritious breakfast",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-1-650x650.jpg",
      title: "Burger",
      feature: "Enjoy a protein-packed burger post-workout",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-5-650x650.jpg",
      title: "Hats",
      feature: "Stay stylish and sweat-free with our hats",
      
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/08/h1-banner-img-1.1.jpg",
      title: "Basketball",
      feature: "Improve your cardio with a game of basketball",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-6-650x650.jpg",
      title: "Fern",
      feature: "Enhance your gym space with green ferns",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-3-1300x650.jpg",
      title: "Honey",
  
      cols:2,
      feature: "Boost your energy with natural honey",
    },
  ];

 

  return (
    <div className="bg-[#141414] ">
      <div>
        <ImageList variant="quilted" cols={4} rowHeight={151}>
          {itemData.map((item) => (
            <ImageListItem
              className="hover:h-40 overflow-hidden image-list-item"
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 2}
            >
              <img
                className="image"
                {...srcset(item.img, 211, item.rows, item.cols)}
                alt={item.title}
              />
              
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Gallery;
