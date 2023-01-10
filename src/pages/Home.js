import { Slider } from "../components/Slider";
import { Tabs } from "../components/Tabs";
import { Categories } from "./../components/Categories";
import styled from "styled-components";

import img1 from "../assets/img/descr/descr-1.jpg";
import img2 from "../assets/img/descr/descr-2.jpg";
import { Blogs } from "../components/Blogs";
export const Home = () => {
  return (
    <main className='bg'>
      <Slider />
      <Categories />
      <Tabs />
      {/* 
      <Description>
        <div className='container-fluid'>
          <div className='descr-first-item'>
            <img src={img1} alt='TuoTown фото' className='img1' />
            <div className='details'>
              <h2 className='title'>
                «Tuotown» – легендарные ножи, создающие шедевры
              </h2>
              <p>
                Компания «Tuotown» – эксклюзивный представитель профессиональных
                кухонных ножей, изготовленных лучшими мастерами Восточной Азии с
                применением передового европейского оборудования и современных
                материалов. Они отличаются идеальным балансом и фантастической
                остротой. Сочетают в себе вековые традиции и новейшие
                разработки. Также предлагаем широкий ассортимент сопутствующих
                товаров.
              </p>
            </div>
          </div>
          <div className='descr-second-item'>
            <div className='details'>
              <p>
                Истинная красота ножа — совершённая функциональность
                и визуальная гармония. Этот предмет издревле сопутствовал
                человеку: от зари цивилизации до сегодняшних дней. На протяжении
                всей истории человечества он был верным помощником, незаменимым
                инструментом и грозным оружием. Предлагаем изделия Hi-end
                качества по доступным ценам настоящим ценителям японских ножей.
              </p>
              <p>
                Отличительной чертой нашего интернет-магазина являются
                уникальные торговые предложения, эксклюзивность продукции,
                неизменно высокое качество и выгодные цены. Осуществляем продажи
                элитных японских кухонных ножей для профессионалов и любителей.
                В обширной ассортиментной линейке представлены изделия
                для различных потребностей и любого бюджета — от столовых
                приборов до шеф-ножей.
              </p>
              <h3> */}
      {/* Ножи «Tuotown» – это главный инструмент поваров и секрет
                кулинарного мастерства
              </h3>
            </div>
            <img src={img2} alt='TuoTown фото' className='img-2' />
          </div>
        </div>
      </Description>
      <section className='blogs'>
        <div className='container-fluid'>
          <h2 className='title'>Всё самое интересное о ножах</h2>
          <Blogs elems={3} />
        </div>
      </section> */}
    </main>
  );
};

const Description = styled.section`
  font-family: "Montserrat", sans-serif;
  padding-bottom: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .descr-first-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  .details {
    width: 55%;
  }
  .descr-second-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
    p:first-child {
      margin-bottom: 27px;
    }
    p:nth-child(2) {
      margin-bottom: 45px;
    }

    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 36px;
    }
  }
  img {
    width: 40%;
    border-radius: 8%;
    object-fit: cover;
    max-height: 500px;
  }
`;
