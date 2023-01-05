import styled from "styled-components";
import { Admit } from "../components/Admit";
import { Blogs } from "../components/Blogs";
import { Primary } from "../components/Primary";
export const Blog = () => {
  return (
    <Wrapper>
      <Primary />
      <section className='blogs bb'>
        <div className='container-fluid'>
          <Blogs cols={2} />
        </div>
      </section>
      <Admit />
    </Wrapper>
  );
};

const Wrapper = styled.main``;
