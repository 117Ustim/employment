"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./swiper.module.scss";
import Image from "next/image";

export default function Swiper() {
  const carouselItems = [
    { id: 1, image: "/2.jpg", title: "Склад Amazon в Дубаи, ОАЭ", requirements: "Требования: Любой пол от 18 до 60 лет. Знание языка не требуется.", salary: "Зарплата: 18 USD в час нетто.", schedule: "График работы: 5-6 дней в неделю, 8-10-12 часов в день." },
    { id: 2, image: "/1.jpg", title: "Склад техники Apple в США", requirements: "Требования: Любой пол от 18 до 60 лет.Знание языка не требуется", salary: "Зарплата: 19 EUR в час нетто", schedule: "График работы: 5-6 дней в неделю, от 8 до 12 часов в день" },

    { id: 3, image: "/3.jpg", title: "Водитель категории 'В' и 'С'", requirements: "Требования: Любой пол от 18 до 60 лет. Знание языка не требуется.", salary: "Зарплата: 18 USD в час нетто.", schedule: "График работы: 5-6 дней в неделю, 8 -12 часов в день." },
    { id: 4, image: "/4.jpg", title: "Склад одежды в Сеуле", requirements: "Требования: Любой пол от 18 до 55 лет. Знание языка не требуется.", salary: "Зарплата: 16 USD в час нетто.", schedule: "График работы: 5 дней в неделю, 10 часов в день." },
    { id: 5, image: "/1.jpg", title: "Склад Nike в Дубаи, ОАЭ", requirements: "Требования: Любой пол от 18 до 50 лет. Знание языка не требуется.", salary: "Зарплата: 20 USD в час нетто.", schedule: "График работы: 5-6 дней в неделю, 8-10-12 часов в день." },
  ];

  const GAP = 20;

  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef(null);
  const carouselWrapperRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const getVisibleCount = (wrapperWidth) => {
    if (wrapperWidth >= 1340) return 4;
    if (wrapperWidth >= 1000) return 3;
    if (wrapperWidth >= 660) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const wrapperWidth = carouselWrapperRef.current?.offsetWidth || 0;
      const newVisibleCount = getVisibleCount(wrapperWidth);
      setVisibleCount(newVisibleCount);

      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getInfiniteCarouselItems = () => {
    if (carouselItems.length <= visibleCount) return carouselItems;

    const clonedItems = [...carouselItems];

    for (let i = 0; i < visibleCount; i++) {
      clonedItems.unshift(carouselItems[carouselItems.length - 1 - i]);
      clonedItems.push(carouselItems[i]);
    }

    return clonedItems;
  };

  const infiniteCarouselItems = getInfiniteCarouselItems();
  const initialIndex = carouselItems.length > visibleCount ? visibleCount : 0;

  useEffect(() => {
    if (carouselItems.length > visibleCount) {
      setCurrentIndex(initialIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [visibleCount]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        if (carouselTrackRef.current) {
          carouselTrackRef.current.style.transition = "none";
        }
        const targetJumpIndex = infiniteCarouselItems.length - visibleCount;
        setTimeout(() => {
          setCurrentIndex(targetJumpIndex);
          if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transition = "transform 0.5s ease";
          }
        }, 50);
        return prevIndex;
      }
      return prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= infiniteCarouselItems.length - visibleCount) {
        if (carouselTrackRef.current) {
          carouselTrackRef.current.style.transition = "none";
        }
        setTimeout(() => {
          setCurrentIndex(initialIndex);
          if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transition = "transform 0.5s ease";
          }
        }, 50);
        return prevIndex + 1;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className={styles.carouselWrapper} ref={carouselWrapperRef}>
      <button className={styles.arrow} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.carousel}>
        <div
          ref={carouselTrackRef}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + GAP)}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {infiniteCarouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={styles.carouselItem}
              ref={index === initialIndex ? cardRef : null}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className={styles.image}
              />
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.text}>{item.requirements}</p>
              <p className={styles.text}>{item.salary}</p>
              <p className={styles.text}>{item.schedule}</p>
              <a
                href="https://t.me/+Ecw2cS1TW1Q4NjM1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.detailsButton}>Подробнее</button>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrow} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}