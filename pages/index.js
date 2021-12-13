import { useStoreActions, useStoreState } from "easy-peasy";
import Image from "next/image";
import Cart from "../components/Cart/Cart";
import styles from "../styles/Index.module.scss";

export default function Home() {
  var data = [
    {
      id: 1,
      title: "Bismuth",
      description:
        "Bismuth is a chemical element with symbol Bi and atomic number 83.",
      image: "/Assets/Img/BismuthGemstone.png",
      link: "https://en.wikipedia.org/wiki/Bismuth",
      price: 50,
    },
    {
      id: 2,
      title: "Quartz",
      description:
        "Quartz is a chemical element with symbol Q and atomic number Quartz and atomic number 138.",
      image: "/Assets/Img/RoseGem.png",
      link: "https://en.wikipedia.org/wiki/Quartz",
      price: 25,
    },
    {
      id: 3,
      title: "Amethyst",
      description:
        "Amethyst is a gemstone. Amethyst's gemstone is located on her chest.",
      image: "/Assets/Img/Amethyst.png",
      link: "https://en.wikipedia.org/wiki/Amethyst",
      price: 15,
    },
    {
      id: 4,
      title: "Peridot",
      description:
        "Peridot is a gemstone. Peridot's gemstone is located on her chest.",
      image: "/Assets/Img/Peridot.png",
      link: "https://en.wikipedia.org/wiki/Peridot",
      price: 10,
    },
  ];


  const handleAddToCart = useStoreActions((actions) => actions.addToCart);

  return (
    <div className={styles.HomeContainer}>
      <main className={styles.Home}>
        <h1 className={styles.Home__Heading}>Welcome to Gems</h1>
        <div className={styles.Home__Grid}>
          {data.map((item, index) => (
            <div key={index} className={styles.Home__Card}>
              <div className={styles.Home__Card__Top}>
                <div className={styles.Home__Card__Top__left}>
                  <Image alt="Gem" src={item.image} width={45} height={45} />
                  <h2>{item.title}</h2>
                </div>
                <div className={styles.Home__Card__Top__right}>
                  <h3>${item.price}</h3>
                </div>
              </div>
              <p>{item.description}</p>
              <div className={styles.Home__Card__Bottom}>
                <a target="_blank" href={item.link} rel="noopener noreferrer">
                  Read more
                </a>
                <div onClick={() => {handleAddToCart(item)}}>Add to cart</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Cart />
    </div>
  );
}
