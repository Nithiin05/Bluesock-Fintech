import React from 'react';
import styles from './TechnicalAnalysis.module.css';
import Header from './Header';
import CourseCard from './CourseCard';
import DoubleCard from './DoubleCard';

const courseData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bf2fe07c15842d5a339df3eccb7b2b84704951a037522fdcbc4a5a6e5bb5e13?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Basics of Technical analysis",
    description: "Understand basics of chart patterns, candlesticks, indicators, volume,...",
    views: 141300
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3825aa020e16ea29f9ab1fdf6c80de6721401b038b2ca9c1fadbcd8100703dea?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Candlesticks Charts & Patterns",
    description: "Learn to read candlestick patterns and identify trends",
    views: 249832
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f066e08f2fdc499df563bfe9c3683192fdbfa04eeb69dc2488a85c2e2c50e2?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Chart Patterns",
    description: "Learn to predict future price movement with chart patterns",
    views: 156314
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/16d0df5801943dd82f8141ee5a93bfe28981c3b34e92cb1af74ad01d04d9c2ff?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Technical Indicators",
    description: "Understand how to identify the trend's direction",
    views: 76222
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dee86c201c16df5a8d4b7094d5db31aa3e180b20192fe0da6a49b525886f6e0?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Swing Trading",
    description: "Discover the art and science of swing trading",
    views: 62560
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddefc05e3ca85974c74b5e71998224983580ef595455a1772b508f406a012b19?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title: "Algo Trading",
    description: "Discover the advantages, strategies, and regulatory aspects of algorit...",
    views: 24783
  }
];

const doubleCardData = [
  {
    image1: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd0be67de60186200ecb05ce4fd57e7cd1d01024895fbc7cbb853a1134b675a4?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title1: "Magic of Moving Averages",
    description1: "Explore the types, uses, and application of moving averages",
    views1: 28581,
    image2: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0c5ee8380a64cf70a348398bf8efeff97f1fb091d9f3c47feef7b7bb425fcea?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title2: "The world of Fibonacci",
    description2: "Explore Fibonacci tools for reliable technical analysis in trading",
    views2: 36029
  },
  {
    image1: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a6cbf7564f612641b7c291e6ef4c7fc76c07a18e5f53ffa5bfd13fa7d690d15?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title1: "Basics of Elliott Wave",
    description1: "Learn the principles and patterns of Elliott Wave Theory",
    views1: 114261,
    image2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9851b5748ac9bb055310608de58fc1a0d4fa148f2033c4913e54a8e70ffaa7a?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title2: "Point and Figure Charts",
    description2: "Learn how to construct, analyse, and use Renko charts",
    views2: 17617
  },
  {
    image1: "https://cdn.builder.io/api/v1/image/assets/TEMP/07077e14b3b3f1771ae49d186831083b08be89dd4a66b1aa8491a65ac4506317?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title1: "Intraday Trading",
    description1: "Explore effective trading strategies for intraday trading",
    views1: 174044,
    image2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f29136313206d85fcbe1293f1fa476f911167c600aa997cf69d7d9f491d9b264?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    title2: "Trading Psychology",
    description2: "Learn how to overcome psychological challenges and look into trading m...",
    views2: 17833
  }
];

function TechnicalAnalysis() {
  return (
    <main className={styles.technicalAnalysis}>
      <Header />
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <span className={styles.breadcrumbHome}>Home</span>
        <span className={styles.breadcrumbSeparator}> &gt; </span>
        <span className={styles.breadcrumbSchool}>Stock School</span>
        <span className={styles.breadcrumbSeparator}> &gt; </span>
        <span className={styles.breadcrumbCurrent}>Technical Analysis</span>
      </nav>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Technical Analysis</h1>
      </section>
      <section className={styles.courseGrid}>
        {courseData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </section>
      <section className={styles.doubleCardGrid}>
        {doubleCardData.map((cards, index) => (
          <DoubleCard key={index} {...cards} />
        ))}
      </section>
    </main>
  );
}

export default TechnicalAnalysis;
