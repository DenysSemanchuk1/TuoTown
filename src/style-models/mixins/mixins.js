export const transition = `
  transition: all .4s;
`;

export const containerFluid = `
  padding: 0 30px;
`;

export const advantagesSection = `
.advantages {
  padding-bottom: 90px;
}
.advantages__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 640px;
  margin-top: 90px;
  img {
    border-radius: 18px;
  }
}
.advantages__descr {
  position: relative;
}
.advantages__text {
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 410px;
  width: 100%;
  transform: translate(-50%, -50%);

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
  }
  &.right {
    right: 50%;
    left: auto;
    transform: translateX(50%);
  }
}
`;
