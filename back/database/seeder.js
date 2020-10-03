import mongoose from 'mongoose';
import './db.js';
import Card from '../models/card.js';

const entries = [
  {
    theme: "Столицы",
    questions: [
      {
        question: "Стола Канады?",
        price: 100,
        variants: ["Торонто", "Мельбурн", "Оттава"],
        correct: "Оттава",
      },
      {
        question: "Столица Великобритании?",
        price: 200,
        variants: ["Прага", "Воронеж", "Лондон"],
        correct: "Лондон",
      },
      {
        question: "Столица США?",
        price: 300,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица России?",
        price: 400,
        variants: ["Лондон", "Москва", "Париж"],
        correct: "Москва",
      },
      {
        question: "Столица Египта?",
        price: 500,
        variants: ["Лондон", "Каир", "Париж"],
        correct: "Каир",
      },
    ],
  },
  {
    theme: "Столицы",
    questions: [
      {
        question: "Столица Мексики?",
        price: 100,
        variants: ["Пекин", "Мехико", "Краснодар"],
        correct: "Мехико",
      },
      {
        question: "Столица Японии?",
        price: 200,
        variants: ["Лондон", "Токио", "Стамбул"],
        correct: "Токио",
      },
      {
        question: "Столица Португалии?",
        price: 300,
        variants: ["Лондон", "Лисабон", "Париж"],
        correct: "Лисабон",
      },
      {
        question: "Столица Испании?",
        price: 400,
        variants: ["Мадрид", "Вашингтон", "Париж"],
        correct: "Мадрид",
      },
      {
        question: "Столица Китая?",
        price: 500,
        variants: ["Лондон", "Вашингтон", "Пекин"],
        correct: "Пекин",
      },
    ],
  },
];

(async () => {
  await mongoose.connection.dropDatabase();
  await Card.insertMany(entries);
  await mongoose.connection.close(); // or await mongoose.disconnect();
})()
