import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperTypeProduct, WrapperButtonMore, WrapperProducts } from "./style";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import slider5 from "../../assets/images/slider5.webp";
import slider6 from "../../assets/images/slider6.webp";



const HomePage = () => {
    const arr = ['TV', 'Laptop', 'Phone', 'Tablet', 'Smartwatch', 'Headphones', 'Camera', 'Speaker', 'Printer', 'Monitor'];
    return (
       <>
            <div style ={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>

            <div id="container" style={{ backgroundColor: '#F5F5FA', padding: '0 120px', height: '2000px', width: '100%' }}>
                <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5, slider6]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                   
                </WrapperProducts>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                    <WrapperButtonMore>
                        Xem thêm
                    </WrapperButtonMore>
                </div>
            </div>

       </>
    );
};

export default HomePage;