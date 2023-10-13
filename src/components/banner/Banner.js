import './Banner.scss';

//import BannerImg from '../../assets/banner.jpg';


export default function Header(props) {
  const { bannerClass, bannerText } = props;

  return (
    <section className={bannerClass}>
      {bannerText && (
        <p className="banner__text">
        {bannerText}
      </p>
      )}
    </section>
  );
}

