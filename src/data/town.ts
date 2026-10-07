export type PlaceId =
  | "forest"
  | "lake"
  | "boat"
  | "soccer"
  | "marsh"
  | "grass"
  | "shop"
  | "restaurant"
  | "gas"
  | "library"
  | "school"
  | "clinic"
  | "post"
  | "fire"
  | "bus"
  | "bakery"
  | "rail"
  | "home"
  | "house-a"
  | "house-b"
  | "target-house";

export interface TownPlace {
  id: PlaceId;
  label: string;
  legend: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
}

export const TOWN_PLACES: TownPlace[] = [
  { id: "forest", label: "جنگل", legend: "پارک جنگلی", x: 28, y: 22, w: 108, h: 88, fill: "var(--color-forest)" },
  { id: "lake", label: "دریاچه", legend: "دریاچه", x: 154, y: 20, w: 168, h: 70, fill: "var(--color-water)" },
  { id: "boat", label: "قایق", legend: "ایستگاه قایق‌رانی", x: 210, y: 52, w: 56, h: 20, fill: "var(--color-pine-deep)" },
  { id: "soccer", label: "فوتبال", legend: "زمین فوتبال", x: 154, y: 100, w: 92, h: 42, fill: "var(--color-field)" },
  { id: "target-house", label: "خانهٔ نامه", legend: "خانه", x: 258, y: 100, w: 78, h: 42, fill: "#c9a57a" },
  { id: "restaurant", label: "رستوران", legend: "رستوران", x: 348, y: 100, w: 86, h: 42, fill: "#cbb59a" },
  { id: "marsh", label: "باتلاق", legend: "باتلاق", x: 484, y: 24, w: 90, h: 54, fill: "#5d6b52" },
  { id: "grass", label: "چمن", legend: "چمن‌زار", x: 588, y: 24, w: 140, h: 54, fill: "#8aa266" },
  { id: "shop", label: "فروشگاه", legend: "فروشگاه", x: 28, y: 196, w: 92, h: 50, fill: "var(--color-roof)" },
  { id: "library", label: "کتابخانه", legend: "کتابخانه", x: 136, y: 196, w: 92, h: 50, fill: "#d7c4a3" },
  { id: "gas", label: "بنزین", legend: "پمپ بنزین", x: 258, y: 196, w: 78, h: 50, fill: "#b9a48a" },
  { id: "school", label: "مدرسه", legend: "مدرسه", x: 360, y: 188, w: 120, h: 62, fill: "#c9b48a" },
  { id: "clinic", label: "درمانگاه", legend: "درمانگاه", x: 500, y: 196, w: 92, h: 50, fill: "#d2c0aa" },
  { id: "fire", label: "آتش‌نشانی", legend: "آتش‌نشانی", x: 612, y: 196, w: 116, h: 50, fill: "#c4a690" },
  { id: "post", label: "پست", legend: "اداره پست", x: 28, y: 276, w: 92, h: 46, fill: "#d4c6b0" },
  { id: "bus", label: "اتوبوس", legend: "ایستگاه اتوبوس", x: 140, y: 284, w: 72, h: 30, fill: "var(--color-ink-soft)" },
  { id: "bakery", label: "نانوایی", legend: "نانوایی", x: 360, y: 276, w: 92, h: 46, fill: "#d8c2a0" },
  { id: "rail", label: "راه‌آهن", legend: "ایستگاه راه‌آهن", x: 28, y: 384, w: 140, h: 46, fill: "#a89880" },
  { id: "house-a", label: "خانه", legend: "خانه", x: 188, y: 384, w: 92, h: 46, fill: "#d6c3a8" },
  { id: "house-b", label: "خانه", legend: "خانه", x: 300, y: 384, w: 92, h: 46, fill: "#d6c3a8" },
  { id: "home", label: "خانهٔ سارا", legend: "خانه", x: 612, y: 384, w: 116, h: 46, fill: "#d2b48c" },
];

export const LEGEND_SLOTS: { id: string; label: string; answer: PlaceId }[] = [
  { id: "lake", label: "دریاچه", answer: "lake" },
  { id: "boat", label: "ایستگاه قایق‌رانی", answer: "boat" },
  { id: "soccer", label: "زمین فوتبال", answer: "soccer" },
  { id: "forest", label: "پارک جنگلی", answer: "forest" },
  { id: "gas", label: "پمپ بنزین", answer: "gas" },
  { id: "restaurant", label: "رستوران", answer: "restaurant" },
  { id: "shop", label: "فروشگاه", answer: "shop" },
  { id: "library", label: "کتابخانه", answer: "library" },
  { id: "fire", label: "آتش‌نشانی", answer: "fire" },
  { id: "bus", label: "ایستگاه اتوبوس", answer: "bus" },
  { id: "post", label: "اداره پست", answer: "post" },
  { id: "rail", label: "ایستگاه راه‌آهن", answer: "rail" },
];

export const LYING_LEGEND: { id: string; fake: string; truth: string }[] = [
  { id: "lake", fake: "پارک جنگلی", truth: "دریاچه" },
  { id: "forest", fake: "دریاچه", truth: "پارک جنگلی" },
  { id: "soccer", fake: "رستوران", truth: "زمین فوتبال" },
  { id: "restaurant", fake: "زمین فوتبال", truth: "رستوران" },
];
