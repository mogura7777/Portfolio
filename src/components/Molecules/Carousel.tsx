/** @format */

import Image from "next/image";
import MyImage from "components/Image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper"; //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation]);

type Props = {
  linkList: string[];
};

const Carousel = (props: Props) => {
  return (
    <Swiper
      slidesPerView={2} //一度に表示するスライドの数
      pagination={{
        clickable: true,
      }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
    >
      {props.linkList.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <MyImage className={"slide-img"} fname={src} size={300} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
