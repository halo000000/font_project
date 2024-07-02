
import Image from "next/image";
import Link from "next/link";
















export default function Main() {
  return (
    <div>
      <Part1></Part1>
    </div>
  );
}
export function Part1() {
  return (
    <div className="md:w-[50%] w-[85%]  mx-auto grid grid-cols-1 gap-10">
        <Image src="/creative.jpg" alt="font photo " width={800} height={400} className="flex justify-center mt-7"/>
      <h1 className="md:text-4xl text-2xl font-bold text-center mt-7">
        Unlock Your Creativity with 1400+ Unique Kurdish Fonts: A Typeface
        Treasure Trove
      </h1>
      <div>
        <h2 className="text-2xl font-bold ">Introduction </h2>
        <p>
          Have you ever struggled to find the perfect font for your Kurdish text
          projects? You’re not alone. The right font can make all the
          difference, turning an ordinary piece of work into something truly
          exceptional. But where do you find a diverse range of Kurdish fonts
          that cater to every style and mood? Enter the world of
          KurdishFonts.com – your ultimate destination to download over 1400
          unique Kurdish fonts.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold  ">Why Fonts Matter ?</h2>
        <p>
          Fonts aren’t just about aesthetics; they’re about expression. The
          right typeface can convey emotions, highlight important messages, and
          even reflect cultural heritage. For the Kurdish community, having
          access to a wide range of fonts means preserving and celebrating their
          linguistic beauty in every form of communication.
        </p>
      </div>
      <div>
        <a href="">Discover KurdishFonts.com </a>
        <br />
        <h2 className="text-2xl font-bold ">A Font Library Like No Other </h2>
        <p>
          KurdishFonts.com isn’t just another font website. It’s a carefully
          curated collection designed to meet the needs of every designer,
          writer, and creative professional looking for authentic Kurdish fonts.
          Whether you’re working on a personal project or a professional
          assignment, you’ll find something that fits your vision perfectly.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold ">Features of KurdishFonts.com </h2>

        <li>
          Over 1400 Unique Fonts: From traditional to contemporary styles, our
          library offers a vast selection.
        </li>
        <li>
          Easy Downloads: No complicated procedures. Just find the font you love
          and click to download.
        </li>
        <li>
          Regular Updates: New fonts are added regularly to keep your options
          fresh and exciting.
        </li>
        <li>
          User-Friendly Interface: Navigate the site with ease and find exactly
          what you’re looking for without any hassle.
        </li>
      </div>
      <div>
        <h2 className="text-2xl font-bold ">Why Choose KurdishFonts.com?</h2>
        <h2 className="text-2xl font-bold ">A Commitment to Quality </h2>
        <p>
          At KurdishFonts.com, we understand that quality is key. That’s why
          each font in our collection is meticulously vetted to ensure it meets
          high standards. Whether it’s readability, design intricacy, or
          cultural authenticity, you can trust that our fonts will enhance your
          projects.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold ">Cultural Preservation </h2>
        <p>
          Our fonts do more than just look good – they tell a story. By using
          KurdishFonts.com, you’re not just choosing a font; you’re embracing a
          rich cultural heritage and contributing to its preservation.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold ">How to Download Your Fonts </h2>
        <h3 className="text-1xl font-bold ">Step-by-Step Guide </h3>
        <p>
          Downloading fonts from KurdishFonts.com is a breeze. Here’s how to do
          it:
        </p>
        <li>
          Browse the Collection: Use the search bar or browse categories to find
          fonts that catch your eye.
        </li>
        <li>
          Find the Perfect Font: Once you’ve found a font you like, click on its
          image to view more details.
        </li>
        <li>
          Download the Font: Simply click the “Download” button to download the
          font file.
        </li>
      </div>
      {/* __________________________________ */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-2xl font-bold ">Frequently Asked Questions </h2>
        <h3 className="text-1xl font-bold ">
          What makes KurdishFonts.com different from other font websites?{" "}
        </h3>
        <p>
          Our focus on Kurdish fonts sets us apart. We offer an extensive and
          unique collection tailored to the needs of the Kurdish-speaking
          community and those who design for it.
        </p>
        <h3 className="text-1xl font-bold ">Are all the fonts free? </h3>
        <p>
          We offer a mix of free and premium fonts. You can enjoy many fonts at
          no cost, while premium options are available for those looking for
          exclusive designs.
        </p>
        <h3 className="text-1xl font-bold ">How often are new fonts added? </h3>
        <p>
          We regularly update our collection to ensure you always have fresh and
          exciting options to choose from. Check back often to see the latest
          additions.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold ">Conclusion </h2>
        <p>
          In a world where fonts can make or break your design, KurdishFonts.com
          stands out as a beacon for quality and cultural authenticity. With
          over 1400 unique Kurdish fonts ready for download, you’ll never run
          out of ways to express your creativity. So why wait? Dive into our
          extensive collection and start transforming your projects today.
          Remember, the right font can speak volumes – let KurdishFonts.com help
          you find your voice.
        </p>
        <br />
        <hr />
        <br /><br />
        <Link className=" hover:text-red-500 " href="/">
          Ready to explore a world of Kurdish fonts? Visit KurdishFonts.com now
          and download the perfect typeface for your next project!
        </Link><br /><br />
      </div>
    </div>
  );
}
