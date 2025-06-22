import React from 'react';
import styles from './CourseCard.module.css';

function CourseCard({ image, title, description, views }) {
  return (
    <article className={styles.courseCard}>
      <img src={image} alt={title} className={styles.courseImage} />
      <h2 className={styles.courseTitle}>{title}</h2>
      <p className={styles.courseDescription}>{description}</p>
      <div className={styles.cardFooter}>
        <span className={styles.viewCount}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c8492b463bf0e2205ccee5e353de0bec5d88e6b9fcf7cd88983ae973547b4a?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt="View icon"
            className={styles.viewIcon}
          />
          {views} views
        </span>
        <a href="#details" className={styles.viewDetails}>
          View Details
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4bdb84a28465164ef385fe01ee8837dfb5d51614bdcf7b0dd28a3c92c604060?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt="Arrow icon"
            className={styles.arrowIcon}
          />
        </a>
      </div>
    </article>
  );
}

export default CourseCard;
