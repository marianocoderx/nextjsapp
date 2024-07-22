
import FooterComp from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>

        <div>Mi logo</div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about us">About us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/support">Support</Link></li>
          <li><Link href="/news">Latest news</Link></li>
        </ul>

          <div>
            <h1>Mi titulo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae ncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.</p>
            <button>Contact</button>
          </div>

          <div>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>

          <div>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
          </div>

          <FooterComp/>

        </main>
  );
}
